<template>
  <div>
    <DataTable
        :value="resultSearch"
        :paginator="true"
        class="p-datatable"
        showGridlines
        :rows="10"
        responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Mostrando {first} de {last} total de {totalRecords}"
        scrollHeight="400px"
        :filters.sync="filters"
        dataKey="id"
    >
      <template #header>
        <div class="row">
          <div class="col-md-2">
            <InputText
                v-model="filters['global'].value" placeholder="Filtrar"
            />
          </div>
        </div>
      </template>

      <Column field="id" header="Código" sortable/>
      <Column field="name" header="Nome" sortable>
        <template #filter>
          <InputText
              v-model="filters['name']"
              class="p-column-filter"
              placeholde="Buscar por nome"
          />
        </template>
      </Column>

      <Column field="telphone_one" header="Telefone 1"/>
      <Column field="telphone_two" header="Telefone 2"/>

      <Column field="email" header="E-Mail"/>

      <Column header="Ações">
        <template #body="slotsProps">
          <ul>
            <OptionsTablePatientComponent :optionData="slotsProps"/>
          </ul>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import {FilterMatchMode} from "primevue/api";
import OptionsTablePatientComponent from "@/components/PatientComponents/OptionsTablePatientComponent";

export default {
 components:{
   OptionsTablePatientComponent,
   DataTable,
   Column,
   InputText,
 },
  created() {
   this.initFilters();
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
  methods:{
   initFilters(){
     this.filters = {
       'global':{value: null, matchMode: FilterMatchMode.CONTAINS}
     }
   }
  }
}
</script>

<style scoped>

</style>