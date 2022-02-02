<template>
  <Panel>
    <template #header>
      <h4>Menu Funcionarios</h4>
    </template>

    <div class="row">
      <div class="col-md-3">
        <div class="form-floating">
          <input
            id="cod_employee"
            class="form-control"
            type="text"
            placeholder="Código"
            @keyup="employeeCod"
            v-model="employee.id"
          />
          <label for="cod_employee">Código</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating">
          <input
            id="name_employee"
            class="form-control"
            type="text"
            placeholder="Nome"
            @keyup="upWord('name_employee')"
            v-model="employee.name"
          />
          <label for="name_employee">Nome</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating">
          <input
              id="cpf_employee"
              class="form-control"
              type="text"
              placeholder="CPF"
              @keyup="validateCpf"
              v-model="employee.cpf"
          />
          <label for="cpf_employee">CPF</label>
        </div>
      </div>

      <div class="col-md-3">
        <select v-model="employee.occupation" class="form-select" style="padding-top: 15px; padding-bottom: 15px">
          <option value="">SELECIONE A FUNÇÃO</option>
          <option v-for="(occ,index) in occupations" :key="index" :value="occ.id">
            {{occ.name}}
          </option>
        </select>
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
import {allUpper, onlyNumbers, validCpf} from "@/helpers/Helpers";
export default {
  components:{
    Panel,
    SplitButton
  },
  props:{
    setResultSearch: Function
  },
  data(){
    return {
      employee: {
        id: '',
        name: '',
        cpf: '',
        occupation: ''
      },
      itemsOptions: [
        {
          label: "Pesquisar",
          command: () => {
            let response = [
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
              {
                id: 5,
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
                  id: 5,
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
                id: 6,
                name: 'FUNCIONARIO TESTE',
                cpf: '02541541515',
                professional_register: 'abc5415415',
                health_professional: true,
                occupation: {
                  id: 3,
                  name: 'Função 3',
                },
                salary: 5000.00,
                email: "jrolsd@xtx.com.br",
                address:{
                  id: 6,
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
                id: 7,
                name: 'FUNCIONARIO TESTE',
                cpf: '02541541515',
                professional_register: '',
                health_professional: false,
                occupation: {
                  id: 2,
                  name: 'Função 2',
                },
                salary: 3000.00,
                email: "jrolsd@xtx.com.br",
                address:{
                  id: 7,
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
                id: 8,
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
                  id: 8,
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
                id: 9,
                name: 'FUNCIONARIO TESTE',
                cpf: '02541541515',
                professional_register: 'abc5415415',
                health_professional: true,
                occupation: {
                  id: 4,
                  name: 'Função 4',
                },
                salary: 6500.00,
                email: "jrolsd@xtx.com.br",
                address:{
                  id: 9,
                  city: 'cidade Teste',
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
          }
        },
        {
          label: "Cadastrar",
          command: () => {
            this.$router.push({name:'employeeNew'}).catch(() => {});
          }
        }
      ],
      occupations: [
        {id: 1, name: "Função 1"},
        {id: 2, name: "Função 2"},
        {id: 3, name: "Função 3"},
        {id: 4, name: "Função 4"},
        {id: 5, name: "Função 5"},
      ]
    }
  },
  methods:{
    employeeCod(event){
      if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
        this.employee.id = "";
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
        case 'name_employee':
          this.employee.name = allUpper(this.employee.name);
          break;
      }
    },
    validateCpf(event){
      if(!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined){
        this.employee.cpf = "";
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