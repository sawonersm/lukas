<script lang="ts">
import {Vue} from "vue-class-component"

export default class Step extends Vue {
}
</script>

<template>
  <div class="step">
    <div class="header">
      <div class="when">
        <slot name="when"></slot>
      </div>
      <div class="title">
        <slot name="title"></slot>
      </div>
    </div>

    <div class="content">
      <slot name="description"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.step {
  padding: 32px;
  border: 1px solid $color-border;
  border-radius: 4px;

  .header {
    display: flex;
    align-items: center;

    .when {
      color: $color-subtitle;
      margin-right: 16px;
    }

    .title {
      font-size: $text-size-xl;
      color: $color-accent;
    }
  }
}
</style>
