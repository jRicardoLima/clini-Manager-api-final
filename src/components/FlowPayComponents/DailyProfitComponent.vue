<template>
   <div>

        <Fieldset legend="Caixa" :toggleable="true" v-show="showDetailsDailyProfit === false">
        <div class="row">
            <div class="col-md-6">
                <p>PREVISÃO:</p>
                <p>progresso</p>
            </div>
            
            <div class="col-md-6">
                <p>DÉBITO:</p>
                <button class="btn btn-info btn-sm" @click="showDetails">Detalhes</button>
            </div>
        </div>
    </Fieldset>
    
    <div v-show="showDetailsDailyProfit === true">
        <DetailsDailyProfitComponent/>
    </div>
   </div>
</template>

<script>
import Fieldset from "primevue/fieldset";
import DetailsDailyProfitComponent from "@/components/FlowPayComponents/DatailsDailyProfitComponent";
export default{
    components:{
        Fieldset,
        DetailsDailyProfitComponent
    },
    data(){
       return{
            showDetailsDailyProfit: false,
       }
    },
    methods:{
        showDetails(){
            this.showDetailsDailyProfit = true;
        }
    }
}
</script>

<style scoped></style>