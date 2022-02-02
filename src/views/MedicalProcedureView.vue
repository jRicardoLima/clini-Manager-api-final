<template>
  <div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'medicalProc'">
      <MenuMedicalProceduresComponent :setResultSearch="setResultSearch"/>
      <div v-if="renderTable === true" class="mt-3">
        <TableDataMedicalProcedureComponent :resultSearch="resultSearch"/>
      </div>
    </div>
    <div v-if="currentRouteName === 'medicalProcNew'">
      <ToManageMedicalProcedureComponent/>
    </div>

    <div v-if="currentRouteName === 'medicalProcEdit'">
      <ToManageMedicalProcedureComponent :storeMedicalProcedure="resultSearch"/>
    </div>

    <div v-if="currentRouteName === 'priceMedicalProcedure'">
      <DefinePriceMedicalProceduresComponent/>
    </div>
  </div>
</template>

<script>
import MenuMedicalProceduresComponent from "@/components/medicalProceduresComponents/MenuMedicalProceduresComponent";
import TableDataMedicalProcedureComponent from "@/components/medicalProceduresComponents/TableDataMedicalProcedureComponent";
import ToManageMedicalProcedureComponent from "@/components/medicalProceduresComponents/ToManageMedicalProcedureComponent";
import DefinePriceMedicalProceduresComponent from "@/components/medicalProceduresComponents/DefinePriceMedicalProceduresComponent";

export default {
  components:{
    DefinePriceMedicalProceduresComponent,
    ToManageMedicalProcedureComponent,
    TableDataMedicalProcedureComponent,
    MenuMedicalProceduresComponent
  },
  data(){
    return{
      resultSearch: null,
      search: false,
    }
  },
  computed:{
    currentRouteName(){
      return this.$route.name;
    },
    renderTable(){
      return this.resultSearch !== null && this.search === true;
    }
  },
  methods:{
    setResultSearch(results, search) {
      if((results !== null || results !== []) && search){
        this.resultSearch = results;
        this.search = true;
      }
    }
  }
}
</script>

<style scoped>

</style>