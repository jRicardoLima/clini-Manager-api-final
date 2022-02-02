<template>
  <div class="container-fluid mt-2">
   <div v-if="currentRouteName === 'occupation'">
     <MenuOccupationComponent :setResultSearch="setResultSearch"/>
     <div v-if="renderTable === true" class="mt-3">
       <TableDataOccupationComponent :result-search="resultSearch"/>
     </div>
   </div>
    <div v-if="currentRouteName === 'occupationNew'">
      <ToManageOccupationComponent/>
    </div>

    <div v-if="currentRouteName === 'occupationEdit'">
      <ToManageOccupationComponent :storeOccupation="resultSearch"/>
    </div>
  </div>
</template>

<script>
import MenuOccupationComponent from "@/components/OccupationComponents/MenuOccupationComponent";
import TableDataOccupationComponent from "@/components/OccupationComponents/TableDataOccupationComponent";
import ToManageOccupationComponent from "@/components/OccupationComponents/ToManageOccupationComponent";
export default {
  components: {
    ToManageOccupationComponent,
    TableDataOccupationComponent,
    MenuOccupationComponent
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