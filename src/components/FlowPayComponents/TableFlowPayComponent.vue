<template>
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
                        v-model="filters['global'].value"
                        placeholder="Filtrar"
                    />
                </div>
            </div>
        </template>

        <Column field="id" header="Código" sortable></Column>
        <Column header="Data">
            <template #body="slotsProps">
                <p>{{slotsProps.data.date_flow_pay}}</p>
            </template>
        </Column>

        <Column header="Profissional Saúde">
            <template #body="slotsProps">
                <p>{{slotsProps.data.health_professional.name}}</p>
            </template>
        </Column>

        <Column header="Plano Saúde">
            <template #body="slotsProps">
                <p>{{slotsProps.data.health_insurance.name}}</p>
            </template>
        </Column>

        <Column header="Procedimento">
            <template #body="slotsProps">
                <p>{{slotsProps.data.medical_procedure.name}}</p>
            </template>
        </Column>

        <Column header="Preço Procedimento">
            <template #body="slotsProps">
                <p>{{slotsProps.data.medical_procedure.price}}</p>
            </template>
        </Column>

        <Column header="Opções"></Column>
        <template #footer>
            Total {{totalPrice}}
        </template>
    </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import {FilterMatchMode} from "primevue/api";
import {formatCurrencyToBRL} from "@/helpers/Helpers";

export default{
    components:{
        DataTable,
        Column,
        InputText,
    },
    created(){
        this.initFilters();
        this.calcTotal();
    },
    beforeMount(){
        this.totalPrice = formatCurrencyToBRL(this.totalPrice);
    },
    props:{
        resultSearch: Array
    },
    data(){
        return{
            filters: {},
            items: [],
            totalPrice: 0,

        }
    },
    methods:{
        initFilters(){
            this.filters = {
                'global': {value: null, matchMode: FilterMatchMode.CONTAINS}
            }
        },
    
        calcTotal(){
            let vmInstance = this;
            this.resultSearch.forEach(element => {

                vmInstance.totalPrice += element.medical_procedure.price;
            });
        }
    }
}
</script>

<style scoped></style>