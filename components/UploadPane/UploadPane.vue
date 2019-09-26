<template lang="pug">
section#songUpload
  .upload--shadow(onclick='dismissUpload()')
  .upload--window
    .upload--container
      .upload--song-upl
        img.upload--song-upl_img(src='http://via.placeholder.com/300x300?text=...')
      .upload--song-upl_button SONG UPLOAD
        input#file2(type='file', name='file2')
      .upload--image-upl
        img.upload--img-upl_img(src='http://via.placeholder.com/300x300')
      .upload--image-upl_button COVER UPLOAD
        input#file(type='file', name='file')
        #linkbox  
      .upload--name Title
        input.upload--name_input(placeholder='...')
      .upload--album Album
        input.upload--album_input(placeholder='...')
      p.upload--notif We automatically generated some colors for you. Feel free to tweak them how you want.
      .upload--card-preview
        #card-preview_lightBG
          #card-preivew_artist-light.card-preview_artist Artist
          #card-preivew_name-light.card-preview_name Title Here
          #card-preivew_album-light.card-preview_album Album
        #card-preview_darkBG
          #card-preivew_artist-dark.card-preview_artist Artist
          #card-preivew_name-dark.card-preview_name Title Here
          #card-preivew_album-dark.card-preview_album Album
        .card-preview_art
          img.card-preview_img(src='http://via.placeholder.com/300x300?text=Your+image+here!')
          // <canvas id="card-preview_canvas" src="http://via.placeholder.com/300x300?text=Your+image+here!"/></canvas>
      .upload--colors
        .upload--color
          p Light BKG 1
          input#lt_bg1.upload-col_lt_bg1(type='text')
        .upload--color
          p Light BKG 2
          input#lt_bg2.upload-col_lt_bg2(type='text')
        .upload--color
          p Light Primary
          input#lt_pt.upload-col_lt_pt(type='text')
        .upload--color
          p Light Secondary
          input#lt_st.upload-col_lt_st.colpik(type='text')
        .upload--color
          p Dark BKG 1
          input#dk_bg1.upload-col_dk_bg1(type='text')
        .upload--color
          p Dark BKG 2
          input#dk_bg2.upload-col_dk_bg2(type='text')
        .upload--color
          p Dark Primary
          input#dk_pt.upload-col_dk_pt(type='text')
        .upload--color
          p Dark Secondary 
          input#dk_st.upload-col_dk_st(type='text')
      .upload--description Description
        textarea.upload--desc-input(placeholder='Give it a description!')
      .upload--submit(onclick='submitDismiss()') Post!
    .upload--closer(onclick='dismissUpload()') X
  
</template>

