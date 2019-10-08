<template>
  <div class="message-container">
    <div class="message-container--header">
      Сообщения <span class="message-container--header-counter">{{conversationCount}} </span>
    </div>
    <MessageListPreview
      v-for="message in messages"
      :key="message.id"
      :message="message"/>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Dialog } from '@/store/models';

@Component({
  components: {
    MessageListPreview: () => import('./MessageListPreview.vue'),
  },
})
export default class MessageList extends Vue {
  @Prop() private messages!: Dialog[];

  public get conversationCount(): number {
    return this.messages.length;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message-container{
  width: 300px;
  height: 97vh;
  background: #F3F6F8;
  &--header{
    padding: 1rem;
    border-bottom: 1px solid #E9EDF2;
    &-counter{
      color: #D2D8DE;
      margin-left: 0.4rem;
    }
  }
}
</style>
