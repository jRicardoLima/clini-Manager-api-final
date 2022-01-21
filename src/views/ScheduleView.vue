<template>
  <div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'schedule'">
      <MenuScheduleComponent/>
    </div>
    <div v-if="currentRouteName === 'scheduleNew'">
      <ToScheduleComponent/>
    </div>
  </div>
</template>

<script>
import MenuScheduleComponent from "@/components/ScheduleComponents/MenuScheduleComponent";
import ToScheduleComponent from "@/components/ScheduleComponents/ToScheduleComponent";
export default {
  components: {ToScheduleComponent, MenuScheduleComponent},
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