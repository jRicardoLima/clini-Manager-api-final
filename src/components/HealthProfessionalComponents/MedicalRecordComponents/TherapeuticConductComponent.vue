<template>
    <Accordion>
        <AccordionTab header="Conduta Terapeutica">
            <Editor
               id="therapeutic_conduct"
               editorStyle="height: 150px"
               v-model="therapeuticConduct.text"
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
                   v-show="showButtonTConduct"
               >
                  <i class="fas fa-file"></i><b>Download Arquivos</b>
               </button>
            </div>
            <div class="d-flex d-flex-row">
               <DynamicLink 
               :param="therapeuticConduct.files" 
               :mostrar="showTConductFiles"/>
            </div>
        </AccordionTab>
    </Accordion>
</template>

<script>
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import ToolbarEditor from "@/components/ToolbarEditor";
import FileUpload from "primevue/fileupload";
import DynamicLink from "@/components/DynamicLink";
import ManagerFiles from "@/services/ManagerFiles.js";
import Editor from "primevue/editor";

export default{
    components:{
        Accordion,
        AccordionTab,
        ToolbarEditor,
        FileUpload,
        DynamicLink,
        Editor
    },
    managerFiles: null,
    beforeMount(){
      this.managerFiles = new ManagerFiles(true);
    },
    data(){
        return{
            showButtonTConduct: false,
            showTConductFiles: false,
            therapeuticConduct:{
                files: null,
                text: ''
            }
        }
    },
    methods:{
        showFiles(){
            this.therapeuticConduct.files = this.managerFiles.convertBaseToDownload();
            if(this.showTConductFiles == null || this.showTConductFiles.files <= 0){
                console.log("Insira os Arquivos para fazer o upload");
            } else {
                this.showTConductFiles = true;
            }
        },
        upLoad(event){
            if(event.files === undefined || event.files.length <= 0){
                console.log("Insira os Arquivos para fazer o upload");
            } else {
                this.showButtonTConduct = true;
                this.managerFiles.createBase(event.files);

                 this.$toast.add({
                   severity: 'success',
                   summary:'INFORMAÇÃO DO SISTEMA',
                   detail:'ARQUIVOS CARREGADOS COM SUCESSO',
                   life:2000
                });
                this.$refs.clearUpload.clear();
            }
        }
    }
}
</script>

<style scoped>

</style>