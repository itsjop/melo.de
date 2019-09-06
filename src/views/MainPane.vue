<template lang="pug">
section#main-pane
  .centerpane
    h1 Your Home Feed:
    .allsongs
      song-card(v-for="(song, index) in songList" :song="song" :key="song.name" :index="index")
  sidepane
</template>


<script>
import SongCard from "../components/SongCard/SongCard"
import Sidepane from "../components/Sidepane/Sidepane"
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
    SongCard,
    Sidepane,
  }
}
</script>


<style lang="stylus">
#main-pane
  display grid 
  width 100vw
  justify-self center
  justify-content center
  justify-items center
  max-width 1700px
  margin-top 20px
  grid-template\
    "centerpane" 1fr\
    / 5fr 
@media (min-width: 1400px)
  #main-pane
    grid-template\
      "centerpane sidepane" 1fr\
      / 4fr 1fr
    column-gap 20px

.centerpane
  grid-area centerpane
  width 100%
  display grid
  h1
    font-size 2em
    padding 5px
    margin 0px 10px 10px
    color white
    // background black
    display inline 
    // text-align center
    
  .allsongs
    width 100%
    margin 0 auto
    margin-bottom var(--toolbar-size)
    display grid
    overflow hidden
    .song-card:first-child
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
