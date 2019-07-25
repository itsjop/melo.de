<template lang="pug">
section#sidepane
  
</template>

<script>
export default {
  name: 'sidepane',   
  data() {
    return {
    }
  },
  methods:{    
  },
  props: {
  }
}
</script>

<style lang="stylus">
#sidepane
  border-radius 20px
  height 100%
  width 100%
  background gray
  grid-area sidepane
@media (max-width: 1400px)
  #sidepane
    display none
</style>
