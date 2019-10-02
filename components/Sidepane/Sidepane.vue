<template lang="pug">
-
  var list = [
    {title: "Ancient Boats Home", artist: "Hilliam Frimble", art:"https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg"},
    {title: "Twelve Angry Badgers", artist: "A R O", art:"http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg"},
    {title: "Styler", artist: "Xephyr", art:"https://static.spin.com/files/2015/10/59ef246f-640x640.jpg"},
    {title: "File Of the Infinite", artist: "JackWave Dossinger", art:"https://www.billboard.com/files/styles/900_wide/public/media/Duran-Duran-Rio-album-covers-billboard-1000x1000.jpg"},
    {title: "Ancient Boats Home", artist: "Hilliam Frimble", art:"https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg"},
    {title: "Twelve Angry Badgers", artist: "A R O", art:"http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg"},
    {title: "Styler", artist: "Xephyr", art:"https://static.spin.com/files/2015/10/59ef246f-640x640.jpg"},
    {title: "File Of the Infinite", artist: "JackWave Dossinger", art:"https://www.billboard.com/files/styles/900_wide/public/media/Duran-Duran-Rio-album-covers-billboard-1000x1000.jpg"},
    {title: "Ancient Boats Home", artist: "Hilliam Frimble", art:"https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg"},
    {title: "Twelve Angry Badgers", artist: "A R O", art:"http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg"},
    {title: "Styler", artist: "Xephyr", art:"https://static.spin.com/files/2015/10/59ef246f-640x640.jpg"},
    {title: "File Of the Infinite", artist: "JackWave Dossinger", art:"https://www.billboard.com/files/styles/900_wide/public/media/Duran-Duran-Rio-album-covers-billboard-1000x1000.jpg"},
  ]

section#sidepane
  h1 You Might Also Like:
  hr
  each song in list
    //- hr
    .side-song
      .art
        img(src=song.art)
      h3.title= song.title
      h5.artist= song.artist
      p.stats= "▸ "+ Math.floor(Math.random()*2000) + ", ❤ " + Math.floor(Math.random()*2000) + ", ✎ "+ Math.floor(Math.random()*2000) 
      //- h5.album thing album
  
</template>

<script>
export default {
  name: 'sidepane',   
  data() {
    return {
    }
  },
  methods:{    
  },
  props: {
  }
}
</script>

<style lang="stylus">
#sidepane
  border-radius 20px
  height 100%
  width calc(100% - 24px)
  border 0px solid white
  // border-left 2px solid white
  background #22222233
  color white
  grid-area sidepane
  display grid
  align-content start
  justify-content start
  justify-items start
  padding 20px 10px
  row-gap 10px
  hr
    border 1px solid white
    width 100%
    opacity .5
  .side-song
    width 100%
    // margin 10px 0
    display grid
    grid-template\
      "art artist" 1fr \
      "art title" 1fr \
      "art album" 1fr \
      / 1.5fr 5fr
    column-gap 10px
    align-content center
    align-items center
    .title, .artist, .album
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    .title
      grid-area title
      font-size 1.2em
      padding-bottom 2px
    .artist
      grid-area artist
      font-size .8em
      font-weight 100
      opacity .6
    .album
      grid-area album
      font-weight 300
    .stats
      font-size .8em
      opacity .6
    .art
      grid-area art
      width 100%
      height 100%
      // max-width 50px
      img
        object-fit contain
        width 100%
        height 100%
    
@media (max-width: 1400px)
  #sidepane
    display none
</style>
