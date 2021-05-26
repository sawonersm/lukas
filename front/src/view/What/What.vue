<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Navigation from "@/view/What/component/Navigation.vue"
import SectionWhat from "@/view/What/section/SectionWhat.vue"
import SectionIsCapable from "@/view/What/section/SectionIsCapable.vue"
import SectionWhatIsNot from "@/view/What/section/SectionWhatIsNot.vue"
import SectionPrivacy from "@/view/What/section/SectionPrivacy.vue"

@Options({
  components: {
    SectionPrivacy,
    SectionWhatIsNot,
    SectionIsCapable,
    SectionWhat,
    Navigation
  }
})
export default class What extends Vue {
  onSelect(element: string): void {
    const container = this.$refs.container as HTMLElement
    const node = document.querySelector(`.what .container #${element}`) as HTMLElement
    const menu = document.querySelector('ul.el-menu') as HTMLElement

    container.scroll({
      behavior: 'smooth',
      left: 0,
      top: node.offsetTop - menu.offsetHeight
    })
  }
}
</script>

<template>
  <div class="what">
    <Navigation @select="onSelect"/>

    <div ref="container" class="container">
      <SectionWhat/>
      <SectionWhatIsNot/>
      <SectionPrivacy/>
      <SectionIsCapable/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.what {
  height: 100%;
  width: 100%;
  display: flex;
  background-color: white;

  .navigation {
    width: $what-navigation-width;
    flex-shrink: 0;
  }

  .container {
    padding: 32px;
    height: 100%;
    overflow-y: auto;

    .section {
      margin-bottom: 16px;
    }
  }
}
</style>
