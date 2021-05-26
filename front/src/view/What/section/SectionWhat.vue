<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Section from "@/view/What/component/section/Section.vue"

export const ID_SECTION_WHAT = 'section-what'

@Options({
  components: {
    Section

  }
})
export default class SectionWhat extends Vue {
  get ID_SECTION_WHAT(): string {
    return ID_SECTION_WHAT
  }
}
</script>

<template>
  <Section :id="ID_SECTION_WHAT">
    <template #title>¿Quién es Lucas?</template>
    <template #content>
      <p>Lukas, en líneas generales, es un ayudante dedicado a atender las preguntas más básicas de los clientes, actuando como primer nivel de comunicación.</p>
      <p>Lukas es un robot, y ha sido orientado a representar un rol específico mediante el aprendizaje de modelos tipo de conversacion. Por supuesto, Lukas puede aprender más, pero por el momento solo es una prueba de concepto.</p>
    </template>
  </Section>
</template>

<style lang="scss" scoped>
</style>
