<template>
  <div class="hello">
    <MessageListItem
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
    MessageListItem: () => import('./MessageListItem.vue'),
  },
})
export default class MessageList extends Vue {
  @Prop() private messages!: Dialog[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
