<template lang="pug">
section#mainHeader
	nuxt-link.logo(to="/" @click.native="resetBG")
		img.headlogo.short-logo(src='../../assets/soundify.svg')
		img.headlogo.full-logo(src='../../assets/soundify-logo-full.svg')
	.header-search
		input(type="search" :placeholder="searchPhrases[Math.floor(Math.random()*searchPhrases.length)]")
	.userblock
		nuxt-link.upload-button(to="/upload" @click="showUploadPanel()") Upload
		img.useravatar(:src="user.avatarURL ? user.avatarURL : '/user.png'" :alt='user.name')
		//- nuxt-link.username-text(to="/signup") {{user.name}} &#x25BC;
		.username-text(@click="showLogin") {{user.name}} &#x25BC;
	modal(name="hello-world")
		p hello, world!
		loginsignup(testmess="FUCK")

</template>

<script>
import LoginSignup from '../LoginSignup/LoginSignup'
export default {
  name: 'SiteHeader',   
  data() {
    return {
			searchPhrases:[
				"Find a new Jam:",
				"Search for something",
			]
    }
  },
  methods:{ 
		showUploadPanel(){
			// Show the upload panel!
		} ,  
		resetBG(){
			// TODO: globalise reset function with
		},

		showLogin () {
			this.$modal.show('hello-world');
		},
		hideLogin () {
			this.$modal.hide('hello-world');
		}
  },
  props: {
    user:{
      type: Object,      
			default() {
				return {
					name: "No Name",
					avatarURL: "http://via.placeholder.com/300x300"
				}
			}
		},
		components:{
			LoginSignup
		}
	}
}
</script>

<style lang="stylus">
a = 23
headerSize = 40px
l-purple = #734b6d
d-purple = #42275a

#mainHeader
	width 100vw
	box-sizing content-box
	position sticky
	top 0
	padding 10px
	display grid
	grid-gap 20px
	grid-template: \
		"logo search userinfo" 1fr\
		/ min-content minmax(200px, 4fr) auto
	width calc(100vw - 20);
	justify-content space-between
	justify-items center
	align-items center
	background: linear-gradient(to left, d-purple, l-purple); //https://uigradients.com/#Mauve
	color white
	height headerSize
	z-index 50
	border-bottom darken(purple,10) 2px solid

	.v--modal
		color black

	.upload-button
		cursor pointer
		user-select none
	.logo
		height headerSize
		grid-area logo
	.logo
		img
			height headerSize 
			max-width 70px
		.full-logo
			max-width 200px
			height 110%
	.full-logo
		// clip-path: polygon(0 0, 34% 0, 31% 100%, 0% 100%);
		transition 1s ease-out
		transition: all 1000ms cubic-bezier(0.080, 0.835, 0.180, 1.020); 
	// .full-logo:hover
		// clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);

.header-search
	grid-area search
	width 100%
	max-width 700px
	input
		width 100%
		font-size 1.1em
		padding 7px
		border-radius 3px
		border 0px
		&::placeholder, &::-moz-placeholder 
			opacity .3


.userblock
	grid-area userinfo
	right 0
	display grid
	grid-gap 10px
	grid-auto-flow column
	align-items center
.useravatar
	max-width calc(5vmin - 5px)
	max-height calc(5vmin - 5px)
	border #734b6d .25vh solid
.username-text
	font-family: Montserrat, sans-serif;
	font-size 1em
	margin-right 15px
	
#sidebar-shadow
	width calc(100%)
	transition .5s ease
	will-change opacity
	background black
	opacity 0
	height 100vh
	position absolute
	top 0
	left 0
	pointer-events none


@media (min-width: 1400px)
	.short-logo 
		display none
@media (max-width: 1400px)
	.full-logo 
		display none
</style>
