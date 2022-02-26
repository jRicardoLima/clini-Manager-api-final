<template>
    <SplitButton
        label="Opções"
        icon="pi pi-question"
        :model="items"
        class="p-button-secondary p-button-sm"
    />
</template>

<script>
import SplitButton from "primevue/splitbutton";

export default{
    components:{
        SplitButton
    },
    beforeMount(){
        this.items = [
            {
                label: 'Editar',
                command: () => {

                }
            },
            {
                label: 'Excluir',
                command: () => {

                }
            }
        ]
    },
    props:{
        optionData: Object
    },
    data(){
        return {
            items: []
        }
    }
}
</script>

<style scoped></style>