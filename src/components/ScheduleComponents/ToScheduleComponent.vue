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
                  @keyup.enter="searchPatient"
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
                    @keyup.enter="searchHealthProfessional"
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
              <select class="form-select"  style="padding-top: 15px; padding-bottom: 15px">
                <option value="">SELECIONE A ESPECIALIDADE</option>
                <template v-if="specialtiesHealth !== null">
                  <option v-for="(specialtie,index) in specialtiesHealth" :key="index">
                    {{specialtie.name}}
                  </option>
                </template>
              </select>
            </div>

            <div class="col-md-3">
              <select class="form-select"  style="padding-top: 15px; padding-bottom: 15px">
                <option value="">SELECIONE O PROCEDIMENTO</option>
                <template v-if="HealthProcedures !== null">
                  <option v-for="(medicalProcedure,index) in HealthProcedures" :key="index">
                    {{medicalProcedure.name}}
                  </option>
                </template>
              </select>
            </div>
          </div>
        </TabPanel>
      </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

export default {
 components:{
   TabView,
   TabPanel,
 },
  data(){
   return{
     specialties: [],
     healthProcedures: [],
     patients:[
       {
         id: '1',
         name: 'JOÃO RICARDO LIMA',
         cpf: '02315478941',
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

       {
         id: '2',
         name: 'JOÃO RICARDO LIMA',
         cpf: '01257412369',
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
       {
         id: '3',
         name: 'JOÃO RICARDO LIMA',
         cpf: '03265987412',
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

       {
         id: 4,
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
         id: 1,
         name: 'FUNCIONARIO TESTE',
         cpf: '02541541515',
         professional_register: '',
         health_professional: true,
         occupation: {
           id: 1,
           name: 'Função 1',
         },
         salary: 1500.00,
         email: "jrolsd@xtx.com.br",
         address:{
           id: 1,
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
             id: 5,
             name: 'Especialidade 1',
             medicalProcedures: [
               {
                 id: 2,
                 name: 'Procedimento 4'
               },
               {
                 id: 3,
                 name: 'Procedimento 5'
               }
             ]
           }
         ]
       },
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
       {
         id: 3,
         name: 'FUNCIONARIO TESTE',
         cpf: '02541541515',
         professional_register: '',
         health_professional: true,
         occupation: {
           id: 2,
           name: 'Função 2',
         },
         salary: 2500.00,
         email: "jrolsd@xtx.com.br",
         address:{
           id: 3,
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
                 id: 8,
                 name: 'Procedimento 6'
               }
             ]
           }
         ]
       },
       {
         id: 4,
         name: 'FUNCIONARIO TESTE',
         cpf: '02541541515',
         professional_register: 'abc5415415',
         health_professional: true,
         occupation: {
           id: 4,
           name: 'Função 4',
         },
         salary: 6000.00,
         email: "jrolsd@xtx.com.br",
         address:{
           id: 4,
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
               },
               {
                 id: 8,
                 name: 'Procedimento 6'
               }
             ]
           },
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
     return this.healthProfessional.name !== "" && this.healthProfessional.name !== undefined
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
  }
}
</script>

<style scoped>

</style>