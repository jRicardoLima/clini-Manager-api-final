<template>
<div class="container-fluid mt-2">
    <div v-if="currentRouteName === 'flowPayment'">
        <MenuFlowPayComponent :setResultSearch="setResultSearch"/>
    </div>
</div>

</template>

<script>
import MenuFlowPayComponent from "@/components/FlowPayComponents/MenuFlowPayComponent";
export default{
    components:{
        MenuFlowPayComponent
    },
    data(){
        return{
            resultSearch: null,
            search: false
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
    }
}
</script>


<style scoped></style>