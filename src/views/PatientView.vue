<template>
<div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'patient'">
      <MenuPatientComponent :setResultSearch="setResultSearch"/>
      <div v-if="renderTable === true" class="mt-2">
        <TableDataPatientComponent :resultSearch="resultSearch"/>
      </div>
    </div>

    <div v-if="currentRouteName === 'patientNew'">
      <ToManagePatientComponent/>
    </div>
</div>
</template>

<script>
import MenuPatientComponent from "@/components/PatientComponents/MenuPatientComponent";
import ToManagePatientComponent from "@/components/PatientComponents/ToManagePatientComponent";
import TableDataPatientComponent from "@/components/PatientComponents/TableDataPatientComponent";
export default {
  components: {TableDataPatientComponent, ToManagePatientComponent, MenuPatientComponent},
  data(){
    return{
      resultSearch: null,
      search: false
    }
  },
  computed:{
    currentRouteName(){
      return this.$route.name;
    },
    renderTable(){
      return this.resultSearch !== null && this.search
    }
  },
  methods:{
    setResultSearch(results,search){
      if((results !== null || results !== []) && search){
        this.resultSearch = results;
        this.search = search;
      }
    }
  }
}
</script>

<style scoped>

</style>