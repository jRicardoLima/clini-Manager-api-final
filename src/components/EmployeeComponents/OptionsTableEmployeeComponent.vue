<template>
  <div>
    <SplitButton
      label="Opções"
      icon="pi pi-question"
      :model="items"
      class="p-button-secondary p-button-sm"
    />
  </div>
</template>

<script>
import SplitButton from "primevue/splitbutton";
export default {
  components:{
    SplitButton
  },
  props:{
    optionData: Object
  },
  data(){
    return{
      items: []
    }
  },
  beforeMount() {
    this.items = [
      {
        label: 'Editar',
        command: () => {
          this.$router.push({name:'employeeEdit',params:{id:this.optionData.data.id}}).catch(() => {});
        }
      },
      {
        label: 'Excluir',
        command: () => {

        }
      }
    ]
  }
}
</script>

<style scoped>

</style>