<template>
  <div>MyHeader</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MyHeader extends Vue {
  myName: string = ''
  // @Prop({ default: '' }) foo!: string

  created() {
    this.myName = '1'
    var a = 1
  }
}
</script>

<style lang="scss" scoped></style>
