<template lang="pug">
section#layout
  //- mediaplayer()
  site-header(:user="user")
  nuxt(:songList="songs" @sidebarToggle="sidebarToggle")
  main-trackbar
  sidebar(:sidebar_active="sidebar_active")
</template>

<script>
  import '../assets/reset.css'

  // import Mainpage from "../views/MainPage"
  import MainTrackbar from "../components/MainTrackbar/MainTrackbar"
  import SiteHeader from "../components/SiteHeader/SiteHeader"
  import Sidebar from "../components/Sidebar/Sidebar"

  export default {
    name: 'app',
    data() {
      return {
        user:{
          avatarURL:"/user.png",
          name: "login",
        },
        uploadPane: false,
        sidebar_active: false,
        reptiles: [],
        users: [],
        songs: [],
        newReptile: '',
      }
    },
    methods: {
      sidebarToggle(payload){
        this.sidebar_active = !this.sidebar_active
        console.log("sidebar state:", this.sidebar_active)
      },
      addReptile: function() {
        this.$firestore.reptiles.add(
          {
            name: this.newReptile,
            timestamp: new Date()
          }
        );
        this.newReptile = '';
      },
      deleteReptile: function(reptile) {
        this.$firestore.reptiles.doc(reptile['.key']).delete();
      }
    },
    created(){
      // this.user.avatarURL="https://picsum.photos/id/"+(Math.floor(Math.random()*500))+"/200/200"
    },
    components:{
      // Mainpane,
      MainTrackbar,
      SiteHeader,
      Sidebar,
      // MediaPlayer,
      // UploadPane
    }
  }
</script>

<style lang="stylus">

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700")
@import url('https://fonts.googleapis.com/css?family=Questrial&display=swap');

*
  font-family: 'DM Sans','Questrial', serif;
  // TODO: Host Znikomit for web font

// l-purple = #734b6d
// d-purple = #42275a

:root
  --toolbar-size: 50px
  --body-grad-fg: #734b6d
  --body-grad-bg: #42275a

body
  margin 0
  width 100vw
  min-height 100vh
  font-family: Montserrat, sans-serif
  // background: linear-gradient(to left, #f4edf5, #f4edf5)
  // background: linear-gradient(to left, var(--body-grad-bg), var(--body-grad-fg))
  position relative
  z-index -10
  &::before, &::after
    content ''
    width 100vw
    min-height 100vh
    position fixed
    top 0
    left 0
    transition background .5s
    z-index -2
  &::before
    // blue, on top?
    z-index -1
    background var(--body-grad-bg)
    mask-image linear-gradient(to left, black, transparent);
  &::after
    // red
    background var(--body-grad-fg)
    // mask-image linear-gradient(to right, black, transparent);


*  
  transition background .5s
  box-sizing border-box

// h1, a:visited, a:link
//   color white

h1, h2
  font-family: 'DM Sans','Questrial', serif;
h1
  font-size 2em
h2
  font-size 1.8em
.anim--fadein
  opacity 0
  animation animFadein .5s ease forwards 

@keyframes animFadein{
  from{opacity: 0;}
  to{opacity: 1;}
}
h1, h2, h3, h4, h5, h6
  margin 0
#app
  display grid

#layout
  display grid
  justify-items center
  min-height 100vh
  grid-template-rows 60px auto 50px
  margin-bottom 50px

.page-enter-active, .page-leave-active {
  transition: .2s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform translateX(5vw)
}

</style>