<template>
  <!-- Colocar um select para selecionar o tipo do plano de saúde-->
  <div class="card mt-3">
      <TabView>
        <TabPanel header="Geral">
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating">
                <input
                  id="name_health_insurance"
                  class="form-control"
                  placeholder="Nome"
                  v-model="healthInsurance.name"
                  @keyup="upWord('name_health_insurance')"
                />
                <label for="name_health_insurance">Nome</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating">
                <input
                  id="cnpj_health_insurance"
                  class="form-control"
                  placeholder="CNPJ"
                  @keyup="validateCnpj"
                  v-model="healthInsurance.cnpj"
                />
                <label for="cnpj_health_insurance">CNPJ</label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-floating">
                <input
                  id="register_ans"
                  class="form-control"
                  placeholder="Registro ANS"
                  v-model="healthInsurance.register_ans"
                />
                <label for="register_ans">Registro ANS</label>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Endereço/Contado">
          <div class="row">
            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="zipcode_health_insurance"
                  class="form-control"
                  placeholder="CEP"
                  @keyup="validateZipCode"
                  v-model="healthInsurance.zipcode"
                />
                <label for="zipcode_health_insurance">CEP</label>
              </div>
            </div>

            <div class="col-md-3">
              <select id="federate_unit_health_insurance" class="form-select"  v-model="healthInsurance.federate_unit" style="padding-top: 15px; padding-bottom: 15px">
                <option value="">SELECIONE O ESTADO</option>
                <option v-for="(item,index) in federativeItems" :key="index" :value="item.name">
                  {{item.name}}
                </option>
              </select>
            </div>
            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="city_health_insurance"
                  class="form-control"
                  placeholder="Cidade"
                  @keyup="upWord('city_health_insurance')"
                  v-model="healthInsurance.city"
                />
                <label for="city_health_insurance">Cidade</label>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <input
                    id="neighborhood_health_insurance"
                    class="form-control"
                    placeholder="Bairro"
                    @keyup="upWord('neighborhood_health_insurance')"
                    v-model="healthInsurance.neighborhood"
                />
                <label for="neighborhood_health_insurance">Bairro</label>
              </div>
            </div>
          </div>

          <div class="row mt-2">

            <div class="col-md-4">
              <div class="form-floating">
                <input
                  id="street_health_insurance"
                  class="form-control"
                  placeholder="Rua"
                  @keyup="upWord('street_health_insurance')"
                  v-model="healthInsurance.street"
                />
                <label for="street_health_insurance">Rua</label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-floating">
                <input
                  id="telphone_one_health_insurance"
                  class="form-control"
                  placeholder="Telefone 1"
                  @keyup="validateTelphone($event,'telphone_one_health_insurance')"
                  v-model="healthInsurance.telphone_one"
                />
                <label for="telphone_one_health_insurance">Telefone 1</label>
              </div>
            </div>

            <div class="col-md-4">
              <div class="form-floating">
                <input
                    id="telphone_two_health_insurance"
                    class="form-control"
                    placeholder="Telefone 2"
                    @keyup="validateTelphone($event,'telphone_two_health_insurance')"
                    v-model="healthInsurance.telphone_two"
                />
                <label for="telphone_two_health_insurance">Telefone 2</label>
              </div>
            </div>

          </div>
        </TabPanel>
        <div class="row mt-2">
          <div class="col-md-2">
            <button
                id="btn_save_health_insurance"
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
import {allUpper, validCnpj, validTelphone, validZipCode} from "@/helpers/Helpers";
export default {
  components:{
    TabView,
    TabPanel,
  },
  beforeMount() {
    this.editHealthInsurence();
  },
  props:{
    storeHealthInsurance: []
  },
  data(){
    return{
      healthInsurance:{
        name: '',
        cnpj: '',
        register_ans: '',
        zipcode: '',
        federate_unit: '',
        city: '',
        neighborhood: '',
        street: '',
        telphone_one: '',
        telphone_two: ''

      },
      healthInsuranceEdit: null,
      federativeItems:[
        {name:'AC'},
        {name:'AL'},
        {name:'AP'},
        {name:'AM'},
        {name:'BA'},
        {name:'CE'},
        {name:'ES'},
        {name:'GO'},
        {name:'MA'},
        {name:'MT'},
        {name:'MS'},
        {name:'MG'},
        {name:'PA'},
        {name:'PB'},
        {name:'PR'},
        {name:'PE'},
        {name:'PI'},
        {name:'RJ'},
        {name:'RN'},
        {name:'RS'},
        {name:'RO'},
        {name:'RR'},
        {name:'SC'},
        {name:'SP'},
        {name:'SE'},
        {name:'TO'},
        {name:'DF'}
      ]
    }
  },
  methods:{
    upWord(nameInput){
      switch (nameInput){
        case 'name_health_insurance':
          this.healthInsurance.name = allUpper(this.healthInsurance.name);
          break;
        case 'register_ans':
          this.healthInsurance.register_ans = allUpper(this.healthInsurance.register_ans);
          break;
        case 'city_health_insurance':
          this.healthInsurance.city = allUpper(this.healthInsurance.city);
          break;
        case 'neighborhood_health_insurance':
          this.healthInsurance.neighborhood = allUpper(this.healthInsurance.neighborhood);
          break;
        case 'street_health_insurance':
          this.healthInsurance.street = allUpper(this.healthInsurance.street);
          break;
      }
    },
    validateCnpj(event){
      if(!validCnpj(event.keyCode) && validCnpj(event.keyCode) !== undefined){
        this.healthInsurance.cnpj = '';
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    validateTelphone(event,nameInput){
      if(!validTelphone(event.keyCode) && validTelphone(event.keyCode) !== undefined){
        if(nameInput === 'telphone_one_health_insurance'){
          this.healthInsurance.telphone_one = "";
        } else if(nameInput === 'telphone_two_health_insurance') {
          this.healthInsurance.telphone_two = ""
        }
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    validateZipCode(event){
      if(!validZipCode(event.keyCode) && validZipCode(event.keyCode) !== undefined){
        this.healthInsurance.zipcode = "";
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    editHealthInsurence(){
      if(this.$route.name === 'healthInsuranceEdit'){
        let id = this.$route.params.id;

        this.healthInsuranceEdit = this.storeHealthInsurance.find(element => element.id === id);

        if(this.healthInsuranceEdit.name !== null && this.healthInsuranceEdit.name !== ""){
          this.healthInsurance.name = this.healthInsuranceEdit.name;
        }
        if(this.healthInsuranceEdit.cnpj !== null && this.healthInsuranceEdit.cnpj !== ""){
          this.healthInsurance.cnpj = this.healthInsuranceEdit.cnpj;
        }
        if(this.healthInsuranceEdit.register_ans !== null && this.healthInsuranceEdit.register_ans !== ""){
          this.healthInsurance.register_ans = this.healthInsuranceEdit.register_ans;
        }
        if(this.healthInsuranceEdit.address.zipcode !== null && this.healthInsuranceEdit.address.zipcode !== ""){
          this.healthInsurance.zipcode = this.healthInsuranceEdit.address.zipcode;
        }
        if(this.healthInsuranceEdit.address.federate_unit !== null && this.healthInsuranceEdit.address.federate_unit !== ""){
          this.healthInsurance.federate_unit = this.healthInsuranceEdit.address.federate_unit;
        }
        if(this.healthInsuranceEdit.address.city !== null && this.healthInsuranceEdit.address.city !== ""){
          this.healthInsurance.city = this.healthInsuranceEdit.address.city;
        }
        if(this.healthInsuranceEdit.address.neighborhood !== null && this.healthInsuranceEdit.address.neighborhood !== ""){
          this.healthInsurance.neighborhood = this.healthInsuranceEdit.address.neighborhood;
        }
        if(this.healthInsuranceEdit.address.street !== null && this.healthInsuranceEdit.address.street !== ""){
          this.healthInsurance.street = this.healthInsuranceEdit.address.street;
        }
        if(this.healthInsuranceEdit.address.telphone_one !== null && this.healthInsuranceEdit.address.telphone_one !== ""){
          this.healthInsurance.telphone_one = this.healthInsuranceEdit.address.telphone_one;
        }
        if(this.healthInsuranceEdit.address.telphone_two !== null && this.healthInsuranceEdit.address.telphone_two !== ""){
          this.healthInsurance.telphone_two = this.healthInsuranceEdit.address.telphone_two;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>