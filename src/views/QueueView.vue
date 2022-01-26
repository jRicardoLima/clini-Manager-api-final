<template>
  <div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'queue'">
      <QueueComponent
          :setResultSearch="setResultSearch"
          :setQueueOfDay="setqueueOfDay"
      />

      <div v-if="renderTable === true" class="mt-3">
        <TableDataQueueComponent
            :resultSearch="resultSearch"
            :queueDay="queueOfDay"
        />
      </div>
    </div>
  </div>
</template>

<script>
import QueueComponent from "@/components/HealthProfessionalComponents/QueueComponent";
import TableDataQueueComponent from "@/components/HealthProfessionalComponents/TableDataQueueComponent";

export default {
  components: {TableDataQueueComponent, QueueComponent},
  data(){
    return{
      resultSearch: null,
      search: false,
      queueOfDay: true,
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
    },
    setqueueOfDay(value){
      this.queueOfDay = value;
    }
  }
}
</script>

<style scoped>

</style>