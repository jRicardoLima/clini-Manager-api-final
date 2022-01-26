<template>
  <div class="card mt-3">
      <TabView  :scrollable="true">
        <TabPanel header="Geral">
          <div class="row">
            <div class="col-md-3">
             <div class="form-floating">
               <template v-if="foundPatient !== true">
                 <input
                  id="cpf_patient"
                  type="text"
                  class="form-control"
                  placeholder="CPF Paciente"
                  v-model="patient.cpf"
                  @focusout="searchPatient"
                  @keyup="validateCpfPatient"
                  @keyup.enter="searchPatient"
                  @keydown.alt.enter="openHelpPatientMenu"
                  v-tooltip="'PRESSIONE ALT ENTER PARA PESQUISAR PACIENTE'"
                 />
                 <label for="cpf_patient">CPF Paciente</label>
               </template>
               <template v-if="foundPatient !== false">
                 <input
                  id="name_patient"
                  type="text"
                  class="form-control"
                  placeholder="Nome Paciente"
                  v-model="patient.name"
                 />
                 <label for="name_patient">Nome Paciente</label>
               </template>
             </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <template v-if="foundHealthProfessional !== true">
                  <input
                    id="cpf_health_professional"
                    type="text"
                    class="form-control"
                    placeholder="CPF Profissional Saúde"
                    v-model="healthProfessional.cpf"
                    @focusout="searchHealthProfessional"
                    @keyup="validateCpfHealthProfessional"
                    @keyup.enter="searchHealthProfessional"
                    @keydown.alt.enter="openHelpHealthProfessional"
                    v-tooltip="'PRESSIONE ALT ENTER PARA PESQUISAR PROFISSIONAL SAÚDE'"
                  />
                  <label for="cpf_health_professional">CPF Professional Saúde</label>
                </template>
                <template v-if="foundHealthProfessional !== false">
                  <input
                    id="name_health_professional"
                    type="text"
                    class="form-control"
                    placeholder="Nome Profissional Saúde"
                    v-model="healthProfessional.name"
                  />
                  <label for="name_health_professional">Nome Professional Saúde</label>
                </template>
              </div>
            </div>

            <div class="col-md-3">
              <select class="form-select" v-model="schedule.healthProfessional.specialtie" style="padding-top: 15px; padding-bottom: 15px">
                <option value="">SELECIONE A ESPECIALIDADE</option>
                <template v-if="specialtiesHealth !== null">
                  <option v-for="(specialtie,index) in specialtiesHealth" :key="index">
                    {{specialtie.name}}
                  </option>
                </template>
              </select>
            </div>

            <div class="col-md-3">
              <select class="form-select"  v-model="schedule.healthProfessional.medicalProcedures" style="padding-top: 15px; padding-bottom: 15px">
                <option value="">SELECIONE O PROCEDIMENTO</option>
                <template v-if="HealthProcedures !== null">
                  <option v-for="(medicalProcedure,index) in HealthProcedures" :key="index">
                    {{medicalProcedure.name}}
                  </option>
                </template>
              </select>
            </div>
          </div>
         <div class="row mt-2">
           <div class="col-md-1">
             <button class="btn btn-info" style="width: 80px" @click="openSchedule">
               <i class="fas fa-calendar-alt"></i>
             </button>
           </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <template v-if="openModalSchedule === true">
               <ModalScheduleComponents
                :displayModal="displayModal"
                :setSchedule="setSchedule"
                :closeModalSchedule="closeModalSchedule"
               />
             </template>
           </div>
         </div>
          <div class="row">
            <div class="col-md-12">
              <template v-if="openModalHPatient === true">
                <ModalHelpPatientComponent
                  :displayModal="displayModalHelpPatient"
                  :closeModal="closeModalHelpPatient"
                />
              </template>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <template v-if="openModalHHealthProfessinonal === true">
                <ModalHelpEmployeeComponent
                  :displayModal="displayModalHelpHealthProfessional"
                  :closeModal="closeModalHelpHealthProfessional"
                />\
              </template>
            </div>
          </div>
        </TabPanel>

        <div class="row mt-2">
          <div class="col-md-2">
            <button
                id="btn_save_schedule"
                class="btn btn-success btn-sm"
                style="width: 250px"
                @click="saveData"
            >
              <i class="fas fa-check"></i> Salvar
            </button>
          </div>
        </div>
      </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import ModalScheduleComponents from "@/components/ScheduleComponents/ModalScheduleComponents";
