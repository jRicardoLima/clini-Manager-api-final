<template>
  <div>
    <div class="row">
      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="cod_employee"
            type="text"
            class="form-control"
            placeholder="Código"
            v-model="employee.id"
          />
          <label for="cod_employee">Código</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="name_employee"
            type="text"
            class="form-control"
            placeholder="Nome"
            @keyup="upWord('name_employee')"
            v-model="employee.name"
          />
          <label for="name_employee">Nome</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="cpf_employee"
            type="text"
            class="form-control"
            placeholder="CPF"
            v-model="employee.cpf"
            @keyup="validateCpf"
          />
          <label for="cpf_employee">CPF</label>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-2">
        <button
            id="search_employee"
            class="btn btn-success btn-sm"
            style="width: 115px"
            @click="search"
        >
          <i class="fas fa-search"></i> Pesquisar
        </button>
      </div>
    </div>

    <div v-if="isResult === true" class="row mt-2">
      <TableDataEmployeeComponent :resultSearch="resultSearch"/>
    </div>
  </div>
</template>

<script>
import TableDataEmployeeComponent from "@/components/EmployeeComponents/TableDataEmployeeComponent";
import {allUpper, validCpf} from "@/helpers/Helpers";

export default {
  components:{
    TableDataEmployeeComponent,
  },
  props:{
    data:[Object,Array]
  },
  computed:{
    isResult(){
      return this.resultSearch.length > 0 && true;

    }
  },
  data(){
    return {
      employee:{
        id: '',
        name: '',
        cpf: '',
      },
      resultSearch: []
    }
  },
  methods:{
    search(){
      setTimeout(() => {
        this.resultSearch = [
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
        ];
      },3000);
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
    },
    upWord(nameInput){
      switch (nameInput){
        case 'name_employee':
          this.employee.name = allUpper(this.employee.name);
          break;
      }
    },
  }
}
</script>

<style scoped>

</style>