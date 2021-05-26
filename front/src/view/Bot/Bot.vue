<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Session from "@/components/Session.vue"
import Chat from "@/components/Chat/Chat.vue"
import {ActionMethod, mapActions, mapMutations, MutationMethod} from "vuex"

@Options({
  components: {
    Session,
    Chat
  },
  methods: {
    ...mapMutations('session', [
      'setHash'
    ]),

    ...mapActions('session', [
      'load',
      'persist'
    ])
  }
})
export default class Bot extends Vue {
  private started = false

  private setHash!: MutationMethod

  private persist!: ActionMethod

  private load!: ActionMethod

  async mounted(): Promise<void> {
    const loaded = await this.load()
    if (loaded) {
      this.started = true
    }
  }

  async onStart(): Promise<void> {

    const response = await this.$api.conversation.create()
    this.setHash(response.data.Hash)

    await this.persist()

    this.started = true
  }
}
</script>

<template>
  <div class="view-bot">
    <div class="container">
      <template v-if="started">
        <Session/>
        <Chat/>
      </template>

      <template v-else>
        <el-button @click="onStart" type="success">Comenzar a chatear</el-button>
      </template>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-bot {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $color-primary;

  .container {
    width: 30%;
    height: 70%;
    display: flex;
    flex-flow: column;

    .session {
      width: 100%;
      flex-shrink: 0;
      margin-bottom: 16px;
    }

    .chat {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
