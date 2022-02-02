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
 components:{
     Accordion,
     AccordionTab,
     ToolbarEditor,
     Editor
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