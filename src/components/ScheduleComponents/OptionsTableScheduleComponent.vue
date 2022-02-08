<template>
  <div>
    <SplitButton
        label="Opções"
        icon="pi pi-question"
        :model="items"
        class="p-button-secondary p-button-sm"
    />
    
    <GenericModal
      :headerName="this.genericModal.headerName"
      :displayModal="this.genericModal.displayModal"
      :closeModal="this.genericModal.closeModal"
      :componentName="this.genericModal.componentName"
      :data="this.genericModal.data"
      :width="this.genericModal.width"

    />
  </div>
</template>

<script>
import SplitButton from "primevue/splitbutton";
import GenericModal from "@/components/GenericModal";
export default {
  components:{
    SplitButton,
    GenericModal
  },
  props:{
    optionData: Object
  },
  data(){
    return{
      genericModal:{
       headerName: 'Dados Pagamento',
       componentName: '',
       displayModal: false,
       closeModal: null,
       width: '',
       data: null,
      }
    }
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
      },
      {
        label: 'Confirmar Presença',
        command:() => {
          this.openModalGeneric();
        }
      }
    ]
  },
 methods:{
   openModalGeneric(){
     this.genericModal.headerName = "Dados Pagamento";
     this.genericModal.componentName = "ShortTypePaymentComponent";
     this.genericModal.displayModal = true;
     this.genericModal.closeModal = this.closeModalGeneric;
     this.genericModal.data = null;
     this.genericModal.width = "1250px";
   },
   closeModalGeneric(){
     this.genericModal.displayModal = false;
   }
 }
}
</script>

<style scoped>

</style>