<template>
  <div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'employee'">
      <MenuEmployeeComponent :setResultSearch="setResultSearch"/>
      <div v-if="renderTable === true" class="mt-3">
        <TableDataEmployeeComponent :resultSearch="resultSearch"/>
      </div>
    </div>

    <div v-if="currentRouteName === 'employeeNew'">
      <ToManageEmployeeComponent/>
    </div>

    <div v-if="currentRouteName === 'employeeEdit'">
      <ToManageEmployeeComponent :storeEmployeeEdit="resultSearch"/>
    </div>
  </div>
</template>

<script>
import MenuEmployeeComponent from "@/components/EmployeeComponents/MenuEmployeeComponent";
import TableDataEmployeeComponent from "@/components/EmployeeComponents/TableDataEmployeeComponent";
import ToManageEmployeeComponent from "@/components/EmployeeComponents/ToManageEmployeeComponent";
export default {
  components: {ToManageEmployeeComponent, TableDataEmployeeComponent, MenuEmployeeComponent},
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
      return this.resultSearch !== null && this.search === true;
    }
 },
  methods:{
    setResultSearch(results,search){
      if((results !== null || results !== []) && search){
        this.resultSearch = results
        this.search = search
      }
    },
  }
}
</script>

<style scoped>

</style>