<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">
        <Panel header="Paciente" class="customPanel">
          <ScrollPanel style="height: 450px" class="customScroll">
            <div class="d-flex d-flex-row mt-2">
              <div class="form-floating">
                <input
                  id="cpf_patient"
                  type="text"
                  class="form-control"
                  placeholder="CPF PACIENTE"
                  v-model.lazy="schedule.cpfPatient"
                  @focusout="validateCpf('cpf_patient')"
                />
                <label for="cpf_patient">CPF PACIENTE</label>
              </div>
            </div>
            <div class="d-flex d-flex-row mt-2">
              <div class="form-floating">
                <input
                  id="cpf_health_professional"
                  type="text"
                  class="form-control"
                  placeholder="CPF PROFISSIONAL SAÚDE"
                  v-model.lazy="schedule.cpfHealthProfessional"
                  @focusout="loadHealtProcedureAndSpecialtie"
                 
                  
                />
                <label class="cpf_health_professional">CPF PROFISSIONAL SAÚDE</label>
              </div>
            </div>
            <div class="d-flex d-flex-row mt-2">
              <select 
                class="form-select" 
                v-model="schedule.specialtie" 
                style="padding-top: 15px; padding-bottom: 15px"
                @click="validateCpf"
                :disabled="testLoadProcedureAndSpecialtie === false"
                >
                <option value="">SELECIONE A ESPECIALIDADE</option>
                <template v-if="testLoadProcedureAndSpecialtie === true">
                  <template v-for="healthProfe in healthProfessionalData">

                    <option 
                      v-for="specialtie in healthProfe.specialties" 
                      :key="specialtie.id"
                      >
                      {{specialtie.name}}
                  </option>

                  </template>
                </template>
              </select>
            </div>

            <div class="d-flex d-flex-row mt-2">
              <select 
                class="form-select" 
                v-model="schedule.healthProcedure" 
                style="padding-top: 15px; padding-bottom: 15px"
                @click="validateCpf"
                :disabled="testLoadProcedureAndSpecialtie === false"
                >
                <option value="">SELECIONE O PROCEDIMENTO</option>
                <template v-if="testLoadProcedureAndSpecialtie == true">
                  <template v-for="healthProfe in healthProfessionalData" >

                   <template v-for="specialtieData in healthProfe.specialties">

                      <option 
                        v-for="procedure in specialtieData.medicalProcedures" 
                        :key="procedure.id"
                      >
                       {{procedure.name}}
                     </option>

                   </template>

                  </template>  
                </template>
              </select>
            </div>
            <div class="d-flex d-flex-row mt-2" v-if="testLoadCalendar === true">
              <vc-date-picker
                v-model="dayTimeSelected"
                mode="datetime"
                :valid-hours="[1,2,15]"
                :disabled-dates="{months:[2],days:[13,15,20]}"
                is24hr
                is-dark
              />
            </div>
            <div class="d-flex d-flex-row mt-2" v-if="testLoadCalendar === true">
              <select class="form-select" style="padding-top: 15px; padding-bottom: 15px">
                <option>SELECIONE A SALA</option>
              </select>
            </div>
            <p>{{schedule.scheduling}}</p>
            <div class="row mt-2" v-if="genericModalData.displayModal === true">
              <div class="col-md-12">
                <GenericModal
                 :headerName="genericModalData.headerName"
                 :displayModal="genericModalData.displayModal"
                 :closeModal="genericModalData.closeModal"
                 :componentName="genericModalData.componentName"
                 :data="genericModalData.data"
                 :width="genericModalData.width"
                 :position="genericModalData.position"
                />
              </div>
            </div>

            <div class="d-flex d-flex-row mt-2">
              <button 
                v-if="renderButtonTypePayment === true"
                class="btn btn-info"
                style="width: 80px"
                @click="openModalGeneric('ShortTypePaymentComponent')"
              >
                 <i class="fas fa-money-bill-alt"></i>
              </button>
            </div>

            <div class="d-flex d-flex-row mt-2">
              <button class="btn btn-success btn-sm">
                <i class="fas fa-calendar-plus"></i>Adicionar Agenda
              </button>
            </div>            
          </ScrollPanel>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "primevue/panel";
import ScrollPanel from "primevue/scrollpanel";
import GenericModal from "@/components/GenericModal";
import {formatDateToBr,validString} from "@/helpers/Helpers";

