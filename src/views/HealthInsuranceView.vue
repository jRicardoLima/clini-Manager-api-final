<template>
  <div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'healthInsurance'">
      <MenuHealthInsuranceComponent
          :setResultSearch="setResultSearch"
          :setShowHealthInsurance="setShowHealthInsurance"
      />
      <div v-if="renderTable === true" class="mt-3">
        <TableDataHealthInsuranceComponent
            :resultSearch="resultSearch"
            :showTypeHealthInsurance="showTypeHealthInsurance"
        />
      </div>
    </div>

    <div v-if="currentRouteName === 'healthInsuranceNew'">
      <ToManageHealthInsuranceComponent/>
    </div>

    <div v-if="currentRouteName === 'healthInsuranceEdit'">
      <ToManageHealthInsuranceComponent :storeHealthInsurance="resultSearch"/>
    </div>

    <div v-if="currentRouteName === 'typeHealthInsuranceNew'">
      <ToManageTypesHealthInsurance/>
    </div>

    <div v-if="currentRouteName === 'typeHealthInsuranceEdit'">
      <ToManageTypesHealthInsurance :storeTypeHealthInsurance="resultSearch"/>
    </div>
  </div>
</template>

<script>
import MenuHealthInsuranceComponent from "@/components/healthInsuranceComponents/MenuHealthInsuranceComponent";
import TableDataHealthInsuranceComponent from "@/components/healthInsuranceComponents/TableDataHealthInsuranceComponent";
import ToManageHealthInsuranceComponent from "@/components/healthInsuranceComponents/ToManageHealthInsuranceComponent";
import ToManageTypesHealthInsurance from "@/components/healthInsuranceComponents/ToManageTypesHealthInsurance";
export default {
  components: {
    ToManageTypesHealthInsurance,
    ToManageHealthInsuranceComponent,
    TableDataHealthInsuranceComponent,
    MenuHealthInsuranceComponent
  },
  data(){
    return{
      resultSearch: null,
      search: false,
      showTypeHealthInsurance: false,
    }
  },
  computed:{
    currentRouteName(){
      return this.$route.name
    },
    renderTable(){
      if(this.showTypeHealthInsurance === true){
        return this.resultSearch !== null;
      }
      return this.resultSearch !== null && this.search === true;

    },

  },
  methods:{
    setResultSearch(results,search){
      if((results !== null || results !== []) && search){
        this.resultSearch = results
        this.search = search
      }
    },
    setShowHealthInsurance(results,search){
      if((results !== null || results !== []) && search){
        this.showTypeHealthInsurance = search;
        this.resultSearch = results;
      }

    },
  }
}
</script>

<style scoped>

</style>