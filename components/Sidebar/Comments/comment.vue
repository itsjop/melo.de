<template lang="pug">
section.comment
  .sb--comment
    .sb--comments-usericon
      img(:src='comment.commentAvatar')
    .sb--comments-content
      .sb--comments-username {{comment.commenter}}
      .sb--comments-comment {{comment.comment}}

  
</template>

<script>
export default {
  name: 'comment',   
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
</style>
