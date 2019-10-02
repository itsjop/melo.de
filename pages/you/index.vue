<template lang="pug">
section#you   
  .links
    nuxt-link(to="/you/albums") albums  
    nuxt-link(to="/you/following") following  
    nuxt-link(to="/you/history") history  
    nuxt-link(to="/you/library") library  
    nuxt-link(to="/you/likes") likes  
    nuxt-link(to="/you/playlists") playlist  
    nuxt-link(to="/you/stations") stations  
  <NuxtChild :key="$route.params.id" />
</template>

<script>
export default {
  name: 'name',   
  data() {
    return {
    }
  },
  methods:{    
  },
  props: {
  },
}
</script>

<style lang="stylus">
#you
  height 100%
  display grid
  gap 10px
  justify-content center
  justify-items center
  align-content center
  .links
    display grid 
    grid-auto-flow column 
    gap 10px
h1, p
  color white
a:visited, a:link
  color white
</style>
