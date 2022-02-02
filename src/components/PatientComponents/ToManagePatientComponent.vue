<template>
  <div class="card mt-3">
      <TabView :scrollable="true">
        <TabPanel header="Geral">
          <div class="row">
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
                  id="rg_patient"
                  type="text"
                  class="form-control"
                  v-model="patient.rg"
                  placeholder="RG"
                />
                <label for="rg_patient">RG</label>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <InputMask
                  id="birth_date_patient"
                  mask="99/99/9999"
                  placeholder="Data Nascimento"
                  v-model="patient.birthDate"
                  class="form-control"
                />
                <label for="birth_date_patient">Data Nascimento</label>
              </div>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-md-1">
              <button class="btn btn-info" style="width: 80px" @click="openCamera">
                <i class="fas fa-camera"></i>
              </button>
            </div>
            <div class="col-md-1">
              <button class="btn btn-info" style="width: 80px">
                <i class="fas fa-fingerprint"></i>
              </button>
            </div>
          </div>
          <div class="d-flex justify-content-start mt-2">
            <div class="row">
              <div class="col-md-12">
                <template v-if="patient.photo !== ''">
                  <img alt="Foto Paciente" :src="patient.photo" class="photo-patient"/>
                </template>
              </div>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-md-12">
              <template v-if="openWebcam === true">
                <WebCam
                    :displayModal="true"
                    :isOpen="true"
                    :closeModalWebCam="closeModalWebCam"
                    :setPhoto="setPhoto"
                />
              </template>
            </div>
          </div>
        </TabPanel>

        <TabPanel header="Endereço">
          <div class="row">
            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="city_patient"
                  type="text"
                  class="form-control"
                  placeholder="Cidade"
                  v-model="patient.address.city"
                  @keyup="upWord('city_patient')"
                />
                <label for="city_patient">Cidade</label>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="zipcode_patient"
                  type="text"
                  class="form-control"
                  placeholder="CEP"
                  v-model="patient.address.zipecode"
                  @keyup="validateZipCode"
                />
                <label for="zipcode_patient">CEP</label>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="street_patient"
                  type="text"
                  class="form-control"
                  placeholder="Rua"
                  v-model="patient.address.street"
                  @keyup="upWord('street_patient')"
                />
                <label for="street_patient">Rua</label>
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="neighborhood_patient"
                  type="text"
                  class="form-control"
                  placeholder="Bairro"
                  v-model="patient.address.neighborhood"
                  @keyup="upWord('neighborhood_patient')"
                />
                <label for="neighborhood_patient">Bairro</label>
              </div>
            </div>
          </div>

          <div class="row mt-2">
            <div class="col-md-3">
              <select class="form-select"
                      style="padding-top:
                      15px; padding-bottom: 15px"
                      v-model="patient.address.federate_unit"
              >
                <option value="">SELECIONE O ESTADO</option>
              </select>
            </div>

            <div class="col-md-3">
               <div class="p-inputgroup">
               <span class="p-inputgroup-addon">
                 <Checkbox
                     :binary="true"
                     v-model="patient.address.has_main_telphone_one"
                 />
               </span>
                 <InputText
                     id="telphone_one_patient"
                     class="p-inputtext-lg form-control"
                     placeholder="Telefone 1"
                     v-model="patient.address.telphone_one"
                     @keyup="validateTelphone($event,'telphone_one_patient')"
                 />
               </div>
            </div>

            <div class="col-md-3">
              <div class="p-inputgroup">
               <span class="p-inputgroup-addon">
                 <Checkbox
                     :binary="true"
                     v-model="patient.address.has_main_telphone_two"
                 />
               </span>
                <InputText
                    id="telphone_two_patient"
                    class="p-inputtext-lg form-control"
                    placeholder="Telefone 2"
                    v-model="patient.address.telphone_two"
                    @keyup="validateTelphone"
                />
              </div>
            </div>

            <div class="col-md-3">
              <div class="form-floating">
                <input
                  id="email_patient"
                  type="text"
                  class="form-control"
                  placeholder="E-Mail"
                  v-model="patient.address.email"
                />
                <label for="email_patient">E-Mail</label>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Informações Saúde">
         <div class="row">
           <div class="col-md-3">
             <InputSwitch
              inputId="problem_health_patient"
              ariaLabelledBy="problem_health_patient"
              v-model="has_comorbidities"
             />
             <label class="text-switch" v-on:click="clickLabelComorbidy">Possui Comorbidades?</label>
           </div>

           <div class="col-md-3 useDrugs">
             <InputSwitch
              inputId="problem_health_patient_use_drug"
              ariaLabelledBy="problem_health_patient_use_drug"
              v-model="has_use_drugs"
             />
             <label class="text-switch" v-on:click="clickLabelUseDrugs">Uso de medicamentos</label>
           </div>
         </div>
          <div class="row">
            <div class="col-md-3">
              <div class="form-floating">
                <input
                    id="name_comorbidy_patient"
                    type="text"
                    class="form-control"
                    placeholder="Comorbidade"
                    :readonly="readyOnlyShowComorbidy === false"
                    v-model="comorbidy.name"
                    @keyup="upWord('name_comorbidy_patient')"
                />
                <label for="name_comorbidy_patient">Comorbidade</label>
                <button
                    class="btn btn-info btn-secondary btn-sm buttonAdd"
                    @click="addComorbities"
                >Adicionar</button>
                <button
                    class="btn btn-danger btn-secondary btn-sm buttonRemove"
                    @click="removeComorbidy"
                >Remover</button>
              </div>
            </div>

            <div class="col-md-3 useDrugs">
              <div class="form-floating">
                <input
                    id="name_drug_patient"
                    type="text"
                    class="form-control"
                    placeholder="Medicamento"
                    :readonly="readyOnlyShowUseDrugs === false"
                    v-model="drug.name"
                    @keyup="upWord('name_drug_patient')"
                />
                <label for="name_drug_patient">Medicamento</label>

                <button
                    class="btn btn-info btn-secondary btn-sm buttonAdd"
                    @click="addUseDrugs"
                >Adicionar</button>
                <button
                  class="btn btn-danger btn-secondary btn-sm buttonRemove"
                  @click="removeUseDrug"
                >Remover</button>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mt-2 listComorbidies" v-show="readyOnlyShowComorbidy === true">
              <span><strong>Comorbidades</strong></span>
              <Listbox
                  v-model="selectedComorbidy"
                  :options="listComorbities"
                  optionLabel="name"
                  listStyle="max-height:80px"
              />
            </div>
            <div class="col-md-3 mt-2 listUseDrugs" v-show="readyOnlyShowUseDrugs === true">
              <span><strong>Medicamentos</strong></span>
                <Listbox
                    v-model="selectedUseDrugs"
                    :options="listUseDrugs"
                    optionLabel="name"
                    listStyle="max-height:80px"
                />
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Outras Informações">
          <div class="row">
            <div class="col-md-12">
              <Editor
                  id="information_patient"
                  v-model="patient.information"
                  editorStyle="height: 150px"
              />
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
import InputMask from "primevue/inputmask";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import InputSwitch from "primevue/inputswitch";
import Listbox from "primevue/listbox";
import Editor from "primevue/editor";
import {allUpper, validCpf, validTelphone, validZipCode} from "@/helpers/Helpers";
import WebCam from "@/components/WebCam";

