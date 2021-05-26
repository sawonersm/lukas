<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Subsection from "@/view/What/component/section/Subsection.vue"
import ConversationLine from "@/view/What/component/conversation/part/ConversationLine.vue";
import ConversationsConfiguration, {ConversationConfigurationType} from "./conversations"
import {Interlocutor} from "@/business/enum/interlocutor.enum";


@Options({
  components: {
    ConversationLine,
    Subsection
  }
})
export default class Conversations extends Vue {
  get conversations(): ConversationConfigurationType[] {
    return ConversationsConfiguration
  }

  get Interlocutor_BOT(): Interlocutor {
    return Interlocutor.BOT
  }
}
</script>

<template>
  <Subsection
      v-for="(conversation, index) in conversations" :key="index"
      :id="conversation.id">
    <template #title>{{ conversation.title }}</template>
    <template #content>
      <el-timeline>
        <ConversationLine
          v-for="(message, idx2) in conversation.messages" :key="idx2"
          :bot="message.interlocutor === Interlocutor_BOT">
          {{ message.message }}
        </ConversationLine>
      </el-timeline>
    </template>
  </Subsection>
</template>

<style lang="scss" scoped>
</style>
