<template>
  <Panel>
    <template #header>
      <h4>Menu Planos de Saúde</h4>
    </template>
    <div class="row">
      <div class="col-md-2">
        <div class="form-check">
          <input
              id="show_type_health_insurance"
              class="form-check-input"
              type="checkbox"
              v-model="typeHealthInsurance.show"
          />
          <label class="form-check-label" for="show_type_health_insurance">Exibir Tipos de Planos</label>
        </div>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-md-6">
        <div v-if="typeHealthInsurance.show === false">
          <div class="form-floating">
            <input
                id="cod_health_insurance"
                class="form-control"
                type="text"
                placeholder="Código"
                @keyup="healthInsuranceCod"
                v-model="healthInsurance.id"
            />
            <label for="cod_health_insurance">Código</label>
          </div>

        </div>
        <div v-else>
          <div class="form-floating">
            <input
                id="cod_type_health_insurance"
                class="form-control"
                type="text"
                placeholder="Código Tipo"
                @keyup="healthInsuranceCod"
                v-model="typeHealthInsurance.id"
            />
            <label for="cod_type_health_insurance">Código Tipo</label>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div v-if="typeHealthInsurance.show === false">
          <div class="form-floating">
            <input
                id="name_health_insurance"
                class="form-control"
                type="text"
                placeholder="Nome"
                @keyup="upWord('name_health_insurance')"
                v-model="healthInsurance.name"
            />
            <label for="name_health_insurance">Nome</label>
          </div>
        </div>
        <div v-else>
          <div class="form-floating">
            <input
                id="name_type_health_insurance"
                class="form-control"
                type="text"
                placeholder="Nome Tipo"
                @keyup="upWord('name_health_insurance')"
                v-model="typeHealthInsurance.name"
            />
            <label for="name_type_health_insurance">Nome Tipo</label>
          </div>
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
import Panel from "primevue/panel";
import SplitButton from "primevue/splitbutton";
import {allUpper, onlyNumbers} from "@/helpers/Helpers";

export default {
  components:{
    Panel,
    SplitButton
  },
  props:{
    setResultSearch: Function,
    setShowHealthInsurance: Function,
  },
  data(){
    return{
      healthInsurance:{
        id: '',
        name: ''
      },
      typeHealthInsurance:{
        id: '',
        name: '',
        show: false
      },
      itemsOptions:[
        {
          label: "Pesquisar",
          command: () => {
            if(!this.typeHealthInsurance.show){
              let response = [
                {
                  id:1,
                  name:'UNIMED',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 1,
                    city: "asdasdasdasd",
                    street: "asdasdasd",
                    neighborhood:"asdasdasd",
                    zipcode: "785415454",
                    federate_unit: "MT",
                    telphone_one: "32514-87445",
                    telphone_two:""
                  }
                },
                {
                  id:2,
                  name:'PLANO 2',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 2,
                    city: "asdasdasdasd",
                    street: "vfvrgwg",
                    neighborhood:"asasdfrrdasdasd",
                    cep: "7874587441",
                    federate_unit: "MT",
                    telphone_one: "32514-87445",
                    telphone_two:"9999-87474"
                  }
                },
                {
                  id:3,
                  name:'PLANO 3',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 3,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:4,
                  name:'PLANO 4',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 4,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdadeaavvtererea",
                    zipcode: "541458741",
                    federate_unit: "MT",
                    telphone_one: "33254789",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:5,
                  name:'PLANO 5',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 5,
                    city: "asdasdasdasd",
                    street: "asdasdhiohohiohiohio",
                    neighborhood:"asdasdefradsaseeer",
                    zipcode: "321654789544",
                    federate_unit: "MT",
                    telphone_one: "5415577885",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:6,
                  name:'PLANO 6',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 6,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:7,
                  name:'PLANO 7',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 7,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:8,
                  name:'PLANO 8',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 8,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:9,
                  name:'PLANO 9',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 9,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:10,
                  name:'PLANO 10',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 10,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:11,
                  name:'PLANO 11',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 11,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:12,
                  name:'PLANO 12',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 12,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:13,
                  name:'PLANO 13',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 13,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:14,
                  name:'PLANO 14',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 14,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:15,
                  name:'PLANO 15',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 15,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:16,
                  name:'PLANO 16',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 16,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:17,
                  name:'PLANO 17',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 17,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:18,
                  name:'PLANO 18',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 18,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    cep: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:19,
                  name:'PLANO 19',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 19,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },
                {
                  id:20,
                  name:'PLANO 20',
                  cnpj: "asdadeassdvsrads",
                  register_ans: "asdaedefasdefaf",
                  address:{
                    id: 20,
                    city: "asdasdasdasd",
                    street: "asdasdsdsfasefwefwdasd",
                    neighborhood:"asdasdefreer",
                    zipcode: "325252514",
                    federate_unit: "MT",
                    telphone_one: "",
                    telphone_two:"887788-78787"
                  }
                },

              ]
              setTimeout(() => {
                this.setResultSearch(response,true);
              },3000);
            } else {
              let response = [
                {
                  id: 1,
                  name: 'PARTICULAR'
                },
                {
                  id: 2,
                  name: 'SUS'
                },
                {
                  id: 3,
                  name: 'UNIMED'
                },
                {
                  id: 4,
                  name: 'MULTIVIDA ASSISTENCIAL'
                }
              ];
              setTimeout(() => {
                this.setShowHealthInsurance(response,true);
              },3000);
            }
          }
        },
        {
          label: "Cadastrar",
          command: () => {
              this.$router.push({name: 'healthInsuranceNew'}).catch(() => {});
          }
        },
        {
          label: "Tipos de Planos",
          command: () => {
            this.$router.push({name:'typeHealthInsuranceNew'}).catch(() => {});
          }
        }
      ]
    }
  },
  methods:{
    healthInsuranceCod(event){
      if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
        if(this.typeHealthInsurance === false){
          this.healthInsurance.id = "";
        } else {
          this.typeHealthInsurance.id = "";
        }
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
        case 'name_health_insurance':
          this.healthInsurance.name = allUpper(this.healthInsurance.name);
        break;
        case 'name_type_health_insurance':
          this.typeHealthInsurance.name = allUpper(this.typeHealthInsurance.name);
      }
    }
  }
}
</script>

<style scoped>

</style>