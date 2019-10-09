  <template lang="pug">
section#accessibility-checker
  - n= 0
  .toggler ˅ Advanced accessibility checks ˅
  .tabbar
    .tab-item#normal.selected Normal Vision
    .tab-item#dueter Deuteranomaly
    .tab-item#proto Protanomaly
    .tab-item#tritan Tritanopia	
  .size-toggle
    label Toggle Font Size
    input(type="checkbox")
  .previews.large-font
    while n < 20
      .prev.bg-dark-1
        h1.text-preview= n++
        .checker.right
</template>

<script>
export default {
  name: 'AccessibilityChecker',   
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

<style lang="stylus">
#accessibility-checker
  padding 0 40px
  text-align center
  .tabbar
    display flex
    justify-content space-between
    color #666 //😎 oh yeah 🅱️abey 😎
    border-bottom 2px solid
    &.selected 
      color black
  .previews
    display grid
    grid-template-columns repeat(5, 1fr)
    gap 10px
    padding 10px 0
    .prev
      position relative
      --prev-bg darkcyan
      --prev-text white
      color var(--prev-text)
      background var(--prev-bg)
      .checker
        position absolute
        left 50%
        top 100%
        transform: translate(-50%, -50%);
        background white
        padding 2px 6px
        border-radius 100vw
        &.right::before
          content '⎷'
          color darkgreen
        &.wrong::before
          content 'X'
          color red
</style>
