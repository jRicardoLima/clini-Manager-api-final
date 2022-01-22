<template>
  <Dialog
    header="PESQUISA PACIENTES"
    :visible.sync="displayModal"
    :modal="true"
    :closable="false"
  >
    <div class="row">
      <div class="col-md-4">
       <div class="form-floating">
         <input
             id="cod_patient"
             type="text"
             class="form-control"
             placeholder="Código"
         />
         <label for="cod_patient">Código</label>
       </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="name_patient"
            type="text"
            class="form-control"
            placeholder="Nome"
          />
          <label for="name_patient">Nome</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="cpf_patient"
            type="text"
            class="form-control"
            placeholder="CPF"
          />
          <label for="cpf_patient">CPF</label>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-2">
        <button
          id="search_patient"
          class="btn btn-success btn-sm"
          style="width: 115px"
          @click="search"
        >
          <i class="fas fa-search"></i> Pesquisar
        </button>
      </div>

      <div class="col-md-2">
        <button
          id="close_modal_patient"
          class="btn btn-warning btn-sm "
          style="width: 115px"
          @click="closeModalHelpPatient"
        >Fechar</button>
      </div>
    </div>

    <div v-if="isResult === true" class="row mt-2">
      <TableDataPatientComponent :resultSearch="resultSearch"/>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";
import TableDataPatientComponent from "@/components/PatientComponents/TableDataPatientComponent";

export default {
  components:{
    TableDataPatientComponent,
    Dialog,
  },
  props:{
    displayModal: Boolean,
    closeModal: Function
  },
  computed:{
    isResult(){
      return this.resultSearch.length > 0 && true;

    }
  },
  data(){
    return {
      resultSearch: []
    }
  },
  methods:{
    search(){
      setTimeout(() => {
        this.resultSearch = [
          {
            id: '1',
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

          {
            id: '2',
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
        ]
      },3000);
    },
    closeModalHelpPatient() {
      this.closeModal();
    }
  }
}
</script>

<style scoped>

</style>