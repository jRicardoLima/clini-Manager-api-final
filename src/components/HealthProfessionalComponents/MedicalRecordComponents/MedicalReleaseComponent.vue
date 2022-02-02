<template>
    <Accordion>
        <AccordionTab header="Resumo de Alta">
            <Editor
              id="medical_release"
              editorStyle="height: 150px"
              v-model="medicalRealease.text"
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
            medicalRealease:{
                text: ''
            }
        }
    }
}
</script>

<style scoped></style>