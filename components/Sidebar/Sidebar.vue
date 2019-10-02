<template lang="pug">
section#sidebar
  #sidebar-scroller(:class="(sidebar_active?'sb-active':'')")
    #sb-song
      #sb--image
        img#sb--image_img(:src="track.albumArt")
      #sb--songtitle {{track.title}}
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
          SuggestedSong
          SuggestedSong
          SuggestedSong
      #sb--comments
        #sb--commentcount {{commentsTemp.length}} Comment{{commentsTemp.length!==1?'s':''}}
        .song-comments(v-for="comment in comments")
          comment(v-for="(comment, index) in commentsTemp" :comment="comment" key={index})

</template>

<script>
import SuggestedSong from './SuggestedSongs/SuggestedSong'
export default {
  name: 'Sidebar',   
  data() {
    return {
      sidebar_active:'',
      commentsTemp: []
    }
  },
  components:{
    SuggestedSong
  },
  methods:{
    
  },
  props: {
    comments:{
      type: Array
    },
    track: {
      type: Object, 
      default: () =>  ({
        title: "aaaaa",
        description: "descripttion",
        albumArt:"smoething",
      })
    },
  }
}
</script>

<style lang="stylus">
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
barwidth = 45vw
#toggle
	position absolute 
	left 0
	top 0
body 
	overflow-x hidden
#bodystuff	
	color white
	font-family: Montserrat, sans-serif;
	will-change: transform; 
	transform translateX(0%)
	transition .5s ease
#bodystuff.sb-active	//just to override the ID vv
	transform translateX(-45vw) !important
#root
	width 100vw
	height calc(100vh - 50px);
	background-size: 35px 20px;
	background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
	box-shadow 0px 0 50px black inset
.rootroot
	overflow-y scroll
	height calc(100vh - 50px)
#sidebar
	overflow-y scroll
	position absolute
	width calc(47vw + 2px)
	transform translateX(100%)
	top 0
	right 0
	height 100vh	
	overscroll-behavior none
#sb-song
	width barwidth
	top 0
	left 0
	position absolute
	background #eee
	display grid
	grid-template-columns: 1.5vw 12vw 24vw 1.5vw
	grid-template-rows: minmax(30vw, 300px) auto auto minmax(12vw,auto) auto auto auto auto auto auto;
	grid-gap: 1vh 2vw
	right 00
	z-index 2
	background: linear-gradient(180deg, rgba(246,187,215,1) 0%, rgba(172,66,152,1) 50%);
	#sb--image
		width 30vw
		z-index 0
		// background cyan url(h)
		grid-column 1 / 5
		grid-row 1 / 1
		background none
		background-size cover
		background-position center
		width 100%	
		mask-image: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%);
		img
			width 100%
			height 100%
			background transparent
			object-fit cover
			object-position top
	#sb--songtitle
		grid-column 1 / 5
		grid-row 1 / 2
		width 100%
		text-align center
		font-size 40px;
		position absolute
		bottom 0
		z-index 1
		vertical-align bottom
	#sb--stats
		background #00000055
		mix-blend-mode overlay
		padding 5px 20px
		grid-column 1/5
		grid-row 2 / 3
		display flex
		justify-content space-around
	#sb--artistimg
		grid-column 2 / 2
		grid-row 4 / 5
		width 100%
		position relative
		img
			width 100%
			max-height 12vw
			position absolute
			top 50%
			transform translateY(-50%)
			height 100%
			object-fit cover
			border-radius 50%
	#sb--artist_stats
			grid-column 3 / 3
			grid-row 4 / 5
			display grid
			grid-template-columns 1fr
			grid-template-rows auto auto auto 1fr
			grid-gap: 1vh
		#sb--artist-name
			font-size 2vw
		#sb--artist-stats
			display flex
			justify-content space-around
		#sb--artist-followbutton
			padding 5px
			width min-content
			text-align center
			background #000000cc
			mix-blend-mode overlay
	#sb--descrip		
		grid-column 1 / 5
		grid-row 3 / 4
		text-align left
		padding 1vh 1vw
		border-bottom 1px white solid
		
	#sb--songsuggest		
		grid-column 1 / 5
		grid-row 5 / 6
		display grid
		grid-template-rows auto 1fr
		p
			background #ffffffbb
			color black
			padding 4px
			mix-blend-mode overlay
		.ss-song
			display grid
			height 150px
			grid-template-rows 1fr auto auto auto 1fr
			grid-template-columns 1.5fr 3fr
			grid-gap 1vw 0vw
			//background linear-gradient(90deg, lightblue 1%, lightyellow 100%);
			div
				padding 4px
				color #00000088
				mix-blend-mode multiply
			.ss--albumart	
				grid-column 1 / 1
				grid-row 1/6
				padding 0px
				mix-blend-mode normal
				background green
				mask-image: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%);
				img
					width 100%
					object-fit cover
					height 100%
			.ss--title	
				grid-column 2 
				grid-row 2
			.ss--author	
				grid-column 2
				grid-row 3
			.ss--stats	
				grid-column 2
				grid-row 4
				display flex
				justify-content space-around
				div
					background transparent
					mix-blend-mode normal
			
	#sb--commentcount		
		color black
		background #ffffffcc
		mix-blend-mode overlay
		padding 4px
	#sb--comments
		grid-column 1 /5
		grid-row  6/7
		display grid
		grid-template-rows auto 1fr
		grid-gap 1vh
		.sb--comment
			width  auto
			padding 5px
			display grid
			grid-template-columns 5vw 1fr
			grid-gap 1vw
			.sb--comments-usericon
				flex-grow 1
				width 5vw
				height 5vw
				img
					width 100%
					height 100%
					object-fit cover
					border-radius 50%
					background black
			.sb--comments-content
				color white
				.sb--comments-username
					padding 3px
					background #00000088
					mix-blend-mode overlay
				.sb--comments-comment
					color white
					padding 10px

.stats_plays
	&::before
		content "► "
.stats_likes
	&::before
		content "♥ "
.stats_shares
	&::before
		content "💱 "

@media (max-width: 700px)
	#sidebar
		width 100vw
	#sb-song
		width calc(100vw - 17px)
		grid-template-columns: 3vw 28vw 56.3vw 3.3vw
		grid-template-rows: minmax(30vw, 300px) auto auto minmax(30vw,auto) auto auto auto
		#sb--songtitle
			font-size 6vw
		#sb--artistimg 
			img
				max-height 27vw			
	#bodystuff.sb-active	//vv just to override the ID
		transform translateX(-100vw) !important

#ss-song-0
	background #bdd6df
#ss-song-1
	background #e5e7c0
#ss-song-2
	background #f3cdc4 

</style>
