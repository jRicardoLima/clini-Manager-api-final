<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <Panel>
                    <p>Conteudo 1</p>
                </Panel>
            </div>
            <div class="col-md-8">
                <Panel header="Prontuário">
                   <Accordion>
                       <AccordionTab header="Anamnese">
                           <Editor
                            id="anamnese"
                            editorStyle="height: 150px"
                            v-model="anamnese"
                           />
                       </AccordionTab>
                       <p>{{anamnese}}</p>
                       <AccordionTab header="Hipótse Diagnóstica">
                           <Editor
                            id="diagnostic_hypothesis"
                            editorStyle="height: 150px"
                           />
                       </AccordionTab>
                       <AccordionTab header="Diagnóstico Definitivo">
                           <Editor
                            id="definitive_diagnostic"
                            editorStyle="height: 150px"
                           />
                       </AccordionTab>
                       <AccordionTab header="Conduta Terapeutica">
                           <Editor
                            id="therapeutic_conduct"
                            editorStyle="height: 150px"
                           />
                       </AccordionTab>
                       <AccordionTab header="Prescrição Médica">
                           <Editor
                            id="doctors_prescription"
                            editorStyle="height: 150px"
                           />
                       </AccordionTab>
                       <AccordionTab header="Pedido de Exames">
                           <Editor
                            id="request_exames"
                            editorStyle="height: 150px"
                           />
                       </AccordionTab>
                       <AccordionTab header="Resumo de Alta">
                           <Editor
                            id="medical_release"
                            editorStyle="height: 150px"
                           />
                       </AccordionTab>
                   </Accordion>
                </Panel>
            </div>
        </div>
    </div>
</template>

<script>
import Panel from "primevue/panel";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Editor from "primevue/editor";

    export default{
        components:{
            Panel,
            Accordion,
            AccordionTab,
            Editor
        },
        watch:{
            anamnese(){
                if(this.anamnese.indexOf("<img") > 0 && this.anamnese.length - 1){

                    this.medicalRecord.anamnese.image = this.anamnese
                                                        .slice(this.anamnese.indexOf("<img"), 
                                                               this.anamnese.length -1);
                    
                    this.anamnese = "</p>";

                }
                console.log(this.medicalRecord.anamnese.image);
            }
        },
        data(){
            return{
                anamnese: "",
                medicalRecord:{
                    anamnese: {
                        image: null,
                        text: ""
                    }
                }
            }
        },
    }
</script>

<style scope>
   
</style>