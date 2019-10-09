<template>
  <div
    class="message-container"
    :class="{'message-container--active':isNavOpen}">
    <div class="message-container__bar" @click="toggleNav" @blur="toggleNav">
      <div class="nav-icon">
        <div></div>
      </div>
    </div>
    <div class="message-container--header">
      <span class="message-container--header-text">Сообщения</span>
      <span class="message-container--header-counter">{{conversationCount}} </span>
    </div>
    <MessageListPreview
      v-for="message in messages"
      :key="message.id"
      :message="message"/>
  </div>
</template>

<script lang="ts">
import { EventBus } from '@/EventBus.ts';
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Dialog } from '@/store/models';

@Component({
  components: {
    MessageListPreview: () => import('./MessageListPreview.vue'),
  },
})
export default class MessageList extends Vue {
  public isNavOpen: boolean = false;
  @Prop() private messages!: Dialog[];

  public mounted() {
    EventBus.$on('NAVBAR_TOGGLE', () => {
      if (this.isNavOpen) {
        this.toggleNav();
      }
    });
  }
  /**
   * toggleNav
   */
  public toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
  public get conversationCount(): number {
    return this.messages.length;
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.message-container{
  width: 300px;
  height: 98vh;
  background: #F3F6F8;
  &__bar {
      display: none;
    }
  &--header{
    padding: 1rem;
    border-bottom: 1px solid #E9EDF2;
    &-counter{
      color: #D2D8DE;
      margin-left: 0.4rem;
    }
  }
}
@media (max-width: 576px) {
  .message-container {
    width: 30px;
    &--active {
      width: 250px;
      position: absolute;
    }
    &--header{
      &-text {
        display: none;
      }
    }
    &__bar {
      display: inline;
    }
  }
  .nav-icon {
    margin: 0.2rem;
    width: 25px;
    &:after, 
    &:before, 
    & div {
       background-color: #fff;
      border-radius: 3px;
      content: '';
      display: block;
      height: 5px;
      margin: 7px 0;
      transition: all .2s ease-in-out; 
    }
  }
}
  
</style>
