<template lang="pug">
section.song-card(ref="card")

	.songcard(:id="'songcard-'+index" :class="windowWidth < 680 ? 'mobile' : 'desktop' " )
		.grad-bg-light(:id='"grad-bg-light-"+index')
		.grad-bg-dark(:id='"grad-bg-dark-"+index')
		.artholder(:id='"artholder-"+index')
			img.art(:src="song.albumArt" :id='"art-"+index')
			.playfader(:id='"playfader-"+index')
				button.playbutton
					label.pausebutton
						input.pausecheck(:id='"pausecheck-"+index' type='checkbox' onclick='{()') 
						.pp-p1
						.pp-p2
				//- .songloader(:id='"songloader-"+index')

		.songinfo.songinfo_light(:id='"songinfo-light-"+index')
			.bio(:id='"bio-light-"+index')
				.albumtag {{song.album}}
				.nametag {{song.name}}
				span.artisttag( :id="'artisttag-light-'+index") {{authorList}}
			.seperator(:id='"seperator-light-"+index')

		.songinfo.songinfo_dark(:id='"songinfo-dark-"+index')
			.bio(:id='"bio-dark-"+index')
				.albumtag(:id='"albumtag-dark-"+index') {{song.album}}
				.nametag(:id='"nametag-dark-"+index') {{song.name}}
				span.artisttag(:id='"artisttag-dark-"+index') {{authorList}}
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
			windowWidth: window.innerWidth
		}
	},
	methods:{    
	},
	computed:{
		authorList(){
			let authList = ""
			this.song.authors.map((auth,index)=>{
				if (index!= (this.song.authors.length-1)){
					authList += auth+", "
				}else{
					authList += auth
				}
			})
			return authList
		},
		isMobile() {
      return this.windowWidth 
    }
	},
	mounted(){
		this.$refs.card.style.setProperty('--dk_bg1', this.song.colors.dk_bg1);
		this.$refs.card.style.setProperty('--dk_bg2', this.song.colors.dk_bg2);
		this.$refs.card.style.setProperty('--dk_pt', this.song.colors.dk_pt);
		this.$refs.card.style.setProperty('--dk_st', this.song.colors.dk_st);
		this.$refs.card.style.setProperty('--lt_bg1', this.song.colors.lt_bg1);
		this.$refs.card.style.setProperty('--lt_bg2', this.song.colors.lt_bg2);
		this.$refs.card.style.setProperty('--lt_pt', this.song.colors.lt_pt);
		this.$refs.card.style.setProperty('--lt_st', this.song.colors.lt_st);

    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
      console.log(this.isMobile)
    })
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
playscale = 70%
main-color = #f5d154

