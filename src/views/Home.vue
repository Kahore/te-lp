<template>
  <div class="home">
    <MessageList :messages="messageList"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import message from '@/store/modules/message';
import { Dialog, DialogMessage } from '@/store/models';
@Component({
  components: {
    MessageList: () => import('@/components/MessageList.vue'),
  },
})
export default class Home extends Vue {
  public messageList: Dialog[] = [];
  public created() {
    this.messageList = message.messageList;
  }
}
</script>
