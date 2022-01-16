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
  beforeMount() {
    this.items = [
      {
        label: 'Editar',
        command: () => {

        }
      },
      {
        label: 'Exluir',
        command: () => {

        }
      }
    ]
  },
  props:{
    optionData: Object
  },
  data(){
    return {
      items: []
    }
  },

}
</script>

<style scoped>

</style>