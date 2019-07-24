<template lang="pug">
section#mainHeader
  a.logo(src='#')
    img.headlogo.full-logo(src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/soundify-logo-inv.svg')
  .user-block
    .username-text {{name}} &#x25BC;
    .upload-button(@click="showUploadPanel()") Upload
    .useravatar(:src='avatarURL', alt='props.name')

</template>

<script>
export default {
  name: 'name',   
  data() {
    return {
    }
  },
  methods:{    
  },
  props: {
    name:{
      type: String,
      default: "User Name Not Found"
    },
    avatarURL:{
      type: String,
      default: "http://via.placeholder.com/300x300"
      }
  }
}
</script>

<style lang="stylus">

headerSize = 8vmin
l-purple = #734b6d
d-purple = #42275a

#mainHeader
	position sticky
	top 0
	width calc(100%);
	background: linear-gradient(to left, d-purple, l-purple);
	//https://uigradients.com/#Mauve
	color white
	height headerSize
	z-index 50
	border-bottom darken(purple,10) 2px solid
	.upload-button
		cursor pointer
		user-select none
.bodystuff
	position relative	
.logo
	position absolute
	height headerSize
.logo img
	position absolute
	height headerSize +2vh
.full-logo
	clip-path: polygon(0 0, 34% 0, 31% 100%, 0% 100%);
	transition 1s ease-out
	transition: all 1000ms cubic-bezier(0.080, 0.835, 0.180, 1.020); 
.full-logo:hover
	clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
.userblock
	position absolute	
	right 0
	display flex
	align-items center
.useravatar
	margin 1.5vh
	height headerSize - 3.5vh
	border #734b6d .25vh solid
.username-text
	font-family: Montserrat, sans-serif;
	font-size 1.25em
	margin-right 15px
.songcard
	margin 15px
	padding 15px
	background white
	position relative
	user-select none
	
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

</style>
