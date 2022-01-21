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
              />
            </span>
            <InputText
              id="name_or_cpf_patient"
              class="p-inputtext-lg form-control"
              placeholder="CPF/Nome Paciente"
              v-model="selectNameOrCpf"
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
  computed:{
   selectNameOrCpf(){
     return this.cpfOrName === true ? this.schedule.cpf : this.schedule.name;
   }
  },
  data(){
   return{
     schedule: {
       periodIni: '',
       periodFin: '',
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
  }
}
</script>

<style scoped>
.p-multiselect {
  width: 19rem;
}
</style>