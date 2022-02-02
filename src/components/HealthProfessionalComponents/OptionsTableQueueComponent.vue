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
        label: 'Iniciar Atendimento',
        command: () => {
          this.$router.push({name:"medicalRecord",params:{id:this.optionData.data.id}}).catch(() => {});
        }
      },
    ]
  }
}
</script>

<style scoped>

</style>