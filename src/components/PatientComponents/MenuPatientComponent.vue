<template>
  <Panel>
    <template #header>
      <h4>Menu Pacientes</h4>
    </template>
      <div class="row">

        <div class="col-md-3">
          <div class="form-floating">
            <input
                id="cod_patient"
                type="text"
                class="form-control"
                placeholder="Código"
                v-model="patient.id"
                @keyup="patientCod"
            />
            <label for="cod_patient">Código</label>
          </div>
        </div>

        <div class="col-md-3">
          <div class="form-floating">
            <input
              id="cpf_patient"
              type="text"
              class="form-control"
              placeholder="CPF"
              v-model="patient.cpf"
              @keyup="validateCpf"
            />
            <label for="cpf_patient">CPF</label>
          </div>
        </div>

        <div class="col-md-3">
            <div class="form-floating">
              <input
                  id="name_patient"
                  type="text"
                  class="form-control"
                  placeholder="Nome"
                  v-model="patient.name"
                  @keyup="upWord('name_patient')"
              />
              <label for="name_patient">Nome</label>
            </div>
        </div>

        <div class="col-md-3">
          <div class="form-floating">
            <input
                id="telphone_patient"
                type="text"
                class="form-control"
                placeholder="Telefone"
                @keyup="validateTelphone($event,'telphone_patient')"
            />
            <label for="telphone_patient">Telefone</label>
          </div>
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
import Panel from "primevue/panel"
import SplitButton from "primevue/splitbutton";
import {allUpper, onlyNumbers, validCpf, validTelphone} from "@/helpers/Helpers";
export default {
  components:{
    Panel,
    SplitButton
  },
  props:{
    setResultSearch: Function,
  },
  data(){
    return {
      patient: {
        id: '',
        cpf: '',
        name: '',
        telphone: ''
      },
      itemsOptions:[
        {
          label: "Pesquisar",
          command: () => {
            let response = [
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

              {
                id: '4',
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
                id: '5',
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
            ];
            setTimeout(() => {
              this.setResultSearch(response,true);
            },3000);
          }
        },
        {
          label: "Cadastrar",
          command: () => {
            this.$router.push({name:'patientNew'}).catch(() => {});
          }
        },
        {
          label: "Agendar",
          command: () => {

          }
        }
      ]
    }
  },
  methods:{
    patientCod(event){
      if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
        this.patient.id = "";
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CAMPO PERMITE SOMENTE NUMEROS',
          life:1500
        });
      }
    },
    upWord(nameInput){
      switch (nameInput){
        case 'name_patient':
          this.patient.name = allUpper(this.patient.name);
          break;
      }
    },
    validateTelphone(event,nameInput){
      if(!validTelphone(event.keyCode) && validTelphone(event.keyCode) !== undefined){
        if(nameInput === 'telphone_patient'){
          this.patient.telphone = "";

          this.$toast.add({
            severity:'warn',
            summary:'INFORMAÇÃO DO SISTEMA',
            detail:'CARACTERE NÃO PERMITIDO',
            life:1500
          });
        }
      }
    },
    validateCpf(event){
      if(!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined){
        this.patient.cpf = "";

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