<template lang="pug">
section#main-pane
  .centerpane
    h1 Your Home Feed:
    .allsongs
      song-card(v-for="(song, index) in songList" :song="song" :songID="song.name" :key="song.name" :index="index" @sidebarToggle="sidebarToggle")
  sidepane
</template>


<script>
import SongCard from "../components/SongCard/SongCard"
import Sidepane from "../components/Sidepane/Sidepane"
import { db } from '../firebase';

export default {
  name: 'FrontPage',   
  data() {
    return {
      users: []
    }
  },
  firestore() {
    return {
      reptiles: db.collection('reptiles'),
      users: {
        // collection reference.
        ref: db.collection('users'),
        // Bind the collection as an object if you would like to.
        // objects: true,
        resolve: (data) => {
          // collection is resolved
          console.log(data)
          console.log("users2",db.collection('users').doc([this.users[0]['key']]).collection('songs'))
          this.createUserFeed(this.users)
        },
        reject: (err) => {
          // collection is rejected
        }
      },
      songList: db.collection('songs'),
    }
  },
  mounted(){
			// TODO: globalise reset function with arguments for colors
			document.documentElement.style.setProperty('--body-grad-fg', "#734b6d");
      document.documentElement.style.setProperty('--body-grad-bg', "#42275a");
      console.log("users1",this.users)
  },
  methods:{
    sidebarToggle(payload){
      this.$emit('sidebarToggle',payload)
    },
  },
  props: {
    // songList:{
    //   type: Array,  
    //   default() {
    //     return []
    //   }
    // }
  },
  components:{
    SongCard,
    Sidepane,
  },

  layout:"default"
}
</script>


<style lang="stylus">
#main-pane
  display grid 
  width calc(100vw - 60px)
  justify-self center
  justify-content center
  justify-items center
  // max-width 1700px
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
  display flex
  flex-direction column
  h1
    font-size 2em
    // padding 5px
    // margin 0px 10px 10px
    color white
    // background black
    display inline 
    // text-align center
    
  .allsongs
    width 100%
    margin 0 auto
    margin-bottom var(--toolbar-size)
    display flex
    flex-direction column
    overflow hidden
</style>
