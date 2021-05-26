<script lang="ts">

import {Options, Vue} from "vue-class-component"
import {MessageModel} from "@/business/model/message.model"
import {Interlocutor} from "@/business/enum/interlocutor.enum";
import WaitingMessage from "@/components/Chat/WaitingMessage.vue";

@Options({
  components: {WaitingMessage},
  props: {
    message: {
      required: true
    }
  }
})
export default class Message extends Vue {
  private message!: MessageModel

  get interlocutorClass(): string {
    if (this.message.interlocutor === Interlocutor.USER) {
      return 'user'
    } else if (this.message.interlocutor === Interlocutor.BOT) {
      return 'bot'
    }

    throw new Error(`Invalid interlocutor '${this.message.interlocutor}'`)
  }

  get isWaitingMessage(): boolean {
    return this.message.hash === null && this.message.interlocutor === Interlocutor.BOT
  }
}
</script>

<template>
  <div :class="['message', interlocutorClass]">
    <div class="container">
      <div class="content">
        <template v-if="isWaitingMessage">
          <WaitingMessage/>
        </template>
        <template v-else>
          <span>{{ message.message }}</span>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.message {
  display: flex;

  .container {
    @include elevation-small;
    border-radius: 4px;
    position: relative;

    .content {
      padding: 4px 8px;
      font-size: $text-size-sm;
    }
  }

  &.user {
    justify-content: flex-end;

    .container {
      background-color: $color-accent;
      color: $color-text-accent;

      &:after {
        content: "";
        transform: skew(20deg, -25deg);
        position: absolute;
        right: -2px;
        top: 1px;
        height: 8px;
        width: 8px;
        background-color: $color-accent;
        border-top-right-radius: 50%;
      }
    }
  }

  &.bot {
    .container {
      background-color: $color-disabled;
      color: $color-text-disabled;

      &:after {
        content: "";
        position: absolute;
        left: -6px;
        top: 0;
        height: 8px;
        width: 8px;
        background-color: #e8e8e8;
        border-top-left-radius: 50%;
      }
    }
  }
}
</style>
