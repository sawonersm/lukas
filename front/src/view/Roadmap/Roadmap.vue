<script lang="ts">
import {Options, Vue} from "vue-class-component"
import Step from "@/view/Roadmap/component/Step.vue"

@Options({
  components: {
    Step
  }
})
export default class Roadmap extends Vue {
}
</script>

<template>
  <div class="view-roadmap">
    <div class="container">
      <h1>Roadmap</h1>

      <Step>
        <template #when>01/06/2021</template>
        <template #title>Mira como crece ...</template>
        <template #description>
          <p>Vaya... como ha madurado! Vamos a soltarlo en el mundo, a ver si aprende, con la ayuda de contacto real, algún conocimiento.</p>
          <p>¡Y de paso aprendemos nosotros también!</p>
        </template>
      </Step>

      <Step>
        <template #when>05/05/2021</template>
        <template #title>Funciona!</template>
        <template #description>
          <p>Parece que esto funciona, vamos a darle una mano de pintura y presentarle a un grupo reducido de personas, para que lo mimen y lo ayuden a crecer.</p>
        </template>
      </Step>

      <Step>
        <template #when>01/05/2021</template>
        <template #title>Tenemos conocimiento</template>
        <template #description>
          <p>Ahora que tenemos conocimiento, podemos empezar a hacer un ping-pong chit chat</p>
        </template>
      </Step>

      <Step>
        <template #when>24/04/2021</template>
        <template #title>Tenemos una idea</template>
        <template #description>
          <p>Tenemos una idea, pero solo una idea, aún tenemos que leer mucho</p>
        </template>
      </Step>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-roadmap {
  padding: 32px;
  display: flex;
  flex-flow: column;
  align-items: center;

  .container {
    width: 50%;

    h1 {
      color: $color-primary;
      font-size: $text-size-xxl;
    }

    .step {
      margin-bottom: 16px;
    }
  }
}
</style>
