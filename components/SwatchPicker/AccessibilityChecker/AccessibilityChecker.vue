  <template lang="pug">
section#accessibility-checker
  .toggler ˅ Advanced accessibility checks ˅
  .tabbar
    .tab-item#normal(@click="vision='normal'" :class="vision==='normal'?'selected':''") Normal Vision
    .tab-item#dueter(@click="vision='deuteranomaly'" :class="vision==='deuteranomaly'?'selected':''") Deuteranomaly
    .tab-item#proto(@click="vision='protanomaly'" :class="vision==='protanomaly'?'selected':''") Protanomaly
    .tab-item#tritan(@click="vision='tritanopia'" :class="vision==='tritanopia'?'selected':''") Tritanopia	
  .size-toggle
    label Header
    input(type="checkbox" v-model="large")
  .weight-toggle
    label Weight
    input(type="range" min="100" max="900" v-model="bold")
  .previews.large-font
    .prev.bg-dark-1(v-for="(box, index) in boxes" :style="{ background: box.bg}" :class="box.txt===box.bg ? 'same':''")
      h1.text-preview(:style="{ color: box.txt, fontWeight: bold}" :class="large ? 'large' : '' ") Aa        
      .checker(v-if="box.txt!==box.bg" :class="(contrastChecker(box.txt, box.bg, index)==='yes' ? 'right' : (contrastChecker(box.txt, box.bg, index)==='maybe' ? 'maybe' : 'wrong' ) )")
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
        &.right
          background darkgreen
          transform translate(-50%, -80%) rotate(360deg)
          &::before
            content '⎷'
        &.wrong
          background red
          &::before
            content 'X'
        &.maybe
          background navy
          transform translate(-50%, -80%) rotate(180deg)
          &::before
            content '~'
</style>
