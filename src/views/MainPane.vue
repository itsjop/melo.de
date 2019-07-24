<template lang="pug">
section#main-pane
  .allsongs
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
.allsongs
	max-width 1000px
	margin 0 auto
	background white
// @keyframes reveal1{
// 	from{		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);	}
// 	to{	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);	}
// }@keyframes reveal2{
// 	from{		clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);	}
// 	to{	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);}
// }
</style>
