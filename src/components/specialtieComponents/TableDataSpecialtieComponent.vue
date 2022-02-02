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
        :filters.sync="filters1"
        dataKey="id"
    >
      <template #header>
        <div class="row">
          <div class="col-md-2">
            <InputText v-model="filters1['global'].value" placeholder="Filtrar"/>
          </div>
        </div>
      </template>
      <Column field="id" header="Código" sortable></Column>
      <Column field="name" header="Especialidade" sortable>
        <template #filter>
          <InputText
              v-model="filters1['name']"
              class="p-column-filter"
              placeholde="Buscar Por Nome"
          />
        </template>
      </Column>
      <Column field="CBO" header="CBO"></Column>
      <!--<Column field="healthProfessional" header="Profissional">
        <template #body="slotsProps">
          <select class="form-select">
            <option v-for="(professional,index) in slotsProps.data.healthProfessional" :key="index">
              {{professional.name}}
            </option>
          </select>
        </template>
      </Column> -->
      <Column header="Ações">
        <template #body="slotsProps">
          <ul>
            <OptionsTableSpecialtieComponent :optionData="slotsProps"/>
          </ul>
        </template>
      </Column>
      <template #empty>
        <p>NÃO FORAM ENCONTRADOS RESULTADOS</p>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import OptionsTableSpecialtieComponent from "@/components/specialtieComponents/OptionsTableSpecialtieComponent";
import {FilterMatchMode} from "primevue/api"
export default {
  components:{
    DataTable,
    Column,
    InputText,
    OptionsTableSpecialtieComponent
  },
  props:{
    resultSearch: Array
  },
  created() {
    this.initFilters1();
  },
  data(){
    return{
      filters1:{},
      items: [],
    }
  },
  methods:{
    initFilters1(){
      this.filters1 = {
        'global': {value:null,matchMode:FilterMatchMode.CONTAINS}
      }
    }
  }

}
</script>

<style scoped>

</style>