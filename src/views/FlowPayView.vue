<template>
<div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'flowPayment'">
        <MenuFlowPayComponent 
          :setResultSearch="setResultSearch"
          :setFlowPayActual="setFlowPayActual"
         />

        <div class="row mt-2" v-if="flowPayActual === true">
            <div class="col-md-12">
               <DailyProfitComponent/>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import MenuFlowPayComponent from "@/components/FlowPayComponents/MenuFlowPayComponent";
import DailyProfitComponent from "@/components/FlowPayComponents/DailyProfitComponent";
export default{
    components:{
        MenuFlowPayComponent,
        DailyProfitComponent
    },
    data(){
        return{
            resultSearch: null,
            search: false,
            flowPayActual: true,
        }
    },
    computed:{
        currentRouteName(){
            return this.$route.name;
        },
        renderTable(){
            return this.resultSearch !== null && this.search === true;
       }
    },
    methods:{
        setResultSearch(results,search){
            if((results !== null || results !== []) && search){
                 this.resultSearch = results
                 this.search = search
            }
        },
        setFlowPayActual(value){
            this.flowPayActual = value;
        }
    }
}
</script>


<style scoped></style>