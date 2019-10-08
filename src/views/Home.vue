<template>
  <div class="container">
    <MessageList :messages="messageList"/>
    <router-view>
      <SelectedDialog></SelectedDialog>
    </router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import message from '@/store/modules/message';
import { Dialog, DialogMessage } from '@/store/models';
@Component({
  components: {
    MessageList: () => import('@/components/MessageList.vue'),
    SelectedDialog: () => import('@/views/SelectedDialog.vue'),
  },
})
export default class Home extends Vue {
  public messageList: Dialog[] = [];
  public created() {
    const messageData: Dialog[] = this._previewDateReformat(message.messageList);
    this.messageList = messageData;
  }
  /**
   * _previewDateReformat cast date in maket format
   */
  private _previewDateReformat(messageList: Dialog[]): Dialog[] {
      messageList = messageList.map((msg) => ({
        ...msg,
        created: this._reformat(msg.created),
      }));
      return messageList;
  }
  private _reformat(created: string): string {
    const date = new Date(created);
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const mnth = monthNames[date.getMonth()];
    const dd = String(date.getDate()).padStart(2, '0');
    const yyyy = date.getFullYear();
    return dd + ' ' + mnth + ' ' + yyyy;
  }
}
</script>
<style lang="scss">
  .container{
    display: flex;
    overflow: hidden;
  }
</style>