<script lang="ts">
import {Options, Vue} from "vue-class-component"

@Options({
  props: {
    id: {
      required: false,
      type: String,
      default: null
    }
  }
})
export default class Subsection extends Vue {

}
</script>

<template>
  <div class="subsection" :id="id">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subsection {
  margin-left: 32px;

  .title {
    font-size: $text-size-xl;
    color: $color-accent;
    margin-bottom: 16px;
  }
}
</style>
