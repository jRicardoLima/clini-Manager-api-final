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
                  @keydown.alt.enter="openModalGeneric('ShortPatientComponent')"
                  v-tooltip="'PRESIONE ALT ENTER PARA PESQUISAR UM PACIENTE'"
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
                  @keydown.alt.enter="openModalGeneric('ShortEmployeeComponent')"
                  v-tooltip = "'PRESIONE ALT ENTER PARA PESQUISAR PROFISSIONAL SAÚDE'"
                  
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
                v-model="schedule.scheduling"
                mode="datetime"
                :valid-hours="getInfoScheduleHealthProfessional.availableHours"
                :available-dates="{months:getInfoScheduleHealthProfessional.number+1,
                                  days:getInfoScheduleHealthProfessional.availableDates}"
                is24hr
                is-dark
              />
            </div>
            <div class="d-flex d-flex-row mt-2" v-if="testLoadCalendar === true">
              <select class="form-select" style="padding-top: 15px; padding-bottom: 15px">
                <option>SELECIONE A SALA</option>
              </select>
            </div>
            
            <div class="d-flex d-flex-row mt-2">
              <button class="btn btn-success btn-sm" @click="addPatientSchedule">
                <i class="fas fa-calendar-plus"></i>Adicionar Na Agenda
              </button>
            </div>            
          </ScrollPanel>
        </Panel>
      </div>

      <div class="col-md-8">
        <Panel header="Agenda" class="customPanel">
          <ScrollPanel style="height: 800px" class="customScroll">
              <FullSchedule
                :setData="dataFullSchedule"
              />
          </ScrollPanel>
        </Panel>
      </div>
    </div>
  </div>
</template>

<script>
import Panel from "primevue/panel";
import ScrollPanel from "primevue/scrollpanel";
import {validString,formatDateFullCalendar} from "@/helpers/Helpers";
import FullSchedule from "@/components/FullSchedule";

export default{
  components:{
    Panel,
    ScrollPanel,
    FullSchedule
  },
  data(){
    return {
      dataFullSchedule: {},
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
        scheduling: new Date(),
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
   },
   getInfoScheduleHealthProfessional(){
     if(this.schedule.scheduling !== null && this.schedule.scheduling !== undefined){
        let month = this.schedule.scheduling.getMonth();
        if(this.configScheduledHealthProfessional !== null 
          && this.configScheduledHealthProfessional !== undefined){
           return this.configScheduledHealthProfessional.info
                  .find(element => element.number == month);
          }
          return null;
     }
     return null
   }
 },
 watch:{
   schedule:{
     deep: true,
     handler(value){
       if(value.cpfHealthProfessional !== "" && value.cpfHealthProfessional !== undefined){
         this.configScheduledHealthProfessional = {
           /**DADOS DO PROFISSIONAL DE SAÚDE */
          info:[
           {
            month: 'february',
            number: 1,
            availableDates:[5,10,15,25],
            availableHours: [15,8,9,10,14]
           },
           {
            month: 'march',
            number: 2,
            availableDates:[5,15,20],
            availableHours:[8,13,15]
           },
           {
             month: 'april',
             number: 3,
             availableDates: [],
             availableHours:[] 
           }
          ]
         }
       }
     }
   }
 },
  methods:{
    loadHealtProcedureAndSpecialtie(){
      if(this.schedule.cpfHealthProfessional !== "" 
      && this.schedule.cpfHealthProfessional !== undefined){
        return this.healthProfessionalData;
      }
    },
    addPatientSchedule(){
      if(this.configScheduledHealthProfessional === null || this.configScheduledHealthProfessional.info === ""){
        this.$toast.add({
             severity: 'warn',
             summary: 'INFORMAÇÃO DO SISTEMA',
             detail: 'PREENCHA OS CAMPOS',
             life: 2500
           });
         return;
      }
      for(let element of this.configScheduledHealthProfessional.info){
          if((element.number+1) == (this.schedule.scheduling.getMonth()+1)){
               let validDate = element.availableDates
                           .find(item => item == this.schedule.scheduling.getDate());
              
              if(validDate == undefined || validDate == null){
                this.$toast.add({
                                 severity: 'warn',
                                 summary: 'INFORMAÇÃO DO SISTEMA',
                                 detail: 'DATA SELECIONA NÃO DISPONIVEL',
                                 life: 2500
                                });
                return;
              } 
       
          }
      }
      this.dataFullSchedule =  { id:5,title: 'João Ricardo', 
                               date: formatDateFullCalendar(this.schedule.scheduling)};
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