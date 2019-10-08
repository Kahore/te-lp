<template>
  <div class="about">
    <Loader v-if="isLoading"/>
    <template v-else>
      <section class="chat-container">
        <SelectedDialogItem
        v-for="message in conversation.parts"
        :key="message.id"
        :message="message"/>
      </section>
    </template>

      <div class="message-new__block">
        <textarea
          name="" id=""
          cols="30"
          rows="5"
          class="message-new__block--field"
          placeholder="Введите текст"
          :disabled="isProceed"></textarea>
        <button
        :disabled="isProceed"
          class="message-new__block--action">
          <img
            src="@/assets/Vector.svg"
            alt="send"
          >
        </button>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Dialog } from '@/store/models';
import messages from '@/store/modules/message';
@Component({
  components: {
    SelectedDialogItem: () => import('@/components/SelectedDialogItem.vue'),
    Loader: () => import('@/components/Loader.vue'),
  },
})
export default class SelectedDialog extends Vue {
  public selectedConversation: Dialog = this.conversation;
  private isProceed: boolean = false;
  /**
   * conversation return selected dialog
   */
  public get conversation(): Dialog {
    const convers = this._dialogDateReformat(messages.conversation);
    return convers;
  }

  public get isLoading(): boolean {
    return messages.isLoadingConversation;
  }

  public created() {
    const params = this.$route.params.dialogId;
    messages.loadSingleConversation(params);
  }
   /**
    * _dialogDateReformat cast date in maket format
    */
  private _dialogDateReformat(convers: Dialog): Dialog {
    convers.parts = convers.parts.map((part) => ({
      ...part,
      created: this._reformat(part.created),
    }));
    return convers;
  }
  private _reformat(created: string): string {
    const date = new Date(created);
    const mm = String(date.getMonth() + 1 ).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    return dd + '.' + mm + '.' + yyyy + ' ' + hh + ':' + min ;
  }
}
</script>
<style lang="scss" scoped>
.about{
  width: 90%
}
.message-new__block {
  height: 10vh;
  bottom: 0;
  display: flex;
  &--field {
    width: 93%;
    &:disabled {
        background: lighten($color: #B7C0C8, $amount: 30) 
    }
  }
  &--action{
    width: 7%;
    background: #398BFF;
    border: none;
    &:hover {
      background: darken($color: #398BFF, $amount: 10) 
    }
    &:disabled {
      background: lighten($color: #398BFF, $amount: 10) 
    }
  }
}
.chat-container{
   height: 87vh;
    overflow-y: scroll;
} 
</style>