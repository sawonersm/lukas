<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Section from "@/view/What/component/section/Section.vue"

export const ID_SECTION_WHAT_IS_NOT = 'section-what-is-not'

@Options({
  components: {
    Section
  }
})
export default class SectionWhatIsNot extends Vue {
  get ID_SECTION_WHAT_IS_NOT(): string {
    return ID_SECTION_WHAT_IS_NOT
  }
}
</script>

<template>
  <Section :id="ID_SECTION_WHAT_IS_NOT">
    <template #title>¿Quién no es?</template>
    <template #content>
      <p>Lukas no es una web responsive</p>
      <p>Lukas no es algo finalizado</p>
      <p>Lukas no es algo estático</p>
      <p>Lukas no es algo oficial</p>
      <p>Lukas no es algo que haya costado esfuerzo hacer. Imagina si le dedicamos esfuerzo ...</p>
      <p>Lukas (bot) no posee ni una sola linea de código por el momento. Imagina si le metiéramos código ...</p>
    </template>
  </Section>
</template>
