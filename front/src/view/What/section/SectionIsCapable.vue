<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Section from "@/view/What/component/section/Section.vue"
import Subsection from "@/view/What/component/section/Subsection.vue"
import Conversations from "@/view/What/component/conversation/Conversations.vue"

export const ID_SECTION_IS_CAPABLE = 'section-is-capable'

@Options({
  components: {
    Conversations,
    Subsection,
    Section
  }
})
export default class SectionWhat extends Vue {
  get ID_SECTION_IS_CAPABLE(): string {
    return ID_SECTION_IS_CAPABLE
  }
}
</script>

<template>
  <Section :id="ID_SECTION_IS_CAPABLE">
    <template #title>¿De qué es capaz?</template>
    <template #content>
      <p>Por el momento Lukas es capaz de completar diferentes ciclos de comunicación:</p>

      <Conversations/>
    </template>
  </Section>
</template>
