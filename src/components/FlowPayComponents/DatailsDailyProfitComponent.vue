<template>
    <DataTable
      :value="result"
      rowGroupMode="subheader"
      :paginator="true"
      groupRowsBy="health_professional.name"
      sortMode="single"
      sortField="health_professional.name"
      :sortOrder="1"
      responsiveLayout="scroll"
      :expandableRowGroups="true"
      :expandedRowGroups.sync="expandedRowGroups"
      @rowgroup-expand="onRowGroupExpand" 
      @rowgroup-collapse="onRowGroupCollapse"
      :rows="4"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
      currentPageReportTemplate="Mostrando {first} de {last} total de {totalRecords}"
      
    >
      <Column field="health_professional.name" header="Nome"></Column>  
      <Column header="Código">
        <template #body="slotsProps">
            <p>{{slotsProps.data.id}}</p>
        </template>
      </Column> 
      <Column header="Procedimento">
          <template #body="slotsProps">
              <p>{{slotsProps.data.medical_procedure.name}}</p>
          </template>
      </Column>
      <Column header="Valor">
        <template #body="slotsProps">
            <p>{{slotsProps.data.medical_procedure.price}}</p>
        </template>
      </Column>
      <template #groupheader="slotsProps">
          <p>{{slotsProps.data.health_professional.name}}</p>
      </template>
      <template #groupfooter="slotsProps">
          <div class="d-flex d-flex-row">
             <p class="totalGroupStyle">
                <b>Total:</b> 
                {{amountByProfessional(slotsProps.data.health_professional.name) | formatValue}}
             </p>
          </div>
      </template>
       <template #footer>
           <div class="d-flex d-flex-row">
               <p><b>Total Geral:</b> {{amount | formatValue}}</p>
           </div>
                
       </template> 
    </DataTable>
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {formatCurrencyToBRL} from "@/helpers/Helpers";

export default{
    components:{
        DataTable,
        Column
    },
    filters:{
      formatValue(value){
          return formatCurrencyToBRL(value);
      },
    },
    created(){
        this.result = [
            {
              id: 1,
              health_professional:{
                  id: 35,
                  name: "Profissional 1",

              },
              medical_procedure:{
                  id: 56,
                  name: 'Procedimento 3',
                  price: 125.50
              }
            },
            {
              id: 2,
              health_professional:{
                  id: 56,
                  name: "Profissional 3",

              },
              medical_procedure:{
                  id: 84,
                  name: 'Procedimento 1',
                  price: 500.35
              }
            },
             
             {
              id: 4,
              health_professional:{
                  id: 99,
                  name: "Profissional 12",

              },
              medical_procedure:{
                  id: 253,
                  name: 'Procedimento 36',
                  price: 750.56
              }
            },
            {
              id: 10,
              health_professional:{
                  id: 35,
                  name: "Profissional 1",

              },
              medical_procedure:{
                  id: 56,
                  name: 'Procedimento 120',
                  price: 500.00
              }
            },
        ];

        this.amountServices();

        console.log(this.result);

    },
    data(){
        return{
            result: null,
            amount: 0,
            expandedRowGroups: null,
        }
    },
    methods:{
        amountServices(){
        for(let item of this.result){
            this.amount += item.medical_procedure.price;
        }
     },
     amountByProfessional(name){
         let sum = 0;

         if(this.result){
             for(let item of this.result){
                 if(item.health_professional.name === name){
                     sum += item.medical_procedure.price;
                 }
             }
         }
         return sum;
     },
    }
}
</script>

<style scoped>

.totalGroupStyle{
    background-color: #20AB01;
    color: white;

}

</style>