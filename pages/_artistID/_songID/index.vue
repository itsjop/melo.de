<template lang="pug">
section#song
  #trackbar(ref="trackbar")
</template>

<script>
import { TinyColor } from '@ctrl/tinycolor';
export default {
  
  name: 'name',   
  data() {
    return {
    }
  },
  methods:{
    // TODO: Move this to Store so it's a global Function
    setRelativeGradient(element, startCol, endCol){
      // Pulls the coordinates of the given element and mixes the gradient so that it matches the background of the page
      let tnyStartColor = new TinyColor(startCol).mix(endCol, (document.getElementById('trackbar').getBoundingClientRect().left / document.body.clientWidth) * 100)
      let tnyEndColor = new TinyColor(startCol).mix(endCol, (document.getElementById('trackbar').getBoundingClientRect().right / document.body.clientWidth) * 100)
      document.getElementById('trackbar').style.setProperty('--grad-start', tnyStartColor.toHexString());
      document.getElementById('trackbar').style.setProperty('--grad-end', tnyEndColor.toHexString());
    }
  },
  mounted(){
    console.log(this.$refs)
    this.setRelativeGradient(this.$refs.trackbar, "#42275a", "#734b6d")
  },
  props: {
  }
}
</script>

<style lang="stylus">

#song
  display grid
  box-sizing border-box
  padding 20px
  grid-template \
    ". . ." 3fr \
    ". . ." 5fr \
    ". . ." 5fr \
    "trackbar trackbar trackbar" 2fr \ 
    / 1fr 20fr 1fr  
  width 70vmin
  height 70vmin
  background url('https://i.redd.it/luei435pdq001.jpg')
  background-size cover
  background-repeat none
  #trackbar
    grid-area trackbar
    --grad-start: red
    --grad-end: blue
    background linear-gradient(to right, var(--grad-start),  var(--grad-end))
</style>

