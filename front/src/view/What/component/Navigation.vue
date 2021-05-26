<script lang="ts">
import {Vue} from "vue-class-component"
import {ID_SECTION_WHAT} from "@/view/What/section/SectionWhat.vue"
import {ID_SECTION_WHAT_IS_NOT} from "@/view/What/section/SectionWhatIsNot.vue"
import {ID_SECTION_PRIVACY} from "@/view/What/section/SectionPrivacy.vue"
import {ID_SECTION_IS_CAPABLE} from "@/view/What/section/SectionIsCapable.vue"
import Conversations, {ConversationConfigurationType} from "@/view/What/component/conversation/conversations"

export default class Navigation extends Vue {

  get conversations(): ConversationConfigurationType[] {
    return Conversations
  }

  get ID_SECTION_WHAT(): string {
    return ID_SECTION_WHAT
  }

  get ID_SECTION_WHAT_IS_NOT(): string {
    return ID_SECTION_WHAT_IS_NOT
  }

  get ID_SECTION_PRIVACY(): string {
    return ID_SECTION_PRIVACY
  }

  get ID_SECTION_IS_CAPABLE(): string {
    return ID_SECTION_IS_CAPABLE
  }

  onSelect(element: string) {
    this.$emit('select', element)
  }
}
</script>

<template>
  <div class="navigation">
    <el-menu @select="onSelect">
      <el-menu-item :index="ID_SECTION_WHAT">
        <i class="fas fa-robot"></i>
        <span>Quién es Lucas</span>
      </el-menu-item>

      <el-menu-item :index="ID_SECTION_WHAT_IS_NOT">
        <i class="fas fa-ban"></i>
        <span>Quién no es</span>
      </el-menu-item>

      <el-menu-item :index="ID_SECTION_PRIVACY">
        <i class="fas fa-lock"></i>
        <span>Privacidad</span>
      </el-menu-item>

      <el-submenu :index="ID_SECTION_IS_CAPABLE">
        <template #title>
          <i class="fas fa-bolt"></i>
          <span>De qué es capaz</span>
        </template>

        <el-menu-item-group title="Conversaciones">
          <el-menu-item
            v-for="(conversation, index) in conversations" :key="index"
            :index="conversation.id">
            {{ conversation.menu }}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.navigation {
  height: 100%;

  .el-menu {
    height: 100%;

    i {
      margin-right: 16px;
    }
  }
}
</style>