.songcard.mobile
	display grid 
	width 100%
	height 70vw
	grid-template-columns 2fr 12fr .5fr
	grid-template-rows 1fr 14fr 1fr
	.grad-bg-light, .grad-bg-dark
		grid-row 1/4
		grid-column 1/4
	// .grad-bg-dark
	// 	background linear-gradient(to right, var(--dk_bg1), var(--dk_bg2))
	.grad-bg-light
		background linear-gradient(45deg, var(--lt_bg1), var(--lt_bg2))
		transform scale(1.2) translateY(8%)
		z-index -1
		filter blur(20px)
	.songinfo
		width 100%
		color white
		grid-row 2/3
		grid-column 2/3
		display grid
		align-content end
		justify-items start
		// transform translateY(-20%)
		.bio
			grid-row 2/3
			height calc(100% - 10px)
			display grid
			grid-gap 5px
			grid-template-rows auto auto auto
			justify-items start 
			margin 5px
			transform translateX(-10vw)
		.albumtag, .nametag, .artisttag
			white-space: pre-line;
			max-height 2.8em
			background green
			overflow: hidden;
			text-overflow: ellipsis;
			font-size 4vw
			line-height 1.4em
			padding 0px 3px
			background linear-gradient(to right, var(--dk_bg1), var(--dk_bg2))
	.artholder
		grid-row 2/3
		grid-column 2/3
		// border 2px solid black
		overflow hidden
		// transform translateY(-20%)
		img
			height 100%
			width 100%
			object-fit cover
			pointer cursor
		.playfader
			display none
		// .playfader
		// 	grid-column 1/2
		// 	grid-row 1/2
		// 	width 50%
		// 	height 50%
		// 	transition .3s ease
		// 	position relative
		// 	display grid
		// 	justify-items center
		// 	align-items center
		// 	&:hover
		// 		opacity 1
		// 	.playbutton
		// 		width 100%
		// 		height 100%
		// 		line-height 10vmin
		// 		font-size 7vmin
		// 		color white
		// 		text-align center
		// 		border-radius 100%
		// 		background-color var(--dk_bg2)
		// 		border 0px solid transparent
		// 		transition .4s ease
		// 		.pausebutton
		// 			width 50%
		// 			height 50%
		// 			position: absolute;
		// 			left: 50%;
		// 			top: 50%;
		// 			transform: translate(-50%, -50%) rotate(0deg);
		// 			transition .1s ease
		// 		.pp-p1,.pp-p2
		// 			width playscale
		// 			height playscale
		// 			background white
		// 			position: absolute;
		// 			transition .2s ease-in
		// 			left: 50%;
		// 			top: 50%;
		// 		.pp-p1
		// 			transform: translate(0%, -50%);
		// 			clip-path: polygon(0 23%, 60% 50%,55% 50%, 0 76%);
		// 		.pp-p2
		// 			transform: translate(-42%, -50%);
		// 			clip-path: polygon(0 2%, 43% 23%, 43% 76%, 0% 96%);



.songcard.desktop
	width calc(100%);
	height 15vmax
	max-height 150px
	overflow hidden
	position relative
	display flex
	background white
	transition .5s ease
	border-radius inherit
	// @media screen and (max-width: 600px)
	// 	display none
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
		background linear-gradient(to right, var(--dk_bg1), var(--dk_bg2))
	.activeBackground
		animation-duration 6s
	.songinfo_dark
		clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
		animation reveal1 0s ease-out 4s alternate infinite
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
		top calc((100% - 11vmin)/2)
		right 3vmin
		width 10vmin
		height 10vmin
		line-height 10vmin
		font-size 7vmin
		color white
		text-align center
		border-radius 100%
		background-color var(--dk_bg2)
		border 0px solid transparent
		transition .4s ease

	.songinfo_light
		.albumtag, .artisttag
			color var(--lt_st)
		.nametag
			color var(--lt_pt)
	.songinfo_dark
		.albumtag, .artisttag
			color var(--dk_st)
		.nametag
			color var(--dk_pt)

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
		background linear-gradient(to right, var(--lt_bg1), var(--lt_bg2))
		position absolute
	.grad-bg-dark	
		//transform translateY(-100%)
		top 0
		width 100%
		height 100%
		background linear-gradient(to right, var(--dk_bg1), var(--dk_bg2))
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


	.pausebutton
		width 50px
		height 50px
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) rotate(0deg);
		transition .1s ease
	.pp-p1,.pp-p2
		width playscale
		height playscale
		background white
		position: absolute;
		transition .2s ease-in
		left: 50%;
		top: 50%;
	.pp-p1
		transform: translate(0%, -50%);
		clip-path: polygon(0 23%, 60% 50%,55% 50%, 0 76%);
	.pp-p2
		transform: translate(-42%, -50%);
		clip-path: polygon(0 2%, 43% 23%, 43% 76%, 0% 96%);
	
.pausebutton input {display:none;}	
input:checked ~ .pp-p1 {
  clip-path: polygon(10% 10%, 40% 10%, 40% 90%, 10% 90%);
	//transform: translate(-40%, -50%) rotate(-180deg);
}
input:checked ~ .pp-p2 {
  clip-path: polygon(0 10%, 30% 10%, 30% 90%, 0% 90%);
	//transform: translate(-110%, -50%) rotate(180deg);
}
input:checked > .pausebutton {
  //transform: translate(-50%, -50%) rotate(180deg);
}

	
.pausebutton:active
	transition .05s linear
	//transform: translate(-50%, -50%) scale(1.05);

</style>
