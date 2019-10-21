  <template lang="pug">
section#accessibility-checker
  .toggler ˅ Advanced accessibility checks ˅
  .tabbar
    .tab-item#normal(@click="vision='normal'" :class="vision==='normal'?'selected':''") Normal Vision
    .tab-item#dueter(@click="vision='deuteranomaly'" :class="vision==='deuteranomaly'?'selected':''") Deuteranomaly
    .tab-item#proto(@click="vision='protanomaly'" :class="vision==='protanomaly'?'selected':''") Protanomaly
    .tab-item#tritan(@click="vision='tritanopia'" :class="vision==='tritanopia'?'selected':''") Tritanopia
  .control
    .size-toggle
      label Large Font
      input(type="checkbox" v-model="large")
    .weight-toggle
      label Weight
      input(type="range" step="10" min="100" max="900" v-model="bold")
      label {{bold}}
  .previews.large-font
    .prev.bg-dark-1(v-for="(box, index) in boxes" :style="{ background: box.bg}" :class="box.txt===box.bg ? 'same':''")
      h1.text-preview(:style="{ color: box.txt, fontWeight: bold}" :class="large ? 'large' : '' ") Aa        
      .checker(v-if="box.txt!==box.bg" :class="(contrastChecker(box.txt, box.bg, index)==='yes' ? 'right' : (contrastChecker(box.txt, box.bg, index)==='maybe' ? 'maybe' : 'wrong' ) )")
        .popup 
</template>

<script>
var tinycolor = require("tinycolor2");
export default {
  name: 'AccessibilityChecker',   
  data() {
    return {
      large: false,
      bold: 400,
      vision: "normal"
    }
  },
  methods:{
    contrastChecker(txt, bg, index){
      let contrasting = "no"
      let contrast = tinycolor.readability(txt, bg)
      console.log("color",index, txt, bg, contrast)

      if(this.large){ // Header Size
        if(this.bold > 700){      if (contrast > 1.8) {contrasting = "yes" } else if (contrast>1.5) { contrasting = "maybe" } } // bold
        else if(this.bold > 400){ if (contrast > 1.9) {contrasting = "yes" } else if (contrast>1.6) { contrasting = "maybe" } } // medium
        else {                    if (contrast > 2.0) {contrasting = "yes" } else if (contrast>1.7) { contrasting = "maybe" } } // light
      }else{ // Body Size
        if(this.bold > 700){      if (contrast > 2.0) {contrasting = "yes" } else if (contrast>1.7) { contrasting = "maybe" } } // bold
        else if(this.bold > 400){ if (contrast > 2.3) {contrasting = "yes" } else if (contrast>1.8) { contrasting = "maybe" } } // medium
        else {                    if (contrast > 2.5) {contrasting = "yes" } else if (contrast>1.9) { contrasting = "maybe" } } // light
      }
      return contrasting
    }  
  },
  props: {
    colors: {
      type: Object,
      default: () => ({
        bg_primary:"#fff",
        bg_secondary:"#fff",
        fg_primary:"#fff",
        fg_secondary:"#fff",
      }),
    },
  },
  computed:{
    boxes(){
      let allColors = [...Object.values(this.colors),"white","black"]
      console.log("allColors",allColors)
      let boxes=[]
      allColors.map(row =>{
        allColors.map(col =>{
          if (row!==col){
            if (row!=='black'){ // there's nowhere on the site with black backgrounds, doesn't need to have a cell
              boxes.push({bg:row, txt: col})
            }
          }
        })
      })
      console.log("boxes",boxes)
      return boxes
    }
  }
}
</script>

<style lang="stylus">
@font-face
  font-family 'IBMPlexSansVariable'
  src url('../../../assets/IBMPlexSansVar-Roman.woff2')

#accessibility-checker
  padding 0 40px
  text-align center
  .tabbar
    display flex
    justify-content space-between
    color #666 //😎 oh yeah 🅱️abey 😎
    border-bottom 2px solid
    .tab-item
      cursor pointer
      transition .5s
      &.selected 
        color black
        font-weight 900
  .control
    display flex
    justify-content space-around
    label 
      font-size 18px
    .weight-toggle
      display flex
      align-items center
  .previews
    display grid
    grid-template-rows repeat(5, 1fr)
    grid-auto-flow column
    gap 10px
    padding 10px 0
    .prev
      position relative
      --prev-bg darkcyan
      --prev-text white
      color var(--prev-text)
      background var(--prev-bg)
      transition background 0s
      display grid 
      align-items center
      &.same
        background transparent
        color transparent
        transform scale(.4)
        .checker
          &*
            ::before
              content unset
      h1
        // font-family Podkova, Montserrat, sans-serif
        font-family "IBMPlexSansVariable", sans-serif
        font-size 70px
        line-height 70px
        transition .5s transform cubic-bezier(0.680, -0.550, 0.265, 1.550), color 0s
        font-weight 300
        transform scale(.4)
        &.large
          transform scale(1)
        &.bold
          font-weight 800

      .checker
        position absolute
        left 90%
        top 100%
        transform: translate(-50%, -80%)
        background white
        padding 2px 6px
        border-radius 100vw
        color white
        width 30px
        height 30px
        display grid 
        align-items center 
        transition .5s
        &::before
          pointer-events none
        .popup
          opacity 0
          width 220px
          height 50px
          transition .5s cubic-bezier(0.680, -0.550, 0.265, 1.550)
          transform translate(5%, 0%)
          filter drop-shadow(3px 3px 3px #555)
          font-size 14px
          position absolute
          right 0
          bottom 0
          pointer-events none
          border-radius 5px
          &::before
            content ''
            clip-path: polygon(50% 100%, 0 0, 100% 0);
            width 30px
            height 10px
            position absolute
            bottom -10px
            right 5%
            background var(--popup-bg)
        &:hover
          .popup
            background var(--popup-bg)
            opacity 1
            transform translate(5%, -70%)
            
        &.right
          background darkgreen
          transform translate(-50%, -80%) rotate(360deg)
          &::before
            content '⎷'
          .popup
            --popup-bg: darkgreen
            &:after
              content:'This color combination meets web accessibility standards.'
        &.wrong
          background red
          &::before
            content 'X'
          .popup
            --popup-bg: red
            &:after
              content:'This color combination does not meet web accessibility standards.'
        &.maybe
          background navy
          transform translate(-50%, -80%) rotate(180deg)
          z-index 50
          &::before
            content '~'
          .popup
            --popup-bg: navy
            transform translate(81%, 70%) rotate(180deg) 
            top 0
            &:after
              content:'This color combination is dubious, but might work at the right size.'
</style>
