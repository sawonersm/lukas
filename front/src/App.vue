<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Menu from "@/components/Menu.vue"

@Options({
  components: {
    Menu
  }
})
export default class App extends Vue {

}
</script>

<template>
  <div class="application">
    <Menu/>

    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.application {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;

  .menu {
    flex-shrink: 0;
  }

  .router-view {
    height: 100%;
    overflow: hidden;
  }
}
</style>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: arial,sans-serif;

  * {
    box-sizing: border-box;
  }
}
</style>
