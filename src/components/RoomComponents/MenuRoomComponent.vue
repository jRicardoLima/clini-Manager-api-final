<template>
    <Panel>
        <template #header>
            <h4>Menu Salas</h4>
        </template>

        <div class="row">
            <div class="col-md-4">
                <div class="form-floating">
                    <input
                      id="cod_room"
                      type="text"
                      class="form-control"
                      placeholder="CÓDIGO"
                      v-model="room.id"
                      @keyup="roomCod"
                    />
                    <label for="cod_room">Código</label>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-floating">
                    <input
                      id="name_room"
                      type="text"
                      class="form-control"
                      placeholder="NOME" 
                      v-model="room.name"
                      @keyup="upWord" 
                    />
                    <label for="name_room">Nome</label>
                </div>
            </div>

            <div class="col-md-4">
                <div class="form-floating">
                    <input
                      id="cpf_health_professional"
                      type="text"
                      class="form-control"
                      placeholder="CPF/CNPJ Profissional Saúde" 
                      v-model="room.cpfHealthProfessional"
                      @keyup="validateCpf"
                      @keydown.alt.enter="openGenericModal('ShortEmployeeComponent')" 
                    />
                    <label for="cpf_health_professional">CPF/CNPJ PROFISSIONAL SAÚDE</label>
                </div>
            </div>
        </div>

        <div class="d-flex d-flex-row mt-2">
            <SplitButton
              label="Selecione"
              :model="itemsOptions"
              class="p-button-help"
            />
        </div>

        <div>
            <GenericModal
              :headerName="genericModalData.headerName"
              :displayModal="genericModalData.displayModal"
              :closeModal="genericModalData.closeModal"
              :componentName="genericModalData.componentName"
              :data="genericModalData.data"
              :width="genericModalData.width"
            />
        </div>
    </Panel>
</template>

<script>
import Panel from "primevue/panel";
import SplitButton from "primevue/splitbutton";
import {onlyNumbers,validCnpjCpf,allUpper} from "@/helpers/Helpers";
import GenericModal from "@/components/GenericModal";

export default{
 components:{
     Panel,
     SplitButton,
     GenericModal
 },
 props:{
     setResultSearch: Function
 },
 data(){
     return{
         room:{
             id: '',
             name: '',
             cpfHealthProfessional: ''
         },
         itemsOptions:[
             {
                 label: 'Pesquisar',
                 command: () => {

                 }
             },
             {
                 label: 'Cadastrar',
                 command: () => {

                 }
             },
             {
                 label: 'Status Salas',
                 command: () => {

                 }
             }
         ],
        genericModalData:{
           headerName: '',
           componentName: '',
           displayModal: false,
           closeModal: '',
           data: null,
           width: '',
           position: '',
        },
     }
 },
 methods:{
     roomCod(event){
         if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
             this.room.id = "";
             this.$toast.add({
                 severity:'warn',
                 summary:'INFORMAÇÃO DO SISTEMA',
                 detail:'CAMPO PERMITE SOMENTE NUMEROS',
                 life:1500
             });
         }
     },
     upWord(){
         this.room.name = allUpper(this.room.name)
     },
     validateCpf(event){
         if(!validCnpjCpf(event.keyCode) && validCnpjCpf(event.keyCode) !== undefined){
             this.room.cpfHealthProfessional = "";
             this.$toast.add({
                 severity:'warn',
                 summary:'INFORMAÇÃO DO SISTEMA',
                 detail:'CARACTERE NÃO PERMITIDO',
                 life:1500
             });
         }
     },
     openGenericModal(nameModal){
         switch(nameModal){
             case 'ShortEmployeeComponent':
                 this.genericModalData.headerName = "Pesquisar Funcionário";
                 this.genericModalData.componentName = "ShortEmployeeComponent";
                 this.genericModalData.displayModal = true;
                 this.genericModalData.closeModal = this.closeModalGeneric;
                 this.genericModalData.data = null;
                 this.genericModalData.width = "920px";
                 this.genericModalData.position = "topright";
         }   
     },
     closeModalGeneric(){
         this.genericModalData.displayModal = false;
     }
 }
} 
</script>

<style scoped></style>