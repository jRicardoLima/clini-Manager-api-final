<template>
  <div class="card mt-3">
    <TabView>
      <TabPanel header="Geral">
        <div class="row">
          <div class="col-md-12">
            <div class="form-floating">
              <input
                id="type_health_insurance_name"
                type="text"
                class="form-control"
                placeholder="Nome"
                v-model="typeHealthInsurance.name"
                @keyup="upWord('type_health_insurance_name')"
              />
              <label for="type_health_insurance_name">Nome</label>
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel header="Vincular Convenios">

      </TabPanel>
      <div class="row mt-2">
        <div class="col-md-2">
          <button
              id="btn_save_type_health_insurance"
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

export default {
  components:{
    TabPanel,
    TabView
  },
  beforeMount() {
    this.editTypeHealthInsurance();
  },
  props:{
    storeTypeHealthInsurance: Array
  },
  data(){
    return {
      typeHealthInsurance: {
        name: ''
      },
      typeHealthInsuranceEdit: null,
    }
  },
  methods: {
    upWord(nameInput){
      switch (nameInput){
        case 'type_health_insurance_name':
          this.typeHealthInsurance.name = allUpper(this.typeHealthInsurance.name);
        break
      }
    },
    editTypeHealthInsurance(){
      if(this.$route.name === 'typeHealthInsuranceEdit'){
        let id = this.$route.params.id;

        this.typeHealthInsuranceEdit = this.storeTypeHealthInsurance.find(element => element.id === id);

        if(this.typeHealthInsuranceEdit.name !== null && this.typeHealthInsuranceEdit.name !== ""){
          this.typeHealthInsurance.name = this.typeHealthInsuranceEdit.name;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>