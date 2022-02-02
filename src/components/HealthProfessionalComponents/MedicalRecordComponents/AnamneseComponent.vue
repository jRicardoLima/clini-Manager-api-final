<template>
    <Accordion class="customAccordion">
        <AccordionTab header="Anamnese">
           <Editor
             id="anamnese"
             editorStyle="height: 150px"
             v-model="anamnese.text"
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
                 v-show="showButtonAnamnese"
              >
                <i class="fas fa-file"></i><b>Download Arquivos</b>
              </button>
             </div>
             <div class="d-flex d-flex-row">
                <DynamicLink 
                   :param="anamnese.files" 
                   :mostrar="showAnamneseFiles"
                />
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
    props:{
      setInfoMedicalRecord: Function,
      executeMedicalRecord: Boolean
    },
    managerFiles: null,
    beforeMount(){
        this.managerFiles = new ManagerFiles(true);
    },
    data(){
        return{
             showButtonAnamnese: false,
             showAnamneseFiles: false,
             anamnese:{
                 files: null,
                 text: ''
             }
        }
    },
    watch:{
      executeMedicalRecord(){
        if(this.executeMedicalRecord == true){
            this.anamnese.files = this.managerFiles.convertBaseToDownload();
            this.setInfoMedicalRecord(this.anamnese);
        }
      }
    },
    methods:{
        showFiles(){
            this.anamnese.files = this.managerFiles.convertBaseToDownload();
            if(this.anamnese.files == null 
               || this.anamnese.files <= 0){
                    console.log("Insira os Arquivos para fazer o upload");
              } else {
                  this.showAnamneseFiles = true;
                }
        },
        upLoad(event){
            if(event.files === undefined || event.files.length <= 0){
                 console.log("Insira arquivos para fazer o upload");
            } else {
                this.showButtonAnamnese = true;
                this.managerFiles.createBase(event.files);

                this.$toast.add({
                   severity: 'success',
                   summary:'INFORMAÇÃO DO SISTEMA',
                   detail:'ARQUIVOS CARREGADOS COM SUCESSO',
                   life:2000
                });
                this.$refs.clearUpload.clear();
            }
        },
    }
}
</script>

<style scope>

</style>
