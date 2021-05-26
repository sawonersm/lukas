<script lang="ts">

import {Options, Vue} from "vue-class-component"
import {mapGetters} from "vuex"

@Options({
  computed: {
    ...mapGetters('session', [
        'getHash'
    ])
  }
})
export default class Chat extends Vue {

}
</script>

<template>
  <div class="session">
    <span>Hash: {{ getHash }}</span>
  </div>
</template>

<style lang="scss" scoped>
.session {
  @include elevation-regular;
  background-color: white;
  border-radius: 4px;
  padding: 16px;
}
</style>