import ModalHelpPatientComponent from "@/components/PatientComponents/ModalHelpPatientComponent";
import ModalHelpEmployeeComponent from "@/components/EmployeeComponents/ModalHelpEmployeeComponent";
import {validCpf} from "@/helpers/Helpers";
export default {
 components:{
   ModalHelpEmployeeComponent,
   ModalHelpPatientComponent,
   ModalScheduleComponents,
   TabView,
   TabPanel,
 },
  data(){
   return{
     openModalSchedule: false,
     openModalHelpPatient: false,
     displayModalHelpPatient: false,
     openModalHelpHealthProfessional: false,
     displayModalHelpHealthProfessional: false,
     displayModal: true,
     schedule: {
       cpfPatient: '',
       dateSchedule: [],
       healthProfessional:{
        cpfHealthProfessional: '',
        specialtie: '',
        medicalProcedures: ''
       }
     },
     specialties: [],
     healthProcedures: [],
     patients:[
       {
         id: '3',
         name: 'JOÃO RICARDO LIMA',
         cpf: '03389454152',
         rg: '25352523',
         birthDate: '19/11/1992',
         information: 'OBS',
         address: {
           city: 'PRIMAVERA DO LESTE',
           zipecode: '',
           street: 'FLOR DE LIZ',
           neighborhood: 'PIONEIRO',
           federate_unit: 'MT',
           telphone_one: '65 996239237',
           has_main_telphone_one: true,
           telphone_two: '65 999291300',
           has_main_telphone_two: false,
           email: 'j.ricard_lima@outlook.com',
         },
         health_info: {
           comorbidities: [
             {name: 'TESTE 1'},
             {name: 'TESTE 2'},
             {name: 'TESTE 3'}
           ],
         },
         useDrugs: {
           drugs: [
             {name: 'DROGA 1'},
             {name: 'DROGA 2'},
             {name: 'DROGA 3'},
             {name: 'DROGA 4'},
             {name: 'DROGA 5'}
           ],
         }
       },
     ],
     healthProfessionals: [
       {
         id: 2,
         name: 'FUNCIONARIO TESTE blablabal',
         cpf: '03389454152',
         professional_register: 'asdasdasdasd',
         health_professional: true,
         occupation: {
           id: 3,
           name: 'Função 3',
         },
         salary: 3000.00,
         email: "jrolsd@xtx.com.br",
         address:{
           id: 2,
           city: 'cidade Teste',
           street: "asdasdsdsfasefwefwdasd",
           neighborhood:"asdasdefreer",
           zipcode: "325252514",
           federate_unit: "MT",
           telphone_one: "",
           telphone_two:"887788-78787"

         },
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
       },
     ],
     patient:{
       cpf: '',
       name: ''
     },
     healthProfessional:{
       cpf: '',
       name: '',
     }
   }
  },
  computed:{
   foundPatient(){
     return this.patient.name !== "" && this.patient.name !== undefined;
   },
   foundHealthProfessional(){
     return this.healthProfessional.name !== "" && this.healthProfessional.name !== undefined;
   },
    specialtiesHealth(){
      if(this.specialties !== [] && this.specialties !== undefined
          && this.healthProfessional.cpf !== "" && this.healthProfessional.cpf !== undefined){
        return this.specialties;
      }
      return null;
    },
    HealthProcedures(){
     if(this.healthProcedures !== [] && this.healthProcedures !== undefined
         && this.healthProfessional.cpf !== "" && this.healthProfessional.cpf !== undefined){
       return this.healthProcedures;
     }
     return null;
    },
    isSchedule(){
     return this.patient.cpf !== ""
         && this.patient.cpf !== undefined
         && this.healthProfessional.cpf !== ""
         && this.healthProfessional.cpf !== undefined
         && this.schedule.healthProfessional.specialtie !== "" && this.schedule.healthProfessional.specialtie !== undefined
         && this.schedule.healthProfessional.medicalProcedures !== "" && this.schedule.healthProfessional.medicalProcedures !== undefined;

    },
    openModalHPatient(){
     return this.displayModalHelpPatient === true && this.openModalHelpPatient === true;
    },
    openModalHHealthProfessinonal(){
      return this.displayModalHelpHealthProfessional === true && this.openModalHelpHealthProfessional === true;
    }
  },
  methods:{
    searchPatient(){
      if(this.patient.cpf !== "" && this.patient.cpf !== undefined){
        this.patients.forEach(element => {
          if(element.cpf === this.patient.cpf){
            this.patient.name = element.name;
          }
        })
      }
    },
    searchHealthProfessional(){
      if(this.healthProfessional.cpf !== "" && this.healthProfessional.cpf !== undefined){
        this.healthProfessionals.forEach(element => {
            if(element.cpf === this.healthProfessional.cpf){
              this.healthProfessional.name = element.name;
              this.specialties = element.specialties;
               element.specialties.forEach(el => {
                this.healthProcedures = el.medicalProcedures;
              });
            }
        });
      }
    },
    setSchedule(days){
      if(days !== [] && days !== undefined){
        this.schedule.dateSchedule = days;
      }
    },
    closeModalSchedule(){
      this.displayModal = false;
      this.openModalSchedule = false;
    },
    openSchedule(){
      if(this.isSchedule === true){
        this.schedule.cpfPatient = this.patient.cpf;
        this.schedule.healthProfessional.cpfHealthProfessional = this.healthProfessional.cpf;
        this.openModalSchedule = true;
      }
    },
    saveData(){
      console.log(this.schedule);
    },
    openHelpPatientMenu(){
      this.displayModalHelpPatient = true;
      this.openModalHelpPatient = true;
    },
    closeModalHelpPatient(){
      this.displayModalHelpPatient = false;
      this.openModalHelpPatient = false
    },
    openHelpHealthProfessional(){
      this.displayModalHelpHealthProfessional = true;
      this.openModalHelpHealthProfessional = true;
    },
    closeModalHelpHealthProfessional(){
      this.displayModalHelpHealthProfessional = false;
      this.openModalHelpHealthProfessional = false;
    },
    validateCpfPatient(event){
      if(!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined){
        this.patient.cpf = "";
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    validateCpfHealthProfessional(event){
      if(!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined){
        this.healthProfessional.cpf = "";
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    }
  }
}
</script>

<style scoped>

</style>