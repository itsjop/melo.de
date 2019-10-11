<template lang="pug">
section#swatch-picker(ref="swatches")
  #quick-pallette
    h1.color-title Profile colors
    label.color-label Colors:
    label.preview-label Previews:
    .color-pickers
      .color-picker.primary-dark(@click="toggleColors('primaryDark')")
        .popup(:class="showColors.primaryDark ? 'active'  : '' " @click="showColors.primaryDark = !showColors.primaryDark")
          chrome-picker(:value="colors.bg_primary" @input="updateValue")
        span ✎ Primary Dark:
      .color-picker.secondary-dark(@click="toggleColors('secondaryDark')")
        .popup(:class="showColors.secondaryDark ? 'active'  : '' ")
          chrome-picker(:value="colors.bg_secondary" @input="updateValue")
        label ✎ Secondary Dark:
      .color-picker.primary-light(@click="toggleColors('primaryLight')")
        .popup(:class="showColors.primaryLight ? 'active'  : '' ")
          chrome-picker(:value="colors.fg_primary" @input="updateValue")
        span ✎ Primary Light:
      .color-picker.secondary-light(@click="toggleColors('secondaryLight')")
        .popup(:class="showColors.secondaryLight ? 'active'  : '' ")
          chrome-picker(:value="colors.fg_secondary" @input="updateValue")
        span ✎ Secondary Light:
    .color-previews
      .dark-preview.color-preview
        h1 Header Text
        h1.second Header Text
        p Sample Smaller Text 
        p.second on Both Colors
      .light-preview.color-preview
        h1 Header Text
        h1.second Header Text
        p Sample Smaller Text 
        p.second on Both Colors
  accessibility-checker(:colors="colors")
</template>

<script>
import AccessibilityChecker from './AccessibilityChecker/AccessibilityChecker'
import {Chrome} from 'vue-color'

export default {
  name: 'SwatchPicker',   
  data() {
    return {
      showColors:{
        primaryDark:false,
        primaryLight:false,
        secondaryDark:false,
        secondaryLight:false,
      },
      mount: false
    }
  },
  methods:{
    toggleColors(colorName){
      if (this.showColors[colorName]){
        this.toggleAllColors()
      }else{
        this.toggleAllColors()
        this.showColors[colorName] = true
      }
    },
    toggleAllColors(){
      this.showColors.primaryDark = false
      this.showColors.primaryLight = false
      this.showColors.secondaryDark = false
      this.showColors.secondaryLight = false
    },
    updateValue (value, second) {
      // this.colors = value
      let tempColors = this.colors;
      (this.showColors.primaryDark ? tempColors.bg_primary = value.hex : '');
      (this.showColors.secondaryDark ? tempColors.bg_secondary = value.hex : '');
      (this.showColors.primaryLight ? tempColors.fg_primary = value.hex : '');
      (this.showColors.secondaryLight ? tempColors.fg_secondary = value.hex : '');
      this.$emit('setColor',{tempColors});
    }
  },
  mounted(){
    this.mount = true
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
  watch: { 
    colors: {
      immediate: true,
      deep: true,
      handler(newVal, oldVal) {
        console.log('Prop changed: ', newVal, ' | was: ', oldVal)
        if(this.mount){
          document.documentElement.style.setProperty('--body-grad-fg', newVal.bg_primary);
          document.documentElement.style.setProperty('--body-grad-bg', newVal.bg_secondary);
          document.documentElement.style.setProperty('--body-text-fg', newVal.fg_primary);
          document.documentElement.style.setProperty('--body-text-bg', newVal.fg_secondary);
        }
      }
    }
  },
  // watch: {
  //   // whenever question changes, this function will run
  //   colors(newVal, oldVal) {
  //     console.log('Prop changed: ', newVal, ' | was: ', oldVal)
  //     this.$refs.swatches.style.setProperty('--body-grad-bg', newVal.bg_primary);
  //     this.$refs.swatches.style.setProperty('--body-grad-fg', newVal.bg_secondary);
  //     this.$refs.swatches.style.setProperty('--body-text-bg', newVal.fg_primary);
  //     this.$refs.swatches.style.setProperty('--body-text-fg', newVal.fg_secondary);
  //   }
  // },
  components:{
    AccessibilityChecker,
    'chrome-picker': Chrome
  }
}
</script>

<style lang="stylus">
@require '../../assets/grad-bg.styl'
#quick-pallette
  padding 0 40px
  user-select none
  text-align center
  display grid
  grid-template\
    "title title"\
    "color-title preview-title"\
    "colors previews"\
    /3fr 5fr
  column-gap 20px
  --dark1 darkred
  --dark2 darkcyan
  --light1 pink
  --light2 yellowgreen
  .color-title
    grid-area title
  .color-label
    grid-area color-title
  .preview-label
    grid-area preview-title
  .color-pickers
    grid-area colors
    display grid
    grid-template-rows repeat(4, 1fr)
    align-content center
    align-items center
    .color-picker
      height 100%
      display grid
      align-content center
      position relative
      cursor pointer
      transition 0s
      .popup
        position absolute
        height 100%
        right 0
        display none
        &.active
          display block
        .vc-chrome
          position absolute
          left 0
          z-index 4
    .primary-dark
      background var(--body-grad-fg)
      color white
    .secondary-dark
      background var(--body-grad-bg)
      color white
    .primary-light
      background var(--body-text-fg)
      color #333
    .secondary-light
      background var(--body-text-bg)
      color #333
  .color-previews
    grid-area previews
    max-width 700px
    .color-preview
      display grid
      grid-template auto auto / auto auto 
      align-items center
     transition 0s
    .dark-preview
      grad-bg(var(--body-grad-fg),var(--body-grad-bg))
      h1
        color var(--body-text-fg)
        &.second
          color var(--body-text-bg)
      p
        color var(--body-text-bg)
        &.second
          color var(--body-text-fg)
    .light-preview
      grad-bg(var(--body-text-fg),var(--body-text-bg))
      h1
        color var(--body-grad-fg)
        &.second
          color var(--body-grad-bg)
      p
        color var(--body-grad-bg)
        &.second
          color var(--body-grad-fg)     
    


</style>
