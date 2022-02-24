<template>
    <Accordion>
        <AccordionTab header="Pedido de Exames">
            <Editor
           id="request_exames"
           editorStyle="height: 150px"
           v-model="requestExames.text"
        >
          <template #toolbar>
             <ToolbarEditor/>
          </template>
        </Editor>
        </AccordionTab>
    </Accordion>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import ToolbarEditor from "@/components/ToolbarEditor";
import Editor from "primevue/editor";

export default{
 name: 'RequestExamesComponent',   
 components:{
     Accordion,
     AccordionTab,
     ToolbarEditor,
     Editor
 },
 props:{
     setInfoMedicalRecord: Function,
     executeMedicalRecord: Boolean
 },
 watch:{
     executeMedicalRecord(){
         if(this.executeMedicalRecord == true){
             this.setInfoMedicalRecord({name: this.$options.name,data: this.requestExames});
         }
     }
 },
 data(){
     return{
         requestExames:{
             text: ''
         }
     }
 }
}
</script>

<style scoped></style>