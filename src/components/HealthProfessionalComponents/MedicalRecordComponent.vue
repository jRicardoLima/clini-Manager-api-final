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
                       <div class="mt-2">
                          <AnamneseComponent/>  
                       </div>
                       <div class="mt-2">
                            <DiagnosticHypothesisComponent/>
                       </div>

                       <div class="mt-2">
                           <DefinitiveDiagnosticComponent/>
                       </div>
                       <AccordionTab header="Conduta Terapeutica">
                           <Editor
                            id="therapeutic_conduct"
                            editorStyle="height: 150px"
                           >
                            <template #toolbar>
                                <ToolbarEditor/>
                            </template>
                           </Editor>

                           <FileUpload
                             class="mt-2"
                             name="demo[]"
                             ref="clearUpload"
                             :customUpload="true"
                             @uploader="upLoad"
                             :multiple="true"
                             :fileLimit="4"
                             :chooseLabel="'Selecionar Arquivos'"
                             :cancelLabel="'Cancelar'"
                             :uploadLabel="'Carregar'"
                             
                           >
                            <template #empty>
                                Arraste os arquivos para cá
                            </template>
                           </FileUpload>
                           
                           <div class="d-flex align-content-start flex-wrap mt-2">
                                <button 
                                     class="btn btn-info btn-sm"
                                     @click="showFiles"
                                     v-show="showButtonFiles"
                                 >
                                     <i class="fas fa-file"></i><b>Download Arquivos</b>
                                </button>
                           </div>
                            <div class="d-flex d-flex-row">
                               <!--<DynamicLink :param="aTag" :mostrar="showFilesLink"/>-->
                            </div>
                       </AccordionTab>
                       <AccordionTab header="Prescrição Médica">
                           <Editor
                            id="doctors_prescription"
                            editorStyle="height: 150px"
                           >
                            <template #toolbar>
                                <ToolbarEditor/>
                            </template>
                           </Editor>
                       </AccordionTab>
                       <AccordionTab header="Pedido de Exames">
                           <Editor
                            id="request_exames"
                            editorStyle="height: 150px"
                           >
                            <template #toolbar>
                                <ToolbarEditor/>
                            </template>
                           </Editor>

                           <FileUpload
                             class="mt-2"
                             name="demo[]"
                             ref="clearUpload"
                             :customUpload="true"
                             @uploader="upLoad"
                             :multiple="true"
                             :fileLimit="4"
                             :chooseLabel="'Selecionar Arquivos'"
                             :cancelLabel="'Cancelar'"
                             :uploadLabel="'Carregar'"
                             
                           >
                            <template #empty>
                                Arraste os arquivos para cá
                            </template>
                           </FileUpload>
                           
                           <div class="d-flex align-content-start flex-wrap mt-2">
                                <button 
                                     class="btn btn-info btn-sm"
                                     @click="showFiles"
                                     v-show="showButtonFiles"
                                 >
                                     <i class="fas fa-file"></i><b>Download Arquivos</b>
                                </button>
                           </div>
                            <div class="d-flex d-flex-row">
                              <!-- <DynamicLink :param="aTag" :mostrar="showFilesLink"/> -->
                            </div>
                       </AccordionTab>
                       <AccordionTab header="Resumo de Alta">
                           <Editor
                            id="medical_release"
                            editorStyle="height: 150px"
                           >
                            <template #toolbar>
                                <ToolbarEditor/>
                            </template>
                           </Editor>

                           <FileUpload
                             class="mt-2"
                             name="demo[]"
                             ref="clearUpload"
                             :customUpload="true"
                             @uploader="upLoad"
                             :multiple="true"
                             :fileLimit="4"
                             :chooseLabel="'Selecionar Arquivos'"
                             :cancelLabel="'Cancelar'"
                             :uploadLabel="'Carregar'"
                             
                           >
                            <template #empty>
                                Arraste os arquivos para cá
                            </template>
                           </FileUpload>
                           
                           <div class="d-flex align-content-start flex-wrap mt-2">
                                <button 
                                     class="btn btn-info btn-sm"
                                     @click="showFiles"
                                     v-show="showButtonFiles"
                                 >
                                     <i class="fas fa-file"></i><b>Download Arquivos</b>
                                </button>
                           </div>
                            <div class="d-flex d-flex-row">
                              <!-- <DynamicLink :param="aTag" :mostrar="showFilesLink"/> -->
                            </div>
                       </AccordionTab>
                   </Accordion>
                   <div class="d-flex d-flex-row mt-2">
                         <button class="btn btn-success">Salvar</button> 
                   </div>
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
import ToolbarEditor from "@/components/ToolbarEditor";
import FileUpload from "primevue/fileupload";
import ManagerFiles from "@/services/ManagerFiles.js";
import AnamneseComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/AnamneseComponent";
import DiagnosticHypothesisComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/DiagnosticHypothesisComponent";
import DefinitiveDiagnosticComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/DefinitiveDiagnosticComponent";

    export default{
        components:{
            Panel,
            Accordion,
            AccordionTab,
            Editor,
            ToolbarEditor,
            FileUpload,
            AnamneseComponent,
            DiagnosticHypothesisComponent,
            DefinitiveDiagnosticComponent,
        },
        managerFiles: null,
        data(){
            return{
                image: '',
                showFilesLink: false,
                showButtonFiles: false,
                showButtonAnamnese: false,
                showButtonDiagnosticHypothesis: false,

                showAnamneseFiles: false,
                showDiagnosticHypothesisFiles: false,

                medicalRecord:{
                    anamnese: {
                        files:null,
                        text: ""
                    },
                    diagnosticHypothesis: {
                        files: null,
                        text: ""
                    }

                }
            }
        },
        methods:{
            showFiles(nameMedicalRecord){

                switch(nameMedicalRecord){
                    case 'anamnese':
                        this.medicalRecord.anamnese.files = this.managerFiles.convertBaseToDownload();
                        if(this.medicalRecord.anamnese.files == null 
                           || this.medicalRecord.anamnese.files <= 0){
                           console.log("Insira os Arquivos para fazer o upload");
                        } else {
                          this.showAnamneseFiles = true;
                        }
                        break;
                    case 'diagnostic_hypothesis':
                        this.medicalRecord.diagnosticHypothesis.files = this.managerFiles.convertBaseToDownload();
                        if(this.medicalRecord.diagnosticHypothesis.files == null 
                           || this.medicalRecord.diagnosticHypothesis.files <= 0){
                               console.log("Insira os Arquivos para fazer o upload")
                           } else {
                               this.showDiagnosticHypothesisFiles = true;
                           }    
                }
                
            },
            
            upLoad(event,nameMedicalRecord){
               if(event.files === undefined || event.files.length <= 0){
                   console.log("Insira arquivos para fazer o upload");
               } else {
                   switch(nameMedicalRecord){
                       case 'anamnese':
                         this.showButtonAnamnese = true;
                         this.managerFiles = new ManagerFiles(true);
                         this.managerFiles.createBase(event.files);

                         this.$toast.add({
                            severity: 'success',
                            summary:'INFORMAÇÃO DO SISTEMA',
                            detail:'ARQUIVOS CARREGADOS COM SUCESSO',
                            life:2000
                         });
                   this.$refs.clearUpload.clear();
                        break;
                        case 'diagnostic_hypothesis':
                          this.showButtonDiagnosticHypothesis = true;
                          this.managerFiles = new ManagerFiles(true);
                          this.managerFiles.createBase(event.files);

                          this.$toast.add({
                              severity: 'success',
                              summary:'INFORMAÇÃO DO SISTEMA',
                              detail:'ARQUIVOS CARREGADOS COM SUCESSO',
                              life:2000
                           });
                            this.$refs.clearUpload.clear();
                        break;  
                   }
               } 
            },
        }
    }
</script>

<style>
   .images-record-medical{

   }
</style>