/*
TODO:
FINISH-
  Get the sidebar passing the correct values
  Get Songs playing correctly
    Pass songs upwards when asking for a new track
    Make songs play from root to allow free navigation
  Track Mouse Position for tracking through songs
  Fix all the fucking CSS good god what was I thinking

FIX - 
  Align the text to top or bottom to make tracking easier
    Currently Absolutlely positioned so you'll have to re-grid it
    Fix the Backdrop for the text that won't allow tracking
    Disable interacting with / highlighting the text while dragging
  New Card layout for mobile view that has short, 80% centered art
    Diagonal gradient border
    Also make the text full link to a different page
    Disable dragging entirely on the mobile view


FUTURE -
  Research Nuxt to see how it could help
  Create standalone pages and URL routing for
    Artist, Song, Album
  Determine when links should open the side bar

<template lang="pug">
#app
  site-header(:user="user")
  mainpane(:songList="songs")
  main-trackbar
  //- song-upload

  //- .reptiles
  //-   .lizard-adder
  //-     input(type='text' v-model='newReptile' @keyup.enter='addReptile')
  //-     button(@click='addReptile') Add Reptile
  //-     router-link(to='/') Home
  //-     router-link(to='/about') About
  //-   ul.reptileList
  //-     li(v-for='reptile in reptiles') {{ reptile.name }} -
  //-       button(@click='deleteReptile(reptile)') Remove
</template>

<script>
  import './assets/reset.css'
  import { db } from './firebase';
  import Mainpane from "./views/MainPane"
  import MainTrackbar from "./components/MainTrackbar/MainTrackbar"
  import SiteHeader from "./components/SiteHeader/SiteHeader"

  export default {
    name: 'app',
    data() {
      return {
        user:{
          avatarURL:"/user.png",
          name: "jop"
        },
        reptiles: [],
        users: [],
        songs: [],
        newReptile: ''
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
      Mainpane,
      MainTrackbar,
      SiteHeader
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

body
  margin 0
  width 100vw
  height 100vh
  font-family: Montserrat, sans-serif
  background: linear-gradient(to left, #f4edf5, #f4edf5)
  background: linear-gradient(to left, var(--l-purple), var(--d-purple))

#app
  display grid

</style>