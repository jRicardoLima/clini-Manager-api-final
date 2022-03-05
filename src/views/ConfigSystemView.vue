<template>
    <div class="container-fluid mt-2">
        <div v-if="currentRounteName === 'config_system'">
            <ToConfigSystemComponent/>
        </div>
    </div>
</template>

<script>
import ToConfigSystemComponent from "@/components/ConfigSystemComponents/ToConfigSystemComponent";

export default{
    components:{
        ToConfigSystemComponent
    },
    computed:{
        currentRounteName(){
            return this.$route.name;
        }
    }
}
</script>

<style scoped></style>