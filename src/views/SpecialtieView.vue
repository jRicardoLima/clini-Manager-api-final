<template>
  <div class="container-fluid">
    <div v-if="currentRouteName === 'specialtie'">
      <MenuSpecialtieComponent :setResultSearch="setResultSearch"/>
      <div v-if="renderTable === true" class="mt-3">
        <TableDataSpecialtieComponent :resultSearch="resultSearch"/>
      </div>
    </div>
    <div v-if="currentRouteName === 'specialtie_new'">
      <ToManageSpecialtieComponent/>
    </div>
    <div v-if="currentRouteName === 'specialtie_edit'">
      <ToManageSpecialtieComponent :storeSpecialtie="resultSearch"/>
    </div>
  </div>
</template>

<script>
import MenuSpecialtieComponent from "@/components/specialtieComponents/MenuSpecialtieComponent";
import TableDataSpecialtieComponent from "@/components/specialtieComponents/TableDataSpecialtieComponent";
import ToManageSpecialtieComponent from "@/components/specialtieComponents/ToManageSpecialtieComponent";
export default {
  components:{
    MenuSpecialtieComponent,
    TableDataSpecialtieComponent,
    ToManageSpecialtieComponent,
  },
  data(){
    return {
      resultSearch: null,
      search: false,
    }
  },
  computed:{
    renderTable(){
      return this.resultSearch !== null && this.search === true;
    },
    currentRouteName(){
      return this.$route.name;
    }
  },
  methods:{
    setResultSearch(results,search){
      if((results !== null || results !== []) && search){
        this.resultSearch = results;
        this.search = true;
      }
    },
  }
}
</script>

<style scoped>

</style>