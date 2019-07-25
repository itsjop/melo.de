<template lang="pug">
section#main-trackbar
  #pl--shadowbox
  #pl--artbox
    #pl--art
  #pl--playerbox
      #pl--trackcontrol
        #tc--prevtrack.trackcontrol &#x25C4;
        #tc--pause.trackcontrol
          label.pausebutton
            input#p-buttonchk(type='checkbox')
            .pp-p1
            .pp-p2
        #tc--nexttrack.trackcontrol &#x25BA;
        //<div class="trackcontrol" id="tc--repeat">⟲</div>
          <div class="trackcontrol" id="tc--shuffle">⤭</div>
      #pl--gradient
        #pl--trackbar-holder
          #pl--trackinfo
            span#ti--title You&apos;ve Caught Mail
            span#ti--hyphen &nbsp;-&nbsp;
            span#ti--artist Computer &amp; the Brain
          #pl--playbar
            #pl--ts-current 0:00
            #pl--seekbar
            #pl--ts-end 3:22
        #pl--volume
          #volume-trackbar
            i.fas.fa-volume-up
        #pl--addto
          i.fas.fa-list-ul
</template>

<script>
export default {
  name: 'MainTrackbar',   
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

playscale = 70%
main-color = #f5d154


#main-trackbar
	width 100%
	height var(--toolbar-size)
	background transparent
	position fixed 
	bottom 0
	z-index 100
	display flex
	justify-content space-around
#pl--shadowbox
	width 100%	
	//max-width 1000px
	height 50px
	position absolute
	background transparent
	z-index 0
	//box-shadow: 0px -8px 21px 2px rgba(0,0,0,0.26);
#pl--artbox
	width 100%
	margin 0 auto
	//max-width 1000px
	background main-color
	height 50px
	position absolute
	z-index 0
#pl--art
	min-width 30vmin
	background url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_4_computer.jpg) blue
	height 100%
	position absolute
	left 0
	background-image url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/522641/album_4_computer.jpg)
	background-size cover
	background-position center
	mask-image: linear-gradient(to right, rgba(0,0,0,1) 0%,rgba(0,0,0,1) 70%,rgba(255,255,255,0) 95%)
#pl--playerbox
	width 100%
	margin 0 auto
	//max-width 1000px
	height 50px
	position absolute
	z-index 0
	display flex
.playerbox
	position relative
#pl--trackcontrol
	position relative
	min-width 30vmin
	width 15%
	z-index 1
	height 50px
	display flex
	justify-content space-around
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
	
.trackcontrol
	color white
#pl--gradient
	width 100%
	display flex
	background linear-gradient(to right, rgb(245, 209, 84) 10%, rgb(177, 131, 48))
#pl--trackbar-holder
	width 90%
	height 50px
#pl--volume
	width 5%
	height 50px
#pl--trackinfo
	width 100%
	height 30px
	font-size 20px
	line-height 30px
	display flex
	justify-content center
	color darken(main-color,60%)
	//color #3497a0
#ti--artist
	//color #2f6861
	color lighten(main-color,40%)
#pl--playbar
	display flex
	justify-content space-between
#pl--seekbar
	width 100%
	border 1px darken(main-color,60%) solid
	margin 0 5px
#pl--volume
	color white
	padding-left 5px
	line-height 50px
	font-size 15px
	font-align center
#pl--addto
	padding-left 5px
	width 5%	
	color white
	line-height 50px
	font-size 15px
	font-align center
</style>
