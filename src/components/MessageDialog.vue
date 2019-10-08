<template>
  <div>
    MessageDialog here
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class MessageDialog extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped>

</style>