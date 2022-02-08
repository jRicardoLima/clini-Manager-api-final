<template>
    <Panel>
        <template #header>
            <h4>Menu Fluxo De Caixa</h4>
        </template>

       <div class="row">
           <div class="col-md-2">
               <div class="form-check">
                   <input
                     id="flow_pay_actual"
                     class="form-check-input"
                     type="checkbox"
                     v-model="flowPayActual"
                   />
                   <label class="form-check-label" for="flow_pay_actual">Caixa do Dia</label>
               </div>
           </div>
       </div> 
       <div class="row">
           <div class="col-md-2">
               <div class="form-floating">
                   <InputMask
                        id="date_flow_payment_ini"
                        mask="99/99/9999"
                        placeholder="Periodo Inicial"
                        class="form-control"
                        v-model="flowPayment.periodIni"
                   />
                   <label for="date_flow_payment_fin">Periodo Inicial</label>
               </div>
           </div>

           <div class="col-md-2">
               <div class="form-floating">
                   <InputMask
                        id="date_flow_payment_fin"
                        mask="99/99/9999"
                        placeholder="Periodo Final"
                        class="form-control"
                        v-model="flowPayment.periodFin"
                   />
                   <label for="date_flow_payment_fin">Periodo Final</label>
               </div>
           </div>

           <div class="col-md-2">
               <select 
                   class="form-select" 
                   style="padding-top: 15px; padding-bottom: 15px"
                   v-model="flowPayment.healthProfessional"
                   >
                   <option value="">SELECIONE PROFISSIONAL DE SAÚDE</option>
               </select>
           </div>

           <div class="col-md-2">
               <select 
                  class="form-select" 
                  style="padding-top: 15px; padding-bottom: 15px"
                  v-model="flowPayment.healthInsurance"
                  >
                   <option value="">SELECIONE PLANO DE SAÚDE</option>
               </select>
           </div>
           <div class="col-md-4">
               <div class="p-inputgroup">
                   <span class="p-inputgroup-addon">
                       <Checkbox
                        :binary="true"
                        v-tooltip="'SELECIONE O CHECKBOX PARA DIGITAR O CÓDIGO'"
                        v-model="codOrNameProcedure"
                        @click="verifyInput"
                       />
                   </span>
                   <InputText
                     id="health_procedure"
                     class="p-inputtext-lg form-control"
                     placeholder="COD/Nome Procedimento"
                     v-model="flowPayment.codOrNameProcedure"
                     @keyup="validateField"
                     v-tooltip="'ALT + ENTER PARA PESQUISAR PROCEDIMENTOS'"
                   />
               </div>
           </div>
       </div>
       <div class="d-flex d-flex-row mt-2">
           <SplitButton
            label="Selecione"
            class="p-button-help"
           />
       </div>

    </Panel>
</template>

<script>
import Panel from "primevue/panel";
import SplitButton from "primevue/splitbutton";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import {allUpper,onlyNumbers} from "@/helpers/Helpers";

export default{
    components:{
        Panel,
        SplitButton,
        InputMask,
        InputText,
        Checkbox
    },
    props:{
    setResultSearch: Function
  },
  data(){
      return{
          codOrNameProcedure: false,
          flowPayActual: true,
          flowPayment:{
              periodIni: '',
              periodFin: '',
              healthProfessional: '',
              healthInsurance: '',
              codOrNameProcedure: ''
          }
      }
  },
  methods:{
      validateField(event){

          if(this.codOrNameProcedure === false){
              this.flowPayment.codOrNameProcedure = allUpper(this.flowPayment.codOrNameProcedure);
          } else {
              if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
                  this.$toast.add({
                      severity: 'warn',
                      summary: 'INFORMAÇÃO DO SISTEMA',
                      detail: 'CAMPO PERMITE SOMENTE NUMEROS',
                      life: 1500
                    });
              }
          }
      },
      verifyInput(){
          this.flowPayment.codOrNameProcedure = "";
      }
  }
}
</script>

<style scoped>
</style>