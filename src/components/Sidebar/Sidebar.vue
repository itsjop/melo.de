<template lang="pug">
section#sidebar
  #sidebar-scroller
    #sb-song
      #sb--image
        img#sb--image_img(:src="track.albumArt")
      #sb--songtitle {{track.name}}
      #sb--stats
        .stats_plays#sb--stats_plays 1.3m
        .stats_likes#sb--stats_likes 582k
        .stats_shares#sb--stats_shares 1.2k
      #sb--descrip {{track.description}}
      #sb--artistimg
        img.sb--artistimg_img(src='{allUsers.user[track.userID].avatar}/')
      #sb--artist_stats // Lookup Artist Profile by ID
        #sb--artist-name // Artist Name
        #sb--artist-stats 
          #sb--artist_plays // Artist Total Plays
          #sb--artist_likes // Artist Total Likes
          #sb--artist_shares // Artist Total Shares
        #sb--artist-followbutton Follow
        #sb--artist-bio // Artist Bio
      #sb--songinfo
      #sb--songsuggest
        p Related Tracks: 
        #ss-song-0.ss-song // TODO: THESE ALL NEED TO BE MADE DYNAMIC LOOKUPS
          .ss--albumart
            img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_0_wayout.jpg')
          .ss--title When You Fell From Heaven You Broke All My Bones
          .ss--author Rob Lichstenfeld
          .ss--statsdiv
            .ss--stats_plays.stats_plays 72k
            .ss--stats_likes.stats_likes 12k
            .ss-stats_shares.stats_shares 3.4k
        #ss-song-1.ss-song
          .ss--albumart
            img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_4_computer.jpg')
          .ss--title When You Fell From Heaven You Broke All My Bones
          .ss--author Rob Lichstenfeld
          .ss--stats
            .ss--stats_plays.stats_plays 72k
            .ss--stats_likes.stats_likes 12k
            .ss-stats_shares.stats_shares 3.4k
        #ss-song-2(classname='ss-song')
          .ss--albumart
            img(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_7_milwakee.png')
          .ss--title When You Fell From Heaven You Broke All My Bones
          .ss--author Rob Lichstenfeld
          .ss--stats
            .ss--stats_plays.stats_plays 72k
            .ss--stats_likes.stats_likes 12k
            .ss-stats_shares.stats_shares 3.4k
      #sb--comments
        #sb--commentcount {{track.comments.length}} Comment{{track.comments.length===1}}
        .song-comments
          comment(v-for="comment in track.comments" :comment="comment")

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
  calculated:{
  
  },
  props: {

  }
}
</script>

<style scoped lang="stylus">

</style>
