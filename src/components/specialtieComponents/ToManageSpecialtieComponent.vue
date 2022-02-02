<template>
  <div class="card p-mt-3">
    <TabView :scrollable="true">
      <TabPanel header="Geral">
        <div class="row">
          <div class="col-md-6">
            <div class="form-floating">
              <input
                  id="specialtie_name"
                  :class="(specialtie.name === '') ? 'form-control is-invalid' : 'form-control'"
                  placeholder="Nome Especialidade"
                  v-model="specialtie.name"
                  @keyup="upWord('specialtie_name')"

              />
              <label for="specialtie_name" >Nome Especialidade</label>
            </div>

          </div>
          <div class="col-md-6">
           <div class="form-floating">
             <input
                 id="specialtie_cbo"
                 class="form-control"
                 placeholder="CBO"
                 v-model="specialtie.cbo"
                 @keyup="upWord('specialtie_cbo')"
             />
             <label for="specialtie_cbo">CBO</label>
           </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Vincular Profissionais">
        <div class="row">
          <div class="col-md-12">
            <MultiSelect
              v-model="specialtie.healfProfissionals"
              :options="healfProf"
              optionLabel="name"
              placeholder="Selecione os profissionais"
            />
          </div>
        </div>
      </TabPanel>
      <div class="row mt-2">
        <div class="col-md-2">
          <button
            id="btn_save_specialtie"
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
import MultiSelect from "primevue/multiselect";
import {allUpper} from "@/helpers/Helpers";

export default {
  components:{
    TabView,
    TabPanel,
    MultiSelect
  },
  beforeMount() {
    this.editSpecialtie();
    window.addEventListener('beforeunload',this.preventRefresh);
  },
  beforeDestroy() {
    window.removeEventListener("beforeunload",this.preventRefresh);
  },
  props:{
    storeSpecialtie: []
  },
  data(){
    return{
      specialtie:{
        name: '',
        cbo: '',
        healfProfissionals: []
      },
      specialtieEdit: null,
      healfProf:[
        {id:1,name:'TESTE_1'},
        {id:2,name:'TESTE_2'},
        {id:3,name:'TESTE_3'},
        {id:4,name:'TESTE_4'},
        {id:5,name:'TESTE_5'},
        {id:6,name:'TESTE_6'},
        {id:7,name:'TESTE_7'},
        {id:8,name:'TESTE_8'},
        {id:9,name:'TESTE_9'},
        {id:10,name:'TESTE_10'},
        {id:11,name:'TESTE_11'},
        {id:12,name:'TESTE_12'},
        {id:13,name:'TESTE_13'},
        {id:14,name:'TESTE_14'},
        {id:15,name:'TESTE_15'},
        {id:16,name:'TESTE_16'},
        {id:17,name:'TESTE_17'},
        {id:18,name:'TESTE_18'},
        {id:19,name:'TESTE_19'},
        {id:20,name:'TESTE_20'},
      ]
    }
  },
  computed:{
    currentRouteName(){
      return this.$route.name;
    },
  },
  methods:{
    upWord(nameInput){
      switch (nameInput){
        case 'specialtie_name':
          this.specialtie.name = allUpper(this.specialtie.name);
        break;
        case 'specialtie_cbo':
          this.specialtie.cbo = allUpper(this.specialtie.cbo)
      }
    },
    editSpecialtie(){
      if(this.$route.name === 'specialtie_edit'){
        let id = this.$route.params.id;
        this.specialtieEdit = this.storeSpecialtie.find(element => element.id === id);

        if(this.specialtieEdit.healthProfessional !== null && this.specialtieEdit.healthProfessional !== []){
          for(let speciatieId of this.specialtieEdit.healthProfessional){
            this.specialtie.healfProfissionals.push(speciatieId.id);
          }
        }
        if(this.specialtieEdit.name !== null && this.specialtieEdit.name !== ''){
          this.specialtie.name = this.specialtieEdit.name;
        }
        if(this.specialtieEdit.cbo !== null && this.specialtieEdit.cbo !== ''){
          this.specialtie.cbo = this.specialtieEdit.CBO;
        }

      }
    },
    validateInput(){
      if(this.specialtie.name === ''){
        return 'is-invalid'
      } else {
        return 'is-valid'
      }
    },
    preventRefresh(event){
      if(this.$route.name === 'specialtie_edit'){
        event.preventDefault();
        event.returnValue = "";
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