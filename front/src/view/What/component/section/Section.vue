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
export default class Section extends Vue {

}
</script>

<template>
  <div class="section" :id="id">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  max-width: 50%;
  border: 1px solid $color-border;
  padding: 32px;
  border-radius: 4px;

  * {
    line-height: 1.5;
  }

  .title {
    color: $color-primary;
    font-size: $text-size-xxl;
  }
}
</style>
