<template>
  <section class="chat">
    <div :class="getUserClass(message.author)">
      <div class="message__text">
        <p>{{message.text}}</p>
      </div>
      <div class="message-details" >
        <figure class="message-details__author">
          {{message.author}}
        </figure>
        <time class="message-details__time">{{message.created}}</time>
      </div>
    </div>
</section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { DialogMessage, UserClass } from '@/store/models';
import messages from '@/store/modules/message';
@Component
export default class SelectedDialogItem extends Vue {
  @Prop() private message!: DialogMessage;

  public get getUniqueUser(): UserClass[] {
    return messages.getUniqueUser;
  }

  public getUserClass(author: string): string {
    const idx = this.getUniqueUser.findIndex((message: { author: string; }) => {
     return message.author === author;
    });
    return this.getUniqueUser[idx].class;
  }
}
</script>

<style scoped lang="scss">
.chat {
  padding-left: 20px;
}
.message {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  &-details{
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    &__time {
      font-size: 10px;
      color:  #B7C0C8;
      width: 100%;
    }
    &__author {
      font-weight: 600;
      margin: 0px 10px 10px 10px;
    }
  }
  &__text {
    padding: 10px;
    border-radius: 8px 8px 8px 0px;
    background-color: #F6F7F9;
    max-width: 50%;
  }
}
.message--user-1 + .message--user-2,
.message--user-2 + .message--user-1 {
  margin-top: 1em;
}
.message--user-1 + .message--user-1,
.message--user-2 + .message--user-2 {
  margin-top: .5em;
}

.message--user-2 {
  justify-content: flex-end;
}
.message--user-2 .message-details__time {
  text-align: right;
  margin: 0 0 5px 0;
}
.message--user-2 .message-details__author {
  order: 1;
  margin:  0 10px 0 10px;
}
.message--user-2 .message__text {
  background-color: #E9F5F4;
}
</style>