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
    optionData: Object,
    showTypeHealthInsurance: Boolean,
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
          if(this.showTypeHealthInsurance === false){
            this.$router.push({name:'healthInsuranceEdit',params:{id: this.optionData.data.id}}).catch(() => {});
          } else {
            this.$router.push({name: 'typeHealthInsuranceEdit',params:{id: this.optionData.data.id}}).catch(() => {});
          }

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