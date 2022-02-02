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
  data(){
    return {
      items: []
    }
  },
  props:{
    optionData: Object
  },
  beforeMount() {
    this.items = [
      {
        label: 'Editar',
        command: () => {

          this.$router.push({name:'specialtie_edit',params:{id: this.optionData.data.id}});
        }
      },
      {
        label: 'Excluir',
        to: `especialidade/${this.optionData.data.id}/excluir`
      }
    ]
  }
}
</script>

<style scoped>

</style>