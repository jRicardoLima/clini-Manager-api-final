<template>
  <div class="card mt-3">
    <TabView>
      <TabPanel header="Geral">
        <div class="row">
          <div class="col-md-12">
            <div class="form-floating">
              <input
                id="medical_procedure_name"
                placeholder="Nome Procedimento"
                class="form-control"
                :readonly="medicalProcedure.padrao_tiss === true"
                v-model="medicalProcedure.termo"
                @keyup="upWord('medical_procedure_name')"
              />
              <label for="medical_procedure_name">Nome Procedimento</label>
            </div>
          </div>
        </div>
        <div class="row mt-2">

        </div>
      </TabPanel>
      <TabPanel header="Vincular Especialidade">
        <div class="row">
          <div class="col-md-12">
            <MultiSelect
                v-model="medicalProcedure.specialtiess"
                :options="specialties"
                optionLabel="name"
                placeholder="Selecione as Especialidades"
            />
          </div>
        </div>
      </TabPanel>
      <div class="row mt-2">
        <div class="col-md-2">
          <button
              id="btn_save_medical_procedure"
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
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import {allUpper} from "@/helpers/Helpers";
import MultiSelect from "primevue/multiselect";
export default {
  components:{
    TabPanel,
    TabView,
    MultiSelect
  },
  beforeMount() {
    this.editMedicalProcedure();
  },
  props:{
    storeMedicalProcedure: []
  },
  data(){
    return{
      medicalProcedure:{
        termo: '',
        price: 0.00,
        specialtiess: []
      },
      medicalProcedureEdit: null,
      specialties:[
        {id: 1, name: 'Especialidade 1'},
        {id: 2, name: 'Especialidade 2'},
        {id: 3, name: 'Especialidade 3'},
        {id: 4, name: 'Especialidade 4'},
        {id: 5, name: 'Especialidade 5'},
        {id: 6, name: 'Especialidade 6'},
        {id: 7, name: 'Especialidade 7'},
        {id: 8, name: 'Especialidade 8'},
        {id: 9, name: 'Especialidade 9'},
        {id: 10, name: 'Especialidade 10'},
        {id: 11, name: 'Especialidade 11'},
        {id: 12, name: 'Especialidade 12'},
        {id: 13, name: 'Especialidade 13'},
        {id: 14, name: 'Especialidade 14'},
        {id: 15, name: 'Especialidade 15'},
        {id: 16, name: 'Especialidade 16'},
        {id: 17, name: 'Especialidade 17'},
        {id: 18, name: 'Especialidade 18'},
        {id: 19, name: 'Especialidade 17'},
        {id: 20, name: 'Especialidade 17'},
        {id: 21, name: 'Especialidade 17'},
        {id: 22, name: 'Especialidade 17'},
        {id: 23, name: 'Especialidade 17'},
        {id: 24, name: 'Especialidade 17'},
        {id: 25, name: 'Especialidade 17'},
        {id: 26, name: 'Especialidade 17'},
        {id: 27, name: 'Especialidade 17'},
        {id: 28, name: 'Especialidade 17'},
        {id: 29, name: 'Especialidade 17'},
        {id: 30, name: 'Especialidade 17'},
        {id: 31, name: 'Especialidade 17'},
        {id: 32, name: 'Especialidade 17'},
        {id: 33, name: 'Especialidade 17'},
        {id: 34, name: 'Especialidade 17'},
        {id: 35, name: 'Especialidade 17'},
        {id: 36, name: 'Especialidade 17'},
        {id: 37, name: 'Especialidade 17'},
        {id: 38, name: 'Especialidade 17'},
        {id: 39, name: 'Especialidade 17'},
        {id: 40, name: 'Especialidade 17'},
        {id: 41, name: 'Especialidade 17'},
        {id: 42, name: 'Especialidade 17'},
        {id: 43, name: 'Especialidade 17'},
        {id: 44, name: 'Especialidade 17'},
      ]
    }
  },
  methods:{
    upWord(nameInput){
      switch (nameInput){
        case 'medical_procedure_name':
          this.medicalProcedure.name = allUpper(this.medicalProcedure.name);
          break;
      }
    },
    editMedicalProcedure(){
      if(this.$route.name === 'medicalProcEdit'){
          let id = this.$route.params.id;
          this.medicalProcedureEdit = this.storeMedicalProcedure.find(element => element.id === id);

          if(this.medicalProcedureEdit.termo !== null && this.medicalProcedureEdit.termo !== ""){
              this.medicalProcedure.termo = this.medicalProcedureEdit.termo;
              this.medicalProcedure.padrao_tiss = this.medicalProcedureEdit.padrao_tiss;
          }
      }
    }
  }
}
</script>

<style scoped>
.p-multiselect {
  width: 81rem;
}
@media screen and (max-width: 640px) {
  .p-multiselect {
    width: 100%;
  }
}
</style>