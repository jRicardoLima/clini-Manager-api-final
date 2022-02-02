<template>
  <div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'schedule'">
      <MenuScheduleComponent :setResultSearch="setResultSearch"/>
      <div v-if="renderTable === true" class="mt-2">
        <TableDataScheduleComponent :resultSearch="resultSearch"/>
      </div>
    </div>
    <div v-if="currentRouteName === 'scheduleNew'">
      <ToScheduleComponent/>
    </div>
  </div>
</template>

<script>
import MenuScheduleComponent from "@/components/ScheduleComponents/MenuScheduleComponent";
import ToScheduleComponent from "@/components/ScheduleComponents/ToScheduleComponent";
import TableDataScheduleComponent from "@/components/ScheduleComponents/TableDataScheduleComponent";
export default {
  components: {TableDataScheduleComponent, ToScheduleComponent, MenuScheduleComponent},
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