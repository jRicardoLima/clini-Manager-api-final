<template>
<div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'patient'">
      <MenuPatientComponent :setResultSearch="setResultSearch"/>
    </div>

    <div v-if="currentRouteName === 'patientNew'">
      <ToManagePatientComponent/>
    </div>
</div>
</template>

<script>
import MenuPatientComponent from "@/components/PatientComponents/MenuPatientComponent";
import ToManagePatientComponent from "@/components/PatientComponents/ToManagePatientComponent";
export default {
  components: {ToManagePatientComponent, MenuPatientComponent},
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