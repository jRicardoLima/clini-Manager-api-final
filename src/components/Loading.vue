<template>
  <div class="p-d-flex p-jc-center">
    <Dialog class="dialogStyle"
            :visible.sync="displayBasic"
            :modal="true"
            :closable="false"
    >
      <div class="p-grid">
        <div class="p-col-4"></div>
        <div class="p-col-3">
          <div class="p-text-center p-text-bold">{{message}}</div>
        </div>
      </div>
      <div class="p-grid">
        <div class="p-col-3">
          <ProgressSpinner
              strokeWidth="1"
              class="spinner"
          />
        </div>
      </div>

    </Dialog>
  </div>
</template>

<script>
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
export default{
  components:{
    ProgressSpinner,
    Dialog,
  },
  computed:{
    displayBasic(){
      return this.$store.state.loading.showLoading;
    },
    message(){
      return this.$store.state.loading.message;
    }
  },
}
</script>

<style scoped>
.spinner{
  width: 100px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  margin-left: 70px;
  margin-right: 70px;
}
.dialogStyle{
  height: 600px;
  padding-bottom: 5px;

}
</style>