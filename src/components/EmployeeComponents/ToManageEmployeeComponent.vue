<template>
  <div class="card mt-3">
    <TabView>
      <TabPanel header="Geral">
        <div class="row">
          <div class="col-md-2">
            <div class="form-check">
              <input
                  id="health_professional_employee"
                  class="form-check-input"
                  type="checkbox"
                  placeholder="Profissional Saúde"
                  v-model="employee.health_professional"
                  @click="checkHealthProfessional"
              />
              <label class="form-check-label" for="health_professional_employee">Profissional Saúde</label>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="form-floating">
              <input
                id="name_employee"
                class="form-control"
                type="text"
                placeholder="Nome"
                v-model="employee.name"
              />
              <label for="name_employee">Nome</label>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-floating">
              <input
                id="cpf_employee"
                class="form-control"
                type="text"
                placeholder="CPF"
                v-model="employee.cpf"
                @keyup="validateCpf"
              />
              <label for="cpf_employee">CPF</label>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-floating">
              <select class="form-select" style="padding-top: 15px; padding-bottom: 15px">
                <option value="">SELECIONE A FUNÇÃO</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-md-4">
            <div class="form-floating">
              <Money
                  id="salary_employee"
                  v-bind="money"
                  class="form-control"
                  style="padding-top: 15px; padding-bottom: 15px"
                  v-model="employee.salary"
              ></Money>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-floating">
              <input
                id="professional_register_employee"
                class="form-control"
                type="text"
                placeholder="Registro Profissional"
                v-model="employee.professional_register"
                :readonly="!employee.health_professional"
              />
              <label for="professional_register_employee">Registro Profissional</label>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-floating">
              <input
                  id="email_employee"
                  class="form-control"
                  type="email"
                  placeholder="E-Mail"
                  v-model="employee.email"
              />
              <label for="email_employee">E-Mail</label>
            </div>
          </div>

        </div>
      </TabPanel>

      <TabPanel header="Endereço">
        <div class="row">
          <div class="col-md-3">
            <div class="form-floating">
              <input
                id="city_employee"
                class="form-control"
                type="text"
                placeholder="Cidade"
                v-model="employee.address.city"
              />
              <label for="city_employee">Cidade</label>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-floating">
              <input
                id="zipcode_employee"
                class="form-control"
                type="text"
                placeholder="CEP"
                v-model="employee.address.zipcode"
                @keyup="validateZipCode"
              />
              <label for="zipcode_employee">CEP</label>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-floating">
              <input
                id="street_employee"
                class="form-control"
                type="text"
                placeholder="Rua"
                v-model="employee.address.street"
              />
              <label for="street_employee">Rua</label>
            </div>
          </div>

          <div class="col-md-3">
            <div class="form-floating">
              <input
                id="neighborhood_employee"
                class="form-control"
                type="text"
                placeholder="Bairro"
                v-model="employee.address.neighborhood"
              />
              <label for="neighborhood_employee">Bairro</label>
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-md-3">
            <select class="form-select"   style="padding-top: 15px; padding-bottom: 15px">
              <option value="">SELECIONE O ESTADO</option>
            </select>
          </div>

          <div class="col-md-3">
            <div class="form-floating">
              <input
                  id="telphone_one_employee"
                  class="form-control"
                  type="text"
                  placeholder="Telefone 1"
                  v-model="employee.address.telphone_one"
                  @keyup="validateTelphone($event,'telphone_one_employee')"
              />
              <label for="telphone_one_employee">Telefone 1</label>
            </div>
          </div>

          <div class="col-md-6">
            <div class="form-floating">
              <input
                id="telphone_two_employee"
                class="form-control"
                type="text"
                placeholder="Telefone 2"
                v-model="employee.address.telphone_two"
                @keyup="validateTelphone($event,'telphone_two_employee')"
              />
              <label for="telphone_two_employee">Telefone 2</label>
            </div>
          </div>


        </div>
      </TabPanel>
      <div class="row mt-2">
        <div class="col-md-2">
          <button
              id="btn_save_employee"
              class="btn btn-success btn-sm"
              style="width: 250px"
          >
            <i class="fas fa-check"></i> Salvar
          </button>
        </div>
      </div>
    </TabView>
  </div>
