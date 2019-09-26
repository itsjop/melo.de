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
  import '../firebase';

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
          name: "jop",
        },
        uploadPane: false,
        sidebar_active: false,
        reptiles: [],
        users: [],
        songs: [],
        newReptile: '',
      }
    },
    firestore() {
      return {
        reptiles: db.collection('reptiles'),
        users: db.collection('users'),
        songs: db.collection('songs'),
      }
    },
    methods: {
      async readFromFirestore() {
        const messageRef = this.$fireStore.collection('songs')
        try {
          const messageDoc = await messageRef.get()
          alert(messageDoc.data().message)
        } catch (e) {
          alert(e)
          return
        }
      },
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
      this.readFromFirestore() 
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

@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");

l-purple = #734b6d
d-purple = #42275a

:root
  --toolbar-size: 50px
  --l-purple: #734b6d
  --d-purple: #42275a
  --body-grad-fg: white
  --body-grad-bg: white

body
  margin 0
  width 100vw
  height 100vh
  font-family: Montserrat, sans-serif
  background: linear-gradient(to left, #f4edf5, #f4edf5)
  background: linear-gradient(to left, var(--body-grad-fg), var(--body-grad-bg))

#app
  display grid

</style>