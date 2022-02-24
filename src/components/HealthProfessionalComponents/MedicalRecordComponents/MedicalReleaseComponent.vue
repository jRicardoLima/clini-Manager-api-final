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
    name:'MedicalReleaseComponent',
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
                this.setInfoMedicalRecord({name: this.$options.name, date: this.medicalRealease});
            }
        }
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