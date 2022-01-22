<template>
    <Panel>
      <template #header>
        <h4>Menu Agendamentos</h4>
      </template>

      <div class="row">
        <div class="col-md-3">
           <div class="form-floating">
             <InputMask
                id="date_schedule_ini"
                mask="99/99/9999"
                placeholder="Periodo Inicial"
                class="form-control"
                v-model="schedule.periodIni"
             />
             <label for="date_schedule_ini">Periodo Inicial</label>
           </div>
        </div>

        <div class="col-md-3">
          <div class="form-floating">
            <InputMask
              id="date_schedule_fin"
              mask="99/99/9999"
              placeholder="Periodo Final"
              class="form-control"
              v-model="schedule.periodFin"
            />
            <label for="date_schedule_fin">Periodo Final</label>
          </div>
        </div>

        <div class="col-md-3">
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <Checkbox
                  :binary="true"
                  v-model="cpfOrName"
                  @click="verifyInput"
                  v-tooltip="'Selecione o CheckBox para Digitar o CPF'"
              />
            </span>
            <InputText
              id="name_or_cpf_patient"
              class="p-inputtext-lg form-control"
              placeholder="CPF/Nome Paciente"
              v-model="schedule.nameOrCpf"
              @keyup="validateField($event,'name_or_cpf_patient')"
              v-tooltip="'Selecione o CheckBox para Digitar o CPF'"
            />
          </div>
        </div>

        <div class="col-md-3">
          <MultiSelect
            v-model="schedule.healthProfessionalsSelected"
            :options="healthProfessionals"
            class="form-control"
            optionLabel="name"
            placeholder="Selecione os Profissionais"
          />
        </div>
      </div>

      <div class="row mt-2">
        <div class="col-md-2">
          <SplitButton
              label="Selecione"
              :model="itemsOptions"
              class="p-button-help"
              style="width: 200px;"
          />
        </div>
      </div>
    </Panel>
</template>

<script>
import Panel from "primevue/panel";
import SplitButton from "primevue/splitbutton";
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import MultiSelect from "primevue/multiselect";
import {allUpper, validCpf} from "@/helpers/Helpers";

export default {
 components:{
   Panel,
   SplitButton,
   InputMask,
   InputText,
   Checkbox,
   MultiSelect
 },
  props:{
    setResultSearch: Function
  },
  data(){
   return{
     schedule: {
       periodIni: '',
       periodFin: '',
       nameOrCpf: '',
       name: '',
       cpf: '',
       healthProfessionalsSelected: []
     },
     cpfOrName: false,
     healthProfessionals: [
       {
         id: 1,
         name: 'FUNCIONARIO TESTE',
         cpf: '02541541515',
         professional_register: '',
         health_professional: false,
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

         }
       },
       {
         id: 2,
         name: 'FUNCIONARIO TESTE',
         cpf: '02541541515',
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

         }
       },
       {
         id: 3,
         name: 'FUNCIONARIO TESTE',
         cpf: '02541541515',
         professional_register: '',
         health_professional: false,
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

         }
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

         }
       },
     ],
     itemsOptions: [
       {
         label: 'Pesquisar',
         command: () => {
            let response = [
              {
                id: 1,
                dates: [
                  {
                    id: 1,
                    scheduled: '25/01/2022'
                  },
                  {
                    id: 2,
                    scheduled: '29/01/2022'
                  },
                  {
                    id: 3,
                    scheduled: '05/02/2022'
                  }
                ],
                patient:{
                  id: 6,
                  name: 'João Ricardo'
                  /**
                   * Restate dos dados do paciente
                   */
                },
                healthProfessional: {
                  id: 15,
                  name: 'Jessica Dyana Mello dos Santos Lima',
                  /**
                   * Restante dos dados do profissional
                   */
                  specialtie: {
                    id: 1,
                    name: 'Psicologo'
                    /**
                     * Restante dos dados da especialidade
                     */
                  },
                  medicalProcedure: {
                    id: 3,
                    name: 'TCC'
                    /**
                     * Restante dos dados do procedimento
                     */
                  }
                }
              },
              {
                id: 100,
                dates: [
                  {
                    id: 4,
                    scheduled: '28/02/2022'
                  },
                  {
                    id: 10,
                    scheduled: '08/03/2022'
                  },
                  {
                    id: 9,
                    scheduled: '15/03/2022'
                  }
                ],
                patient:{
                  id: 50,
                  name: 'João Miguel'
                  /**
                   * Restate dos dados do paciente
                   */
                },
                healthProfessional: {
                  id: 22,
                  name: 'Marta Aparecidade Vasconcelos',
                  /**
                   * Restante dos dados do profissional
                   */
                  specialtie: {
                    id: 15,
                    name: 'Dermatologista'
                    /**
                     * Restante dos dados da especialidade
                     */
                  },
                  medicalProcedure: {
                    id: 18,
                    name: 'Consulta normal'
                    /**
                     * Restante dos dados do procedimento
                     */
                  }
                }
              }
            ];
            setTimeout(() => {
              this.setResultSearch(response,true);
            },3000);
         }
       },
       {
         label: 'Agendar',
         command: () => {
            this.$router.push({name: 'scheduleNew'}).catch(() => {});
         }
       }
     ],
   }
  },
  methods:{
   validateField(event,nameInput){
     if(this.cpfOrName === false){
       switch (nameInput){
         case 'name_or_cpf_patient':
           this.schedule.nameOrCpf = allUpper(this.schedule.nameOrCpf);
           break;
       }
     } else {
       if(!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined){
         this.schedule.nameOrCpf = "";
         this.$toast.add({
           severity: 'warn',
           summary: 'INFORMAÇÃO DO SISTEMA',
           detail: 'CARACTERE NÃO PERMITIDO',
           life: 1500
         });
       }
     }
   },
    verifyInput(){
     this.schedule.nameOrCpf = "";
    }
  }
}
</script>

<style scoped>
.p-multiselect {
  width: 19rem;
}
</style>