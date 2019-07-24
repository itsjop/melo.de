<template lang="pug">
section#song-card
  .songcard(:id='"songcard-"+index', key='{index')
    .grad-bg-light(:id='"grad-bg-light-"+index')
    .grad-bg-dark(:id='"grad-bg-dark-"+index')
    .artholder(:id='"artholder-"+index')
      canvas.art_canv(:id='"art_canv-"+index', :src='song.albumArt')
      img.art(src="https://via.placeholder.com/300x300", :id='"art-"+index')
      .playfader(:id='"playfader-"+index')
        button.playbutton
          label.pausebutton
            input.pausecheck(:id='"pausecheck-"+index', type='checkbox' onclick='{()') 
            .pp-p1
            .pp-p2
        .songloader(:id='"songloader-"+index')
    .songinfo.songinfo_light(:id='"songinfo-light-"+index')
      .bio(:id='"bio-light-"+index')
        .albumtag 
        .nametag 
        span.artisttag( :id="'artisttag-light-'+index") {{JSON.stringify(song.authors)}}
      .seperator(:id='"seperator-light-"+index')
    .songinfo.songinfo_dark(:id='"songinfo-dark-"+index')
      .bio(:id='"bio-dark-"+index')
        .albumtag(:id='"albumtag-dark-"+index') {{song.album}}
        .nametag(:id='"nametag-dark-"+index') {{song.name}}
        span.artisttag(:id='"artisttag-dark-"+index') {{JSON.stringify(song.authors)}}
      .seperator(:id='"seperator-dark-"+index')

    //- .loadingMask(:id='"loadingMask-"+index')
      .loadAuthorBox(:id='"loadAuthorbox-"+index')
      .loadTitleBox(:id='"loadTitleBox-"+index')
      .loadAlbumBox(:id='"loadAlbumBox-"+index')

</template>

<script>
export default {
  name: 'SongCard',   
  data() {
    return {
    }
  },
  methods:{    
  },
  props: {
    index:{
      type:Number
    },
    song:{
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.allsongs
	//max-width 1000px
	margin 0 auto
	background white
.songcard
	width calc(100%);
	height 15vmax
	max-height 150px
	overflow hidden
	position relative
	display flex
	background white
	transition .5s ease
	//margin-bottom 20px
// .seperator
// 	position absolute
// 	bottom -5% 
// 	background black
// 	width 100%
// 	height 1px
// 	background: radial-gradient(black,transparent, transparent);
.activeSongCard
	height 30vmax
	max-height 270px
.songinfo
	position absolute
	top 0
	left 30%
	width 70%
	height 100%
.grad-bg-dark	
	clip-path: polygon(0 0, 0% 0, 00% 100%, 0 100%);
	animation reveal2 0s ease-out 4s alternate infinite
.activeBackground
	animation-duration 6s
.songinfo_dark
	clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
	animation reveal1 0s ease-out 4s alternate infinite
// @keyframes reveal1{
// 	from{		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);	}
// 	to{	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);	}
// }@keyframes reveal2{
// 	from{		clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);	}
// 	to{	clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);}
// }
.artholder
	position relative
	width 30%
	height 100%
.zoomcursor
	cursor zoom-in
.art 
	object-fit: cover
	width 100%
	height 100%
	position absolute
	top 0
	right 0
	mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 70%,rgba(255,255,255,0) 95%)
	transition .2s ease
.colorcover
	background white
	width 100%
	height: 100%
	position absolute
	top 0
.colorcover-dark
	transform translateY(-100%)
.playfader
	position absolute
	top 0
	width 100%
	height 100%
	opacity 1
	transition .3s ease
	&:hover
		opacity 1
.playbutton
	position absolute
	// top calc((100% - 12vmin)/2)
	// left calc((100% - 12vmin)/2)
	// width 12vmin
	// height 12vmin
	// line-height 12vmin
	// font-size 9vmin
	top calc((100% - 11vmin)/2)
	right 3vmin
	width 10vmin
	height 10vmin
	line-height 10vmin
	font-size 7vmin
	color white
	text-align center
	border-radius 100%
	background-color turquoise
	border 0px solid transparent
	transition .4s ease
.playglyph
	position absolute
	left 1.9vmin
	text-shadow: 2px 2px 3px rgba(255,255,255,0.5);
	background-clip: text;
	color #eee
	top 0
.grad-bg-light
	top 0
	width 100%
	height 100%
	position absolute
.grad-bg-dark	
	//transform translateY(-100%)
	top 0
	width 100%
	height 100%
	position absolute
.bio
	position absolute
	position: absolute;
	left: 45%;
	top: 50%;
	width 70%
	transform: translate(-50%, -50%);	
	padding 20px 10px 10px 20px
	font-family: Raleway, sans-serif
	font-size 100%
	line-height 100%
	user-select none
	transition .5s ease
.albumtag
	cursor pointer
.artisttag	
	cursor pointer
.nametag
	cursor pointer
	width 100%
	font-size 130%
	line-height 130%
.activeSongAlbum
	font-size 130%
	line-height 130%
.activeSongName
	font-size 160%
	line-height 160%
.activeSongArtist
	font-size 130%
	line-height 130%
.player
	position absolute 
	bottom 10%
	height 10%
	width 100%
	display flex
	justify-content space-between
	font-family Raleway, sans-serif
.player-progressbar
	position relative
	width 100%
	height 15px
	border rgba(30,30,30,.3) 2px solid
	border-width 2px 0
.player-end
	position relative
	margin-right 4vmin
	line-height 17px
.player-start
	position relative	
	margin-left 4vmin
	line-height 17px
.loadingMask
	width 100%
	opacity 1
	pointer-events auto
	position absolute
	height 100%
	background white
	transition .5s ease
	border-bottom 1px rgba(30,30,30,.3) solid
.loadAuthorBox, .loadTitleBox, .loadAlbumBox
	cursor pointer
	position absolute 
	background #ddd
	border-radius 3px
	left: 38%;
	top: 40%;
	width: 50%;
	height: 20%
.loadAuthorBox
	top 10%
	width 30%
	height 15%
.loadAlbumBox
	top 70%
	width 30%
	height 15%
#palette
	width 100px
	height 10px
	margin 2px
	
.palette-color
	position relative
	width 10px
	height 10px
	margin 2px
</style>
