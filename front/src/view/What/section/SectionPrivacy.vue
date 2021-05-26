<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Section from "@/view/What/component/section/Section.vue"

export const ID_SECTION_PRIVACY = 'section-privacy'

@Options({
  components: {
    Section
  }
})
export default class SectionPrivacy extends Vue {
  get ID_SECTION_PRIVACY(): string {
    return ID_SECTION_PRIVACY
  }
}
</script>

<template>
  <Section :id="ID_SECTION_PRIVACY">
    <template #title>Privacidad</template>
    <template #content>
      <p>En esta demostración la privacidad queda 100% <b>NO</b> garantizada, todo lo que se escriba será guardado y usado para su posterior tratamiento y análisis con el fin de mejorar la herramienta.</p>
      <p>Por favor, abstenerse de comportamientos "no deseables"</p>
    </template>
  </Section>
</template>
