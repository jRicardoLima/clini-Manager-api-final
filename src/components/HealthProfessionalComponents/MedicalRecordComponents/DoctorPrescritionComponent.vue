<template>
    <Accordion>
        <AccordionTab header="Prescrição Médica">
            <Editor
              id="doctors_prescription"
              editorStyle="height: 150px"
              v-model="doctorPrescrition.text"
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
 name: 'DoctorPrescritionComponent',   
 components:{
     Accordion,
     AccordionTab,
     ToolbarEditor,
     Editor,
 },
 props:{
   setInfoMedicalRecord: Function,
   executeMedicalRecord: Boolean
 },
 watch:{
     executeMedicalRecord(){
         if(this.executeMedicalRecord == true){
             this.setInfoMedicalRecord({name: this.$options.name,data:this.doctorPrescrition});
         }
     }
 },
 data(){
     return{
         doctorPrescrition:{
             text: '',
         }
     }
 }

}
</script>

<style scoped></style>