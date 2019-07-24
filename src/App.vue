<template lang="pug">
#app
  //- site-header
  mainpane(:songList="songs")
  main-trackbar
  //- song-upload

  .reptiles
    .lizard-adder
      input(type='text' v-model='newReptile' @keyup.enter='addReptile')
      button(@click='addReptile') Add Reptile
      router-link(to='/') Home
      router-link(to='/about') About
    ul.reptileList
      li(v-for='reptile in reptiles') {{ reptile.name }} -
        button(@click='deleteReptile(reptile)') Remove
</template>

<script>
  import { db } from './firebase';
  import Mainpane from "./views/MainPane"
  import MainTrackbar from "./components/MainTrackbar/MainTrackbar"
  import SiteHeader from "./components/SiteHeader/SiteHeader"

  export default {
    name: 'app',
    data() {
      return {
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

body
  margin 0
  width 100vw
  height 100vh
  font-family: Montserrat, sans-serif
  background: linear-gradient(to left, d-purple, l-purple)

</style>