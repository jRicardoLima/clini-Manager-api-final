<template>
  <div class="card mt-3">
    <TabView>
      <TabPanel header="Geral">

        <div class="row">
          <div class="col-md-2">
            <div class="form-check">
              <input
                  id="global_price"
                  class="form-check-input"
                  type="checkbox"
                  v-model="definePrice.globalPrice"
              />
              <label class="form-check-label" for="global_price"><strong>Preço Geral</strong></label>
            </div>
          </div>
        </div>

        <div class="row mt-2">
          <div class="col">
            <div class="form-floating">
              <AutoComplete
                  id="search_specialtie"
                  placeholder="Pesquisar Especialidade"
                  input-class="form-control"
                  @selected="specialtieSelected"
              />
            </div>
          </div>

          <div class="col-md">
            <div class="form-floating">
              <AutoComplete
                id="search_medical_proc"
                placeholder="Pesquisar Procedimento"
                input-class="form-control"
                @selected="medicalProcedureSelected"
              />
            </div>
          </div>

          <div v-show="definePrice.globalPrice === false" class="col-md">
            <div class="form-floating">
              <AutoComplete
                id="search_health_professional"
                placeholder="Pesquisar Profissional Saúde"
                input-class="form-control"
                @selected="healthProfessionalSelected"
              />
            </div>
          </div>

          <div class="col-md">
            <div class="form-floating">
              <Money
                id="price_medical_proc"
                v-bind="money"
                class="form-control"
                style="padding-top: 15px; padding-bottom: 15px"
                v-model="definePrice.price"
              ></Money>
            </div>
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
import AutoComplete from "vuejs-auto-complete";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import {Money} from "v-money"
export default {
  components:{
    AutoComplete,
    TabView,
    TabPanel,
    Money
  },
  data(){
    return{
      definePrice:{
        specialtie: null,
        medicalProcedure: null,
        healthProfessional: null,
        price: 0.00,
        globalPrice: true,
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
    specialtieSelected(specialtie){
      this.definePrice.specialtie = specialtie.value;
    },
    medicalProcedureSelected(medicalProcedure){
      this.definePrice.medicalProcedure = medicalProcedure.value;
    },
    healthProfessionalSelected(healthProfessional){
      this.definePrice.healthProfessional = healthProfessional.value;
    },
  }
}
</script>

<style scoped>

</style>