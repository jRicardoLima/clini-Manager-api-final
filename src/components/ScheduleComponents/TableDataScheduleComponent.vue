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
        <Column field="id" header="Código" sortable/>

        <Column header="Datas Agendadas">
          <template #body="slotsProps">
            <select class="form-select">
              <option v-for="(date,index) in slotsProps.data.dates" :key="index">
                {{date.scheduled}}
              </option>
            </select>
          </template>
        </Column>

        <Column header="Paciente" sortable>

          <template #body="slotsProps">
            {{slotsProps.data.patient.name}}
          </template>
        </Column>

        <Column header="Profissional Saúde" sortable>
          <template #body="slotsProps">
            {{slotsProps.data.healthProfessional.name}}
          </template>
        </Column>

        <Column header="Especialidade">
          <template #body="slotsProps">
            {{slotsProps.data.healthProfessional.specialtie.name}}
          </template>
        </Column>

        <Column header="Procedimento">
          <template #body="slotsProps">
            {{slotsProps.data.healthProfessional.medicalProcedure.name}}
          </template>
        </Column>

        <Column header="Status">
          <template #body="slotsProps">
            {{slotsProps.data.status}}
          </template>
        </Column>

        <Column header="Opções">
          <template #body="slotsProps">
            <OptionsTableScheduleComponent :optionData="slotsProps"/>
          </template>
        </Column>
      </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import OptionsTableScheduleComponent from "@/components/ScheduleComponents/OptionsTableScheduleComponent";

export default {
  components:{
    OptionsTableScheduleComponent,
    DataTable,
    Column,
  },
  props:{
    resultSearch: Array
  },
  data(){
    return {
      filters: {},
      items: []
    }
  },
}
</script>

<style scoped>

</style>