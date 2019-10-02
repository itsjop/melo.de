<template lang="pug">
section#upload
  #upload-pane
    .file-uploader
      h1 Drag and Drop your files here
      button(type="file") Or, choose files to upload:
    .image-uploader
      img(src="")
      button Upload Image
    .title-picker
      .title
        p Title
        input(placeholder="Name your track" v-model="trackName")
      .slug
        p melode.com/itsjop/{{slug}}
    .genre-picker
      p Genre
      select
        option None
    .tag-picker
      p Add some tags (comma-seperated)
      input(type="text" placeholder="Add tags to describe your track")
    .description-box
      p Description
      textarea(placeholder="Describe your track")
    .privacy-settings
      p Privacy:
      .radio
        input(type="radio" id="public" name="privacy")
        label(for="public") Public
      .radio
        input(type="radio" id="private" name="privacy")
        label(for="private") Private
    .submit-info
      p * Required fields
      .submit-buttons
        button Cancel
        button Save
</template>

<script>
export default {
  name: 'Upload',   
  data() {
    return {
      trackName:"",

    }
  },

	computed:{
		slug(){
      let tempSlug = this.trackName.replace(/[|&;$%@"<>()+,]/g, "").replace(/[ ]/g, "-")
			return tempSlug
    },
  },
  methods:{    
  },
  props: {
  }
}
</script>

<style lang="stylus">
#upload
  height 100vh
  display grid
  justify-content center
  align-content center

#upload-pane
  padding 40px
  border 2px black solid
  max-width 700px
  border-radius 10px
  display grid
  grid-template:\
    "album file" auto \
    "album title" auto \
    "album genre" auto \
    "album tags" auto \
    "album description" auto \
    "album privacy" auto \
    "submit submit" auto \
    / 1fr 2fr
  gap 20px
  >*
    width 100%
    input
      width calc(100% - 10px)
    textarea
      width 100%
  .file-uploader
    grid-area file
  .image-uploader
    grid-area album
    width 100%
    height 100%
    background linear-gradient(to top right, slateblue, lightcoral)
  .title-picker
    grid-area title
  .genre-picker
    grid-area genre
  .tag-picker
    grid-area tags
  .privacy-settings
    grid-area privacy
    .radio
      display flex
      input 
        width unset
    label
      color white
  .submit-info
    grid-area submit
    display flex
    justify-content space-between
</style>