export default{
  components:{
    Panel,
    ScrollPanel,
    GenericModal
  },
  created(){
    this.configScheduledHealthProfessional = {
      /**ID E NOME DO PROFISSIONAL DE SAÚDE */
      info:[
        {
          month: 'february',
          number: 2,
          disabledDates:[10,15,25],
          availableHours: [15,8,9,10,14]
        },
        {
          month: 'march',
          number: 3,
          disabledDates:[],
          availableHours:[]
        }
      ]
    }
  },
  data(){
    return {
      dayTimeSelected: null,
      configScheduledHealthProfessional: null,
      healthProfessionalData:[
        {
          id: 4,
          name: "PROFISSIONAL ABC",
          specialties:[
           {
             id: 2,
             name: 'Especialidade 6',
             medicalProcedures: [
               {
                 id: 9,
                 name: 'Procedimento 4'
               },
               {
                 id: 7,
                 name: 'Procedimento 5'
               }
             ]
           },
           {
             id: 9,
             name: 'Especialidade 10',
             medicalProcedures: [
               {
                 id: 12,
                 name: 'Procedimento 17'
               },
               {
                 id: 8,
                 name: 'Procedimento 6'
               }
             ]
           }
         ]
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
      validDate:{
        month: null,
        days: null,
        time: null,
      },
      
      schedule: {
        cpfPatient: '',
        cpfHealthProfessional: '',
        specialtie: '',
        healthProcedure: '',
        scheduling: null,
      }
     
    }
  },
 computed:{
   testLoadProcedureAndSpecialtie(){
     if(this.schedule.cpfHealthProfessional !== "" 
        && this.schedule.cpfHealthProfessional !== undefined){
        return true;
      }
      return false
   },
   testLoadCalendar(){
     if(this.schedule.specialtie !== "" && this.schedule.specialtie !== undefined 
        && this.schedule.healthProcedure !== "" && this.schedule.healthProcedure !== undefined){
          return true;
        }
        return false;
   },
   renderButtonTypePayment(){
     if(this.schedule.cpfPatient !== "" && this.schedule.cpfPatient !== undefined
        && this.schedule.cpfHealthProfessional !== "" 
        && this.schedule.cpfHealthProfessional !== undefined
        && this.schedule.specialtie !== "" 
        && this.schedule.specialtie !== undefined
        && this.schedule.healthProcedure !== ""
        && this.schedule.healthProcedure !== undefined
        ){
          return true;
        }
        return false
   }
 },
 watch:{
   dayTimeSelected(){
     let daySelected = formatDateToBr(this.dayTimeSelected);
     console.log(this.dayTimeSelected.month());
     console.log(daySelected);

   },
 },
  methods:{
    loadHealtProcedureAndSpecialtie(){
      if(this.schedule.cpfHealthProfessional !== "" 
      && this.schedule.cpfHealthProfessional !== undefined){
        return this.healthProfessionalData;
      }
    },
    openModalGeneric(nameModal){
      switch(nameModal){

        case 'ShortTypePaymentComponent':
          this.genericModalData.headerName = "Dados Pagamento";
          this.genericModalData.componentName = "ShortTypePaymentComponent";
          this.genericModalData.displayModal = true;
          this.genericModalData.closeModal = this.closeModalGeneric;
          this.genericModalData.data = null;
          this.genericModalData.width = "920px";
          this.genericModalData.position = "topright"
        break;  
      }
    },
    closeModalGeneric(){
      this.genericModalData.displayModal = false;
    },
    verifyDateSelected(){
      console.log(this.schedule.scheduling);
    },
    validateCpf(nameInput){
      if(nameInput == 'cpf_patient'){
         if(!validString(this.schedule.cpfPatient,',','.','-','@','#','$','¬','"','&','*','(',')')){
        if(!Number.isInteger(parseInt(this.schedule.cpfPatient))){
          this.cpfPatient = "";
          this.$toast.add({
          severity: 'warn',
          summary: 'INFORMAÇÃO DO SISTEMA',
          detail: 'CARACTERE NÃO PERMITIDO',
          life: 1500
        });
        }
       } else {
         this.schedule.cpfPatient = ""
          this.$toast.add({
            severity: 'warn',
            summary: 'INFORMAÇÃO DO SISTEMA',
            detail: 'CARACTERE NÃO PERMITIDO',
            life: 1500
          });
        }
      } else {
         if(!validString(this.schedule.cpfHealthProfessional,',','.','-','@','#','$','¬','"','&','*','(',')')){
        if(!Number.isInteger(parseInt(this.schedule.cpfHealthProfessional))){
          this.schedule.cpfHealthProfessional = "";
          this.schedule.specialtie = "";
          this.schedule.healthProcedure = "";
          this.$toast.add({
          severity: 'warn',
          summary: 'INFORMAÇÃO DO SISTEMA',
          detail: 'CARACTERE NÃO PERMITIDO',
          life: 1500
        });
        }
      } else {
        this.schedule.cpfHealthProfessional = "";
        this.schedule.specialtie = "";
        this.schedule.healthProcedure = "";
        this.$toast.add({
          severity: 'warn',
          summary: 'INFORMAÇÃO DO SISTEMA',
          detail: 'CARACTERE NÃO PERMITIDO',
          life: 1500
        });
      }
      }
    }
  }
}
</script>

<style scoped>

</style>