<template>
  <div class="hello">
    <router-link :to="'/'+message.id">
      <div>
        {{message.subject}} - {{message.created}}
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Dialog } from '@/store/models';

@Component
export default class MessageListItem extends Vue {
  @Prop() private message!: Dialog;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