export default {
  components: {
    WebCam,
    TabPanel,
    TabView,
    InputMask,
    InputText,
    Checkbox,
    InputSwitch,
    Listbox,
    Editor
  },
  data() {
    return {
      patient: {
        name: '',
        cpf: '',
        rg: '',
        birthDate: '',
        information: '',
        photo: '',
        address: {
          city: '',
          zipecode: '',
          street: '',
          neighborhood: '',
          federate_unit: '',
          telphone_one: '',
          has_main_telphone_one: false,
          telphone_two: '',
          has_main_telphone_two: false,
          email: '',


        },
        health_info: {
          comorbidities: [],
        },
        useDrugs: {
          drugs: [],
        }
      },
      selectedComorbidy: null,
      selectedUseDrugs: null,
      has_comorbidities: false,
      has_use_drugs: false,
      openWebcam: false,
      comorbidy: {
        name: ''
      },
      drug: {
        name: ''
      }
    }
  },
  watch:{
      has_comorbidities(){
        if(this.has_comorbidities === false){
          this.patient.health_info.comorbidities = [];
        }
      },
    has_use_drugs(){
        if(this.has_use_drugs === false){
          this.patient.useDrugs.drugs = [];
        }
    }
  },
  computed: {
    readyOnlyShowComorbidy() {
      return this.has_comorbidities === true;
    },
    readyOnlyShowUseDrugs(){
      return this.has_use_drugs === true;
    },
    listComorbities() {
      return this.patient.health_info.comorbidities;
    },
    listUseDrugs(){
      return this.patient.useDrugs.drugs;
    }
  },
  methods: {
    addComorbities() {
      if(this.comorbidy.name !== ""){
        this.patient.health_info.comorbidities.push(this.comorbidy);
        this.comorbidy = {
          name: ''
        };
      }
    },
    addUseDrugs(){
      if(this.drug.name !== ""){
        this.patient.useDrugs.drugs.push(this.drug);
        this.drug = {
          name: ''
        }
      }
    },
    removeUseDrug(){
      if(this.patient.useDrugs.drugs.length > 0){
        this.patient.useDrugs.drugs = this.patient.useDrugs.drugs.filter(element => element.name !== this.selectedUseDrugs.name);
      }
    },
    removeComorbidy(){
      if(this.patient.health_info.comorbidities.length > 0){
        this.patient.health_info.comorbidities = this.patient.health_info.comorbidities.filter(element => element.name !== this.selectedComorbidy.name);
      }

    },
    clickLabelComorbidy() {
      this.has_comorbidities = this.has_comorbidities !== true;
    },
    clickLabelUseDrugs(){
      this.has_use_drugs = this.has_use_drugs !== true;
    },
    validateCpf(event) {
      if (!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined) {
        this.patient.cpf = "";
        this.$toast.add({
          severity: 'warn',
          summary: 'INFORMAÇÃO DO SISTEMA',
          detail: 'CARACTERE NÃO PERMITIDO',
          life: 1500
        });
      }
    },

    validateZipCode(event) {
      if (!validZipCode(event.keyCode) && validZipCode(event.keyCode) !== undefined) {
        this.patient.address.zipecode = "";
        this.$toast.add({
          severity: 'warn',
          summary: 'INFORMAÇÃO DO SISTEMA',
          detail: 'CARACTERE NÃO PERMITIDO',
          life: 1500
        });
      }
    },
    validateTelphone(event, nameInput) {
      if(!validTelphone(event.keyCode) && validTelphone(event.keyCode) !== undefined){
        if(nameInput === 'telphone_one_patient'){
          this.patient.address.telphone_one = "";
        } else {
          this.patient.address.telphone_two = "";
        }
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
        case 'name_patient':
          this.patient.name = allUpper(this.patient.name);
          break;
        case 'city_patient':
          this.patient.address.city = allUpper(this.patient.address.city);
          break;
        case 'street_patient':
          this.patient.address.street = allUpper(this.patient.address.street);
          break;
        case 'neighborhood_patient':
          this.patient.address.neighborhood = allUpper(this.patient.address.neighborhood);
          break;
        case 'name_comorbidy_patient':
          this.comorbidy.name= allUpper(this.comorbidy.name);
          break;
        case 'name_drug_patient':
          this.drug.name = allUpper(this.drug.name);
          break;
      }
    },
    openCamera(){
      this.openWebcam = true;
    },
    closeModalWebCam(){
      this.openWebcam = false;
    },
    setPhoto(photo){
      if(photo !== "" && photo !== null && photo !== undefined){
        this.patient.photo = photo;
      }
    },
  }
}
</script>

<style scoped>
  .p-inputswitch{
    margin-left: -280px !important;
  }
  .text-switch{
    position: absolute;
    top: 64px;
    margin-left: 5px;
    cursor: pointer;
  }
  .buttonAdd{
    position: absolute;
    top: 15px;
    left: 310px;
  }
  .buttonRemove{
    position: absolute;
    top: 15px;
    left: 400px;
  }

  .useDrugs{
    margin-left: 230px
  }
  .listComorbidies{
    margin-right: -330px;
  }
  .listUseDrugs{
    position: relative;
    top: 10px;
    left:  560px;
  }
  .photo-patient{
    width: 120px;
    border-radius: 40px;

  }

  @media (min-width: 375px) and (max-width: 414px) {
    .p-inputswitch{
      margin-left: -280px !important;
    }
  }
  
  @media (min-width: 412px) and (max-width: 412px) {
    .p-inputswitch{
      margin-left: -310px !important;
    }
  }
</style>