<template>
  <div>
    <div class="x">
      foo: {{ foo }}
    </div>
    <button @click="testAction">myAction</button>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue, Prop } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

@Component
export default class ComponentName extends Vue {
  @Getter('app/foo') foo!: number

  testAction() {
    this.$store.dispatch('app/myAction')
  }
}
</script>

<style lang="scss" scoped>
</style>