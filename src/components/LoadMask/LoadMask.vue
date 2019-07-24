<template lang="pug">
section#loadMask
  #grad-layer1
  #grad-layer2.grad
  #grad-layer3.grad
  #grad-layer4.grad
  .loaddisplay
    g.signature
      svg(version='1.1', xmlns='http://www.w3.org/2000/svg', xmlns:xlink='http://www.w3.org/1999/xlink', preserveaspectratio='xMidYMid meet', viewbox='0 0 640 300')
        defs
          path#ar4ZoL3IO(d='')
          path#c2RwOsd34(d='M16.26 272.87C40.3 257.21 85.13 251.97 150.76 257.13C249.2 264.87 314.37 260.67 390.46 262.44C466.56 264.21 454.27 237.89 442.77 236.78C431.26 235.68 431.48 264.43 487.89 262.44C544.29 260.44 654.24 238.33 631.23 257.13C621.71 264.91 603.15 251.12 575.54 215.75C560.57 196.57 561.16 169.51 576.94 150.99C580.33 147.02 571.52 157.35 576.94 150.99C585.2 141.31 600.56 142.74 606.89 153.78C609.75 158.77 605.93 152.11 608.94 157.36C616.69 170.88 617.87 187.18 612.15 201.66C599.67 233.26 580.6 248.23 554.95 246.59C502.95 243.25 521.92 131.1 569.1 37.8C594.22 -11.86 579.6 53.22 525.25 233.04C518.67 254.8 491.18 261.57 475.25 245.35C466.69 236.63 482.33 252.56 475.25 245.35C455.32 225.07 463.25 190.95 490.08 181.53C514.77 172.85 527.79 170.65 529.12 174.93C534.23 191.32 425.7 201.38 377.19 182.8C328.68 164.22 418.55 165.79 422.24 196.46C425.94 227.13 426.76 233.49 399.31 249.17C371.87 264.85 345.51 244.76 343.71 212.5C341.9 180.24 374.54 149.05 412.51 182.8C450.48 216.55 404.71 274.76 331.54 252.71C258.37 230.67 291.65 12.63 340.17 23.18C388.69 33.73 265.97 251.45 232.72 249.17C218.45 248.19 208.07 233.34 201.6 204.61C197.72 187.4 204.82 169.59 219.47 159.77C222.38 157.81 220.08 159.36 226.31 155.18C230.59 152.31 236.39 153.42 239.31 157.66C243.73 164.07 238.26 156.13 239.31 157.66C251.69 175.64 247.84 200.15 230.56 213.47C190.73 244.15 164.13 252.81 150.76 239.44C121.22 209.91 238.79 91.08 210.75 43.85C192.07 12.37 156.86 78.47 105.14 242.16C165.34 113.99 181.92 45.87 154.88 37.8C114.32 25.7 75.06 181.22 59.74 242.16C44.43 303.1 138.95 33.65 118.41 26.72C97.86 19.79 92.26 132.92 56.41 77.48')
        g
          g
            g
              g
                use(xlink:href='#ar4ZoL3IO', opacity='1', fill-opacity='0', stroke='#000000', stroke-width='1', stroke-opacity='1')
            g
              g
                use(xlink:href='#c2RwOsd34', opacity='1', fill-opacity='0', stroke='#ffffff', stroke-width='5', stroke-opacity='1')
    .lds-ellipsis
      div
      div
      div
      div



</template>

<script>
export default {
  name: 'LoadMask',   
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

///////// Load Mask //////////
each = 2s
many = 4
duration = each * many
.loadmask
	transition .5s ease
	opacity 1
.grad
	width 100vw
	height 100vh
	position fixed
	background red
	animation duration grad-fade ease infinite
#grad-layer1
	width 100vw
	height 100vh
	position fixed
	background red
	opacity 1
	background green
	background-image: linear-gradient(to right bottom, #051937, #004d7a, #008793, #00bf72, #a8eb12);
#grad-layer2
	opacity 0
	background blue
	background: linear-gradient(to right top, #ee0979, #ff6a00); 
#grad-layer3
	opacity 0
	animation-delay each
	background yellow
	background: linear-gradient(to left top, #a80077, #66ff00);
#grad-layer4
	opacity 0
	animation-delay each*2
	background yellow
	background: linear-gradient(to left bottom, #C02425, #F0CB35);
fullvis = ((100 / many)*.7)%
novis = (fullvis * 2)%
@keyframes grad-fade{
	0% {opacity: 0}
	{fullvis*1.5} {opacity: 1}
	{fullvis*2} {opacity: 1}
	{fullvis*3} {opacity: 0}
	100% {opacity: 0}
}
.loadmask
	position fixed
	top 0
	opacity 1
	transition 1s ease
	width 100vw
	height 100vh
	z-index 100
.loaddisplay
	position fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 50%;
	height: 50%
	text-align center
.loadlipsis
	top 70%
	font-size 5vw
	&::after
		content ""
		animation elipsis 2s linear infinite
@keyframes fade-in{
	from{opacity: 0}
	to 	{opacity: 1}
}
@keyframes elipsis{
	0% {content: ''}
	25% {content: '.'}
	50% {content: '..'}
	75% {content: '...'}
}


.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
	opacity 0
	animation 3s fade-in ease 3s forwards
}
.lds-ellipsis div {
  position: absolute;
  top: 27px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

.songloader {
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #ffffff;
  background: -moz-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -webkit-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -o-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: -ms-linear-gradient(left, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  background: linear-gradient(to right, #ffffff 10%, rgba(255, 255, 255, 0) 42%);
  position: relative;
	position absolute
	top -3vmin
	right -3vmin
	width 10vmin
	height 10vmin
	transition .5s ease
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.songloader:before {
  width: 50%;
  height: 50%;
  background: #ffffff;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
}
.songloader:after {
  background: #000;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
@-webkit-keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes load3 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
