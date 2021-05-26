<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Subsection from "@/view/What/component/section/Subsection.vue"

@Options({
  components: {
    Subsection
  },
  props: {
    bot: {
      required: false,
      type: Boolean,
      default: false
    }
  }
})
export default class ConversationLine extends Vue {
  private bot!: Boolean
}
</script>

<template>
  <el-timeline-item :type="bot ? 'success' : 'primary'">
    <el-card>
      <div :class="['conversation-line', {'bot': bot}]">
        <div class="header">
          <template v-if="bot">
            <i class="fas fa-robot"></i>
            <span class="title">Lucas</span>
          </template>
          <template v-else>
            <i class="fas fa-user-ninja"></i>
            <span class="title">Cliente</span>
          </template>
        </div>

        <div class="content">
          <slot></slot>
        </div>
      </div>
    </el-card>
  </el-timeline-item>
</template>

<style lang="scss" scoped>
.conversation-line {

  &.bot {
    .header {
      i {
        background-color: $color-accent;
        color: $color-text-accent;
      }
    }
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 8px;

    i {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      background-color: $color-primary;
      color: $color-text-primary;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 16px;
    }
  }
}
</style>
