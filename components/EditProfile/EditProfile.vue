<template lang="pug">
section#edit-profile
  #img-edit
    .profile-grad-bg
    img.profile-cover-img(  src='https://images.unsplash.com/photo-1569050077408-2531f1be26f8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ')    
    .profile-avatar
      .iconholder
        img(src="https://images.unsplash.com/photo-1570054899043-9dc81fdafb7e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ")
  #profile-info
    .display-name
      label Display Name
        span *
      input(v-model="artistInfo.name" placeholder="Display Name")
    .profile-URL
      label Profile URL
        span *
      .url 
        p http://melo.de/
        input(v-model="artistInfo.username" placeholder="")
    .first-name
      label First Name
      input(v-model="artistInfo.firstName" placeholder="First Name")
    .last-name
      label Last Name
      input(v-model="artistInfo.lastName" placeholder="Last Name")
    .location
      label Location
      input(v-model="artistInfo.location" placeholder="Frankfort, Kentucky")
    .tagline
      label Tagline
      input(v-model="artistInfo.tagline" placeholder="Undaunted Tour Starting October 4th.")
    .biography
      label Biography
      textarea(v-model="artistInfo.bio" placeholder="Tell us about yourself.")
    #social-links
      .labels
        label your links
        button.addlink Add link
      hr
      ul
        li(v-for="link in artistInfo.links ")
          label link-ico
          input(v-model="link.label" placeholder="Web URL or Email Address")
          input(v-model="link.url" placeholder="Label")
          span 🗑
      hr
  section#spacer
  swatch-picker(:colors="artistInfo.colors" @setColor="setColor")
</template>

<script>
import SwatchPicker from '../SwatchPicker/SwatchPicker'
import lookups from '../../mixins/lookups'
var blinder = require('color-blind');
export default {
  name: 'EditProfile',   
  data() {
    return {
      dataFetched: false,
      artistInfo:{},
      serverCopy:{},
    }
  },
  mounted(){
    // pulls artist information and does relevant page formatting
    this.artistLookup(this.$route.params.artistID).then(result => {
      this.artistInfo = result // for use locally
      this.serverCopy = result // for comparing against to see if there's changes
      this.dataFetched = true
      document.documentElement.style.setProperty('--body-grad-fg', result.colors.bg_primary);
      document.documentElement.style.setProperty('--body-grad-bg', result.colors.bg_secondary);
      document.documentElement.style.setProperty('--body-text-bg', result.colors.fg_primary);
      document.documentElement.style.setProperty('--body-text-fg', result.colors.fg_secondary);
    });
  },
  methods:{
    setColor(colorsObj){
      this.artistInfo.colors = colorsObj.tempColors
      if(colorsObj.filter !== "normal"){
        this.artistInfo.realColors = colorsObj.tempColors
      }
    }
  },
  props: {
  },
  components:{
    SwatchPicker
  },
  mixins:[lookups]
}
</script>

<style lang="stylus">



#edit-profile
  width 60vw
  min-width 800px
  min-width 1080px
  min-height 500px
  >div, >section 
    background white
  #spacer
    background transparent
    height 30px
  #img-edit
    display grid
    grid-template\
      ". .      ." .1fr\
      ". avatar ." 230px\
      ". avatar ." .1fr\
      / 1.5fr 250px 1.5fr
    margin-bottom -30px
    .profile-grad-bg
      background red
      grid-column 1/4
      grid-row 1/3
      width 100%
    .profile-cover-img
      width 100%
      height 100%
      object-fit cover
      grid-column 1/4
      grid-row 1/3
    .profile-avatar
      width 100%
      height 100%
      grid-area avatar
      display grid
      align-items end
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
      
  #profile-info
    display grid
    grid-template\
      "name name   name  .     bio bio bio" 1fr\
      "url   url   url   url   bio bio bio" 1.2fr\
      "fname fname lname lname bio bio bio" 1fr\
      "place place tag   tag   bio bio bio" 1fr\
      "link  link  link  link  link link link" auto\
      /1fr   1fr   1fr   140px 1fr 1fr 1fr 
    gap 20px
    padding 0 40px
    >div // child selector for all feild holders
      display flex
      flex-direction column
      label
        font-size .8em
        span
          color red
      input, textarea
        border-width 0 0 1px 0
        width 100%
        border-style solid
        padding-bottom 0
        &::placeholder
          font-style italic
      textarea
        border-width 1px
        border-radius 4px
        height 100%
        padding 4px
    .display-name
      grid-area name
    .profile-URL
      grid-area url
      .url
        display flex
        p
          margin 6px 0
    .first-name
      grid-area fname
    .last-name
      grid-area lname
    .location
      grid-area place
    .tagline
      grid-area tag
    .biography
      grid-area bio
  #social-links
    grid-area link
    .labels
      display flex
      justify-content space-between
      align-items flex-end
      align-content flex-end
      label
        font-size .8em
    hr
      margin 0
      width 100%
    ul
      padding 0
      margin 5px 0
      li
        display grid
        grid-template-columns 30px 5fr 2fr 30px
        gap 20px
        align-items center
        label
          font-size .8em
        input, textarea
          border-width 0 0 1px 0
          width 100%
          border-style solid
          &::placeholder
            font-style italic
</style>
