<template lang="pug">
section#main-pane
  .allsongs
    h1 Your Top Songs:
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
  margin-bottom var(--toolbar-size)
  display grid
  h1
    font-size 2em
    padding 5px
    margin 10px
    color white
    // background black
    display inline 
    text-align center
	.song-card:nth-child(2)
    border-radius 20px 20px 0 0
	.song-card:last-child
    border-radius 0 0 20px 20px
// @keyframes reveal1{
// 	from{		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);	}
// 	to{	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);	}
// }@keyframes reveal2{
// 	from{		clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);	}
// 	to{	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);}
// }
</style>