</template>

<script>
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import {validCpf, validZipCode,validTelphone} from "@/helpers/Helpers";
import {Money} from "v-money"
export default {
  components:{
    TabPanel,
    TabView,
    Money
  },
  beforeMount() {
    this.editEmployee();
  },
  props:{
    storeEmployeeEdit: []
  },
  data(){
    return {
      employeeEdit: null,
      employee:{
        name: '',
        cpf: '',
        occupation: '',
        salary: 0.00,
        professional_register: '',
        email: '',
        health_professional: null,
        address:{
          city: '',
          zipcode: '',
          street: '',
          neighborhood: '',
          federate_unit: '',
          telphone_one: '',
          telphone_two: '',
        }
      },
      money:{
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      },
    }
  },
  methods:{
    checkHealthProfessional(){
      if(this.employee.health_professional){
        this.employee.health_professional = false;
        this.employee.professional_register = "";
      } else {
        this.employee.health_professional = true;
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
    },
    validateZipCode(event) {
      if(!validZipCode(event.keyCode) && validZipCode(event.keyCode) !== undefined){
        this.employee.address.zipcode = "";
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    validateTelphone(event, nameInput) {
      if(!validTelphone(event.keyCode) && validTelphone(event.keyCode) !== undefined){
        if(nameInput === 'telphone_one_employee'){
          this.employee.address.telphone_one = "";
        } else {
          this.employee.address.telphone_two = "";
        }
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    editEmployee(){
      if(this.$route.name === 'employeeEdit'){

        let id = this.$route.params.id;

        this.employeeEdit = this.storeEmployeeEdit.find(element => element.id === id);

        if(this.employeeEdit.name !== null && this.employeeEdit.name !== ""){
          this.employee.name = this.employeeEdit.name;
        }
        if(this.employeeEdit.cpf !== null && this.employeeEdit.cpf !== ""){
          this.employee.cpf = this.employeeEdit.cpf;
        }
        if(this.employeeEdit.occupation !== null  && this.employeeEdit.occupation !== ""){
          this.employee.occupation = this.employeeEdit.occupation;
        }
        if(this.employeeEdit.salary !== null && this.employeeEdit.salary !== ""){
          this.employee.salary = this.employeeEdit.salary;
        }
        if(this.employeeEdit.professional_register !== null && this.employeeEdit.professional_register !== ""){
          this.employee.professional_register = this.employeeEdit.professional_register;
        }
        if(this.employeeEdit.email !== null && this.employeeEdit.email !== ""){
          this.employee.email = this.employeeEdit.email;
        }
        if(this.employeeEdit.health_professional !== null && this.employeeEdit.health_professional !== ""){
          this.employee.health_professional = this.employeeEdit.health_professional;
        }
        if(this.employeeEdit.address.city !== null && this.employeeEdit.address.city !== ""){
          this.employee.address.city = this.employeeEdit.address.city;
        }
        if(this.employeeEdit.address.zipcode !== null && this.employeeEdit.address.zipcode !== ""){
          this.employee.address.zipcode = this.employeeEdit.address.zipcode;
        }
        if(this.employeeEdit.address.street !== null && this.employeeEdit.address.street !== ""){
          this.employee.address.street = this.employeeEdit.address.street;
        }
        if(this.employeeEdit.address.neighborhood !== null && this.employeeEdit.address.neighborhood !== ""){
          this.employee.address.neighborhood = this.employeeEdit.address.neighborhood;
        }
        if(this.employeeEdit.address.federate_unit !== null && this.employeeEdit.address.federate_unit !== ""){
          this.employee.address.federate_unit = this.employeeEdit.address.federate_unit;
        }
        if(this.employeeEdit.address.telphone_one !== null && this.employeeEdit.address.telphone_one !== ""){
          this.employee.address.telphone_one = this.employeeEdit.address.telphone_one;
        }
        if(this.employeeEdit.address.telphone_two !== null && this.employeeEdit.address.telphone_two !== ""){
          this.employee.address.telphone_two = this.employeeEdit.address.telphone_two;
        }

      }
    }
  }
}
</script>

<style scoped>

</style>