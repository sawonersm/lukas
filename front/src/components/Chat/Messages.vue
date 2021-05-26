<script lang="ts">

import {Options, Vue} from "vue-class-component"
import {MessageModel} from "@/business/model/message.model"
import Message from "@/components/Chat/Message.vue"

@Options({
  components: {Message},
  component: {
  },

  props: {
    messages: {
      required: true
    }
  }
})
export default class Messages extends Vue {
  private messages!: MessageModel[]
}
</script>

<template>
  <div class="messages">
    <div class="container">
      <Message
        v-for="(message, index) in messages" :key="index"
        :message="message"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.messages {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  height: 100%;
  overflow: hidden;

  .container {
    overflow-y: auto;
    padding: 16px;

    .message {
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
