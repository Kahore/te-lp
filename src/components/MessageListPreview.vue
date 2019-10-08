<template>
  <div
    class="preview-message"
    :class = "{'preview-message--active': selectedConvers.id === message.id}"
    @click="loadConversation(message.id)">
      <router-link
        class="router"
        :to="'/'+message.id">
        <div class="preview-message--header">
          <span class="preview-message--header-title">{{ message.subject }}</span>
          <span class="preview-message--header-date">{{ message.created }}</span>
        </div>
        <div class="preview-message--body">
          {{ message.parts[0].text }}
        </div>
      </router-link>
  </div>
</template>

<script lang="ts">
import EventBus from '@/EventBus.js';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Dialog } from '@/store/models';
import messages from '@/store/modules/message';
@Component
export default class MessageListItem extends Vue {
  @Prop() private message!: Dialog;

  public get selectedConvers(): Dialog {
    return messages.conversation;
  }
  /**
   * load selected Conversation
   */
  public loadConversation(messageId: number) {
    const msgId = messageId.toString();
    EventBus.$emit('NAVBAR_TOGGLE');
    messages.loadSingleConversation(msgId);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.preview-message {
  padding: 1rem;
  max-height: 80px;
  border-bottom: 1px solid #E9EDF2;
  &--header{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    &-title {
      font-weight: 600;
    }
    &-date {
      font-size: 0.6rem;
      color: #B7C0C8;
      text-transform: uppercase;
    }
  }
  &--body{
    overflow-y: hidden;
    max-height: 2.3rem;
    color: #7D8790;;
  }
  &--active {
    background: white;
    border-left: 2px solid #398BFF;
  }
  &:hover {
     @extend .preview-message--active
  }
}
@media (max-width: 576px) {
  .preview-message {
    overflow: hidden;
  }
}
</style>
