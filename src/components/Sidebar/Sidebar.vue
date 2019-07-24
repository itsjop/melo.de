<template lang="pug">
section#sidebar
  #sidebar-scroller
    #sb-song(style='{bgStyle}')
      #sb--image
        img#sb--image_img(src='{track.albumArt}/')
      #sb--songtitle {track.name}
      #sb--stats
        .stats_plays#sb--stats_plays(classname='stats_plays') 1.3m
        .stats_likes#sb--stats_likes(classname='stats_likes') 582k
        .stats_shares#sb--stats_shares(classname='stats_shares') 1.2k
      #sb--descrip {{track.description}}
      #sb--artistimg
        img(classname='sb--artistimg_img', src='{allUsers.user[track.userID].avatar}/')
      #sb--artist_stats
        #sb--artist-name {allUsers.user[track.userID].name}
        #sb--artist-stats
          #sb--artist_plays(classname='stats_plays') {allUsers.user[track.userID].totalPlays}
          #sb--artist_likes(classname='stats_likes') {allUsers.user[track.userID].totalLikes}
          #sb--artist_shares(classname='stats_shares') {allUsers.user[track.userID].totalShares}
        #sb--artist-followbutton Follow
        #sb--artist-bio {allUsers.user[track.userID].bio}
      #sb--songinfo
      #sb--songsuggest
        p Related Tracks: 
        #ss-song-0(classname='ss-song')
          div(classname='ss--albumart')
            img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_0_wayout.jpg')
          div(classname='ss--title') When You Fell From Heaven You Broke All My Bones
          div(classname='ss--author') Rob Lichstenfeld
          div(classname='ss--stats')
            div(classname='ss--stats_plays stats_plays') 72k
            div(classname='ss--stats_likes stats_likes') 12k
            div(classname='ss-stats_shares stats_shares') 3.4k
        #ss-song-1(classname='ss-song')
          div(classname='ss--albumart')
            img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_4_computer.jpg')
          div(classname='ss--title') When You Fell From Heaven You Broke All My Bones
          div(classname='ss--author') Rob Lichstenfeld
          div(classname='ss--stats')
            div(classname='ss--stats_plays stats_plays') 72k
            div(classname='ss--stats_likes stats_likes') 12k
            div(classname='ss-stats_shares stats_shares') 3.4k
        #ss-song-2(classname='ss-song')
          div(classname='ss--albumart')
            img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_7_milwakee.png')
          div(classname='ss--title') When You Fell From Heaven You Broke All My Bones
          div(classname='ss--author') Rob Lichstenfeld
          div(classname='ss--stats')
            div(classname='ss--stats_plays stats_plays') 72k
            div(classname='ss--stats_likes stats_likes') 12k
            div(classname='ss-stats_shares stats_shares') 3.4k
      #sb--comments
        #sb--commentcount {track.comments.length} Comment{commentsplural}
        songcomments(:track="track")
        
</template>

<script>
export default {
  name: 'Sidebar',   
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

<style scoped lang="stylus">

</style>
