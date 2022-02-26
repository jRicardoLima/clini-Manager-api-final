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

         <Column header="Profissional Saúde">
            <template #body="slotsProps">
                {{slotsProps.data.employee.name}}
            </template>
         </Column>

         <Column header="Ações">
            <template #body="slotsProps">
              <ul>
                <OptionsTableRoomComponent :optionData="slotsProps"/>
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
import OptionsTableRoomComponent from "@/components/RoomComponents/OptionsTableRoomComponent";
import {FilterMatchMode} from "primevue/api";

export default{
    components:{
        DataTable,
        Column,
        InputText,
        OptionsTableRoomComponent
    },
    created(){
        this.initFilters();
    },
    props:{
        resultSearch: Array
    },
    data(){
    return{
      filters: {},
      items:[]

    }
  },
  methods:{
    initFilters(){
      this.filters = {
        'global':{value: null,matchMode: FilterMatchMode.CONTAINS}
      }
    }
  }
}
</script>

<style scoped></style>