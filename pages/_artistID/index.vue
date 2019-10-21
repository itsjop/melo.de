<template lang="pug">
section#profile
  .pf-header
    .profile-bg-default
    img.profile-bg(@load="" class="imgLoad ? 'active' : '' " :src="artistInfo.cover ? artistInfo.cover : '../../assets/blank.gif'") 
    // to prevent the annoying browser-inserted border for img tags without src specified we use 'blank.gif'
    .avatar
     .iconholder
        img(:src="artistInfo.avatar ? artistInfo.avatar : 'https://via.placeholder.com/150'")
    .info
      .real-name.anim--fadein(v-show="!dataFetched || artistInfo.realName") 
        .grad-bg(ref="realname") {{artistInfo.realName}}
      .location.anim--fadein(v-show="!dataFetched || artistInfo.location")
        .grad-bg(ref="location") {{artistInfo.location}}
      .artist-name.anim--fadein(v-show="!dataFetched || artistInfo.name") 
        h1.grad-bg(ref="username") {{artistInfo.name}}
    .stats.grad-bg(ref="playstat")
      .stat-block.stat-followers
        label Followers
        .total 7,233
      .spacer
      .stat-block.stat-following
        label Following
        .total 7,233
      .spacer
      .stat-block.stat-totalplays
        label Plays
        .total 7,233
        
  .tabbar
    .tab-items
      .tab-item.active All
      .tab-item Tracks
      .tab-item Albums
      .tab-item Playlists
      .tab-item Following
    .follow-icons
      nuxt-link.station.button-light(:to="this.$route.params.artistID+'/edit'") Edit
      .station.button-light Station
      .following.button-light Following
      .share.button-light Share
      .pm.button-light ✉️
      .more.button-light …
  .content
</template>
<script>
var tinycolor = require("tinycolor2");
import lookups from '../../mixins/lookups'
export default {
  name: 'name',   
  data() {
    return {
      dataFetched: false,
      artistInfo:{}
    }
  },
  mounted(){
    // pulls artist information and does relevant page formatting
    this.artistLookup(this.$route.params.artistID).then(result => {
      this.artistInfo = result
      this.dataFetched = true
      document.documentElement.style.setProperty('--body-grad-fg', result.colors.bg_primary);
      document.documentElement.style.setProperty('--body-grad-bg', result.colors.bg_secondary);
      document.documentElement.style.setProperty('--body-text-bg', result.colors.fg_primary);
      document.documentElement.style.setProperty('--body-text-fg', result.colors.fg_secondary);
      setTimeout(() => { // waits a couple MS for the DOM to be prepped
        this.setRelativeGradient(this.$refs.realname, result.colors.bg_primary, result.colors.bg_secondary) 
        this.setRelativeGradient(this.$refs.location, result.colors.bg_primary, result.colors.bg_secondary) 
        this.setRelativeGradient(this.$refs.username, result.colors.bg_primary, result.colors.bg_secondary)
        this.setRelativeGradient(this.$refs.playstat, result.colors.bg_primary, result.colors.bg_secondary)
      }, 5);
    });
  },
  methods:{ 
    setRelativeGradient(element, startCol, endCol){
      // Pulls the coordinates of the given element and mixes the gradient so that it matches the background of the page
      let el = element.getBoundingClientRect()
      let tnyStartColor = tinycolor.mix(startCol, endCol, ((el.left / document.body.clientWidth) * 100))
      let tnyEndColor = tinycolor.mix(startCol, endCol, ((el.right / document.body.clientWidth) * 100))
      element.style.setProperty('--grad-start', tnyStartColor.toHexString());
      element.style.setProperty('--grad-end', tnyEndColor.toHexString());
      let shadowOffset = ((((el.left + (el.width/2)) / document.body.clientWidth)-.5)*-50) +"px"
      element.style.setProperty('--shadow-x', shadowOffset);
    }
  },
  props: {
  },
  mixins:[lookups]
}
</script>
 
<style lang="stylus">
#profile
  max-width 1080px
  width 100vw
  min-height 100vh
  --bg1l: #9EA3C5
  --bg2l: #97D9BA
  --bg2: #535A8A
  --bg1: #348F65
  .grad-bg
    width auto
    padding 10px
    position relative
    text-align right
    --shadow-x: 10px
    // box-shadow inset var(--grad-start) var(--shadow-x) 10px 10px
    transition .5s
    &::before, &::after
      content ''
      width 100%
      height 100%
      position absolute
      top 0
      left 0
      z-index -2
    &::before
      background var(--grad-end)
      z-index -1
      mask-image linear-gradient(to left, black, transparent);
    &::after
      background var(--grad-start)
  .pf-header
    width 100%
    display grid
    gutter = 30px
    grid-template\
      ". . . . ." gutter \
      ". . info avatar ." 8fr\
      ". stats info avatar ." 1fr\
      ". stats . . ." gutter\
      / gutter 2fr 6fr 2fr gutter
    position relative
    .stats
      grid-area stats 
      display grid 
      grid-auto-flow column
      grid-template-columns auto auto auto auto auto
      gap 7px
      justify-content center
      justify-items center
      align-content center
      justify-items center
      z-index 1
      color var(--body-text-fg)
      text-align center
      .spacer
        width 3px
        background var(--body-text-bg)

    .profile-bg-default
      background linear-gradient(to bottom left, var(--bg1l), var(--bg2l))
    .profile-bg, .profile-bg-default
      position absolute
      width 100%
      height 100%
      top 0
      left 0
      z-index 0
      object-fit cover
      transition .5s
      &.inactive
        opacity 0
      &img
        opacity 0
        transition .5s
        &.active
          opacity 1 
    .avatar
      width 100%
      height 100%
      grid-area avatar
      display grid
      align-items center
      .iconholder
        display flex         
        position: relative;
        flex-basis: calc(33.333% );
        box-sizing: border-box;
        &::before 
          content: '';
          display: block;
          padding-top: 100%;
        img
          position: absolute;
          top: 0; left: 0;
          height: 100%;
          object-fit cover
          width: 100%;
          border-radius 100vmax
    .info
      grid-area info
      display grid
      justify-items end
      justify-content end
      align-content flex-end
      gap 20px
      color white
      margin-left 40px
      z-index 1
      margin-right 20px
      .grad-bg
        color var(--body-text-bg)
      >div, >h1
        font-size 1em
        width 100%
        display flex
        justify-content flex-end
      .artist-name
        font-size 4vmin
        line-height 6vmin
  .tabbar
    color var(--body-text-bg)
    // background linear-gradient(to left, var(--bg1), var(--bg2))
    display grid
    grid-template-columns 1.4fr 1fr 1fr
    align-content center
    align-items center
    padding 10px 20px
    .tab-items
      display flex
      justify-content space-between
      font-size 18px
      .tab-item
        position relative
        &.active::after
          content ''
          position absolute
          left 50%
          transform translateX(-50%)
          bottom -4px
          width calc(100% + 10px)
          height 4px
          color var(--body-text-bg)
    .follow-icons
      display grid
      grid-column 3
      grid-auto-flow column
      justify-content end
      align-content center
      align-items center
      gap 10px
      font-size 14px
      font-weight 200
      .button-light
        cursor pointer
        padding 5px 5px 4px
        border 1px white solid
        border-radius 5px
        background var(--body-grad-fg)
        color var(--body-text-fg)

  .content
    background white
    height 50vh
</style>
