<template>
  <div class="about">
    <MessageDialog/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: {
    MessageDialog: () => import('@/components/MessageDialog.vue'),
  },
})
export default class SelectedDialog extends Vue {}
</script>