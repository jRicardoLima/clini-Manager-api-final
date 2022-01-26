<template>
  <div>
    <DataTable
        :value="resultSearch"
        :paginator="true"
        class="p-datatable"
        showGridlines
        :rows="10"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} de {last} total de {totalRecords}"
        dataKey="id"
    >
      <Column field="id" header="Código" sortable></Column>
      <Column header="Paciente">
        <template #body="slotsProps">
          {{slotsProps.data.patient.name}}
        </template>
      </Column>
      <Column header="Agendamento">
          <template #body="slotsProps">
            <span v-if="queueDay === true">
              {{slotsProps.data | searchDateActual}}
            </span>
            <span v-else>
              <select class="form-select">
                <option v-for="(date,index) in slotsProps.data.dates" :key="index">
                  {{date.scheduled}}
                </option>
              </select>
            </span>
          </template>
      </Column>

      <Column header="Status">
      </Column>
      <Column header="Ações">
        <template #body="slotsProps">
          <ul>
            <OptionsTableQueueComponent
              :optionData="slotsProps"
            />
          </ul>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import OptionsTableQueueComponent from "@/components/HealthProfessionalComponents/OptionsTableQueueComponent";


export default {
  components:{
    OptionsTableQueueComponent,
    DataTable,
    Column,
  },

  filters:{
    searchDateActual(value){
      let actualDate = "";
      value.dates.forEach(element => {
        let now = new Date().toLocaleString().substr(0,10);
        if(element.scheduled === now){
           actualDate = now;
        }
      })
      return actualDate;
    }
  },
  props:{
    resultSearch: Array,
    queueDay: Boolean,
  },

}
</script>

<style scoped>

</style>