<script>
export default {
  name: 'SongUpload',   
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
body
	background #222
	color white
	font-size 20px
	font-family: Montserrat, sans-serif;
.upload--shadow
	position absolute
	top 0
	left 0
	width 100vw
	height 100vh
	background black
	transition opacity 1s ease 
	opacity 0
	pointer-events none
.upload--window
	background linear-gradient(to top, #ccc 10%, #fff)
	position absolute;
	left: 50%;
	top: -100vh
	transform: translate(-50%, -50%);
	width: 70%;
	height: auto
	min-height 70%
	border-radius 2vw
	transition .5s ease 
	transition: all 700ms cubic-bezier(0.665, -0.600, 0.145, 1.565); /* custom */
.upload--closer
	position absolute
	top 10px
	right 10px
	font-size 30px
	color black
	cursor pointer
.upload--container	
	display grid
	grid-template-columns .1fr 1fr 1fr 1fr 1fr .1fr
	grid-template-rows .1fr auto 1fr auto 0px 0px 0px 0px .2fr
	clip-path: polygon(0 0, 100% 0, 100% 57%, 0 57%);
	transition 1s ease
	grid-gap 2vh
	.upload--name
		color #222
		text-align center
		grid-column 2/4
		grid-row 2/3
		font-size 30px
		text-align left
		input
			width calc(100% - 12px)
			border 1px black solid
			background #eee
			font-size 22px
			padding 5px
			max-width 15vw
	.upload--album
		color #222
		text-align center
		grid-column 4/6
		grid-row 2/3
		font-size 30px
		text-align left
		input
			width calc(100% - 12px)
			border 1px black solid
			background #eee
			font-size 22px
			padding 5px
			max-width 15vw
	.upload--song-upl
		background red
		grid-column 2/3
		grid-row 3/4
		img
			height 100%
			width 100%
			object-fit cover
	.upload--image-upl
		background green
		grid-column 4/5
		grid-row 3/4
		img
			height 100%
			width 100%
			object-fit cover
	input
		max-width 15vw
	.upload--image-upl_button
		border 4px dashed #777
		background #eee
		border-radius .5vw
		cursor pointer
		color #777
		grid-column 5/6
		grid-row 3/4
		padding 10px
	.upload--song-upl_button
		border 4px dashed #777
		background #eee
		border-radius 10%
		cursor pointer
		color #777
		grid-column 3/4
		grid-row 3/4
		padding 10px
	.upload--notif
		color #222
		text-align center
		grid-column 2/6
		grid-row 4/5
	.upload--card-preview
		background skyblue
		font-size 20px
		color white
		grid-column 2/6
		grid-row 5/6
		display grid
		grid-template-columns 2fr 1fr 1fr 1fr 1fr
		grid-template-rows .5fr 1fr 1fr 1fr .5fr		
		#card-preview_lightBG	
			grid-column 1/6
			grid-row 1/6
			background linear-gradient(90deg,#aaa,#eee)
			clip-path: polygon(0 0, 100% 0, 100% 20%, 0 85%);
			display grid
			grid-template-columns 1fr 1fr 1fr .1fr
			grid-template-rows .2fr auto auto auto .1fr
			.card-preview_artist
				color red
				grid-column 2/5
				grid-row 2/3	
				z-index 2
			.card-preview_name
				color red
				grid-column 2/4
				grid-row 3/4	
				font-size 200%
				z-index 2
			.card-preview_album
				color red
				grid-column 2/5
				grid-row 4/5
				z-index 2
		#card-preview_darkBG
			grid-column 1/6
			grid-row 1/6
			background linear-gradient(90deg,#111,#444)
			clip-path: polygon(0 80%, 100% 20%, 100% 100%, 0 100%);
			display grid 
			grid-template-columns 1fr 1fr 1fr .1fr
			grid-template-rows .2fr auto auto auto .1fr
			.card-preview_artist
				color cyan
				grid-column 2/5
				grid-row 2/3	
				z-index 2
			.card-preview_name
				color cyan
				grid-column 2/4
				grid-row 3/4
				font-size 200%
				z-index 2
			.card-preview_album
				color cyan
				grid-column 2/5
				grid-row 4/5
				z-index 2
		.card-preview_art
			grid-column 1/2
			grid-row 1/6
			z-index 2
			-webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 70%,rgba(255,255,255,0) 95%)
			img
				object-fit cover
				height 100%
				width 100%
			canvas
				object-fit cover
				height 100%
				width 100%
	.upload--colors
		position relative
		grid-column 2/6
		grid-row 6/7
		display grid
		color black
		grid-template-columns 1fr 1fr 1fr 1fr 
		.upload--color
			display flex
			justify-content space-evenly
			margin .5vmin
			p 
				position relative
				display block
				height 100%
			.sp-replacer
				transform translateY(-20%)
	.upload--description			
			grid-column 2/6
			grid-row 7/8
			color black
			font-size 30px
			textarea
				resize none
				width calc(100% - 12px)
				height 80%
				background #eee
				border 1px black solid
	.upload--submit		
		grid-column 5/6
		grid-row 8/9
		font-size 30px
		font-family Montserrat, sans-serif
		background teal
		color white
		cursor pointer
		padding 10px
		border 0px
			
@media (max-width: 900px)
	.upload--window
		width 100%
		top 0
		left 0
		transform none
		.upload--container
			transform none
			.upload--colors
				grid-template-columns 1fr 1fr 
				grid-template-rows 1fr 1fr 1fr 1fr
				display grid
				p 
					position relative
					display flex
					height 40px
					transform translateY(50%)
					.sp-replacer
						transform translateY(-20%)
						position absolute
						right 20%	
</style>
