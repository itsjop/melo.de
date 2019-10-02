<template lang="pug">
section.song-card(ref="card")

	.songcard(:id="'songcard-'+index" :class="(windowWidth < 680 ? 'mobile' : 'desktop') +(activeCard? ' active-card':'')" @click="activeCard=!activeCard")
		.grad-bg.grad-bg-light
			.bg-art
			.bg-playback
		.grad-bg.grad-bg-dark
			.bg-art
			.bg-playback
		.artholder
			img.art(:src="song.albumArt")
			.playfader
				button.playbutton
					label.pausebutton
						input.pausecheck(type='checkbox' v-model="playing" @click="playing=!playing") 
						.pp-p1
						.pp-p2
				//- .songloader(:id='"songloader-"+index')

		.songinfo.songinfo_light
			.bio.bio-light
				nuxt-link.tag.albumtag(:to="`/${song.userID}/album/${song.album}`") {{song.album}}
				nuxt-link.tag.nametag(:to="`/${song.userID}/${song.slug}`") {{song.name}}
				nuxt-link.tag.artisttag(:to="`/${song.userID}`") {{authorList}}

		.songinfo.songinfo_dark
			.bio.bio-dark
				nuxt-link.tag.albumtag(:to="`/${song.userID}/album/${song.album}`") {{song.album}}
				nuxt-link.tag.nametag(:to="`/${song.userID}/${song.slug}`") {{song.name}}
				nuxt-link.tag.artisttag(:to="`/${song.userID}`") {{authorList}}
				//- nuxt-link.tag.albumtag(@click="$emit('sidebarToggle',{type:'album',id:'4572'})") {{song.album}}
				//- nuxt-link.tag.nametag(@click="$emit('sidebarToggle',{type:'song',id:'2457'})") {{song.name}}
				//- nuxt-link.tag.artisttag(@click="$emit('sidebarToggle',{type:'artist',id:'1357'})") {{authorList}}

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
			windowWidth: window.innerWidth,
			activeCard: false,
			playing: false
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
	transition .4s ease
	border-radius inherit
	active-transition()
		transition .4s cubic-bezier(0.680, -0.550, 0.265, 1.550)

	&.active-card	// Changes to when the card is active and expanded
		height 30vmax
		max-height 270px
		.artholder
			width 30%
			.art
				mask-position 20% 00%
			.playfader
				.playbutton
					active-transition()
					transform translateX(80%)
		.songinfo
			width 70%
			grid-template-columns 1.5fr 8fr 1fr
			&.songinfo_dark
				pointer-events none
			
	&.playing // For when the card has an active track but is not expanded
		.grad-bg.grad-bg-dark	
				.bg-art
					background var(--dk_bg1)
					opacity 1

	.grad-bg
		top 0
		width 100%
		height 100%
		position absolute
		display flex
		.bg-art
			width 30%
			height 100%
			transition .5s
		.bg-playback
			width 70%
			height 100%
		&.grad-bg-dark	
			.bg-art
				background var(--dk_bg1)
				opacity 0
			.bg-playback
				clip-path: polygon(0 0, 0% 0, 00% 100%, 0 100%);
				animation reveal2 0s ease-out 4s alternate infinite
				background linear-gradient(to right, var(--dk_bg1), var(--dk_bg2))
		&.grad-bg-light
			.bg-art
				background var(--lt_bg1)
			.bg-playback
				background linear-gradient(to right, var(--lt_bg1), var(--lt_bg2))

	.artholder
		position relative
		width 30%
		height 100%
		active-transition()
		.art 
			mask-position 100% 80%
			object-fit: cover
			width 100%
			height 100%
			position absolute
			top 0
			right 0
			mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 60%,rgba(255,255,255,0) 90%) 
			mask-size 240% 100%
			mask-repeat: no-repeat;			
			active-transition()
			// transition-timing-function ease
			&.zoomcursor
				cursor zoom-in
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
				active-transition()
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
				// transition .4s ease
				.pausebutton
					width 50px
					height 50px
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%) rotate(0deg);
					transition .1s ease
					input 
						display:none;		
					input:checked ~ .pp-p1 {clip-path: polygon(10% 10%, 40% 10%, 40% 90%, 10% 90%);}
					input:checked ~ .pp-p2 {clip-path: polygon(0 10%, 30% 10%, 30% 90%, 0% 90%);}
					&:active
						transition .05s linear
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

	.songinfo
		position absolute
		top 0
		right 0
		width 70%
		height 100%
		display grid
		grid-template: \
			'. .   .' 1fr \
			'. bio .' auto \
			'. .   .' 1fr \
			/ 1fr 8fr 1fr
		active-transition()
		&.songinfo_dark
			pointer-events none
		.bio
			grid-area bio
			// user-select none
			transition .5s ease
			display block
			&.bio-dark
				clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
				animation reveal1 0s ease-out 4s alternate infinite
				.albumtag, .artisttag
					color var(--dk_st)
				.nametag
					color var(--dk_pt)
			&.bio-light
				// .tag
				// 	background linear-gradient(to right, var(--dk_bg1), var(--dk_bg2))
				.albumtag, .artisttag
					color var(--lt_st)
				.nametag
					color var(--lt_pt)
			.tag
				width max-content
				display block
				cursor pointer
				&.nametag
					cursor pointer
					font-size 130%
					line-height 130%
	
	

	


	





</style>
