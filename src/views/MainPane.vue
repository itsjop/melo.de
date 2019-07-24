<template lang="pug">
section#main-pane
  song-card(v-for="(song, index) in songList" :song="song" :key="song.name" :index="index")
</template>

<script>
import SongCard from "../components/SongCard/SongCard"
export default {
  name: 'MainPane',   
  data() {
    return {
    }
  },
  methods:{    
  },
  props: {
    songList:{
      type: Array,  
      default() {
        return []
      }
    }
  },
  components:{
    SongCard
  }
}
</script>

<style lang="stylus">
</style>
