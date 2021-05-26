<script lang="ts">

import {Options, Vue} from "vue-class-component"
import Messages from "@/components/Chat/Messages.vue"
import {MessageModel} from "@/business/model/message.model"
import {Interlocutor} from "@/business/enum/interlocutor.enum"
import {State} from "@/components/Chat/chat-state.enum";
import {mapGetters} from "vuex";

@Options({
  components: {
    Messages
  },
  computed: {
    ...mapGetters('session', {
      hash: 'getHash'
    })
  }
})
export default class Chat extends Vue {

  public hash!: string

  private message: string = ''

  private messages: MessageModel[] = []

  private state: State = State.INPUT

  get isWaiting(): boolean {
    return this.state === State.WAITING
  }

  async onSubmit(): Promise<void> {
    const message = this.message
    this.state = State.WAITING

    this.messages.push(
        new MessageModel(null, message, Interlocutor.USER)
    )

    this.messages.push(
        new MessageModel(null, '', Interlocutor.BOT)
    )

    const responses = await this.$api.message.ask(this.hash, this.message)
    this.messages.pop()

    for (const idx in responses.data) {
      const messageModel = responses.data[idx]
      this.messages.push(
          new MessageModel(messageModel.hash, messageModel.text, Interlocutor.BOT)
      )
    }

    this.state = State.INPUT
    this.message = ''
    setTimeout(() => {
      const input = this.$refs.input as HTMLInputElement
      input.focus()
    })
  }
}
</script>

<template>
    <div class="chat">
      <Messages :messages="messages"></Messages>

      <div class="input">
        <el-input
            ref="input"
            :disabled="isWaiting"
            placeholder="Please input" v-model="message"
            @keydown.enter="onSubmit">
          <template #append>
            <el-button
              :disabled="isWaiting"
              @click="onSubmit"
              type="success">
              <i class="fas fa-paper-plane"></i>
            </el-button>
          </template>
        </el-input>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.chat {
  @include elevation-regular;
  border-radius: 4px;
  border: 1px solid $color-primary;
  background: white;
  display: flex;
  flex-flow: column;
  height: 100%;

  .input {
    flex-shrink: 0;
  }
}
</style>
