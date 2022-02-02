<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
                <Panel header="Paciente" class="customPanel">
                 <ScrollPanel style="height: 500px" class="customScroll">   
                   <div class="d-flex d-flex-row">
                       <Avatar image="/pessoa.jpg" size="large"/> <span class=" ms-3 mt-2">João Ricardo Lima 29 anos</span>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <p>Endereço</p>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <p>Cidade: asdascasdeedddr</p>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <p>Bairro: asdasdasdasd</p>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <p>Rua: asdaefasde</p>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <p>Telefone 1: a5451321231</p>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <p>Telefone 2: 51321321321</p>
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       Ultimos Atendimentos
                   </div>
                   <div class="d-flex d-flex-row mt-2">
                       <Listbox
                         :options="lastServices"
                          optionLabel="date"
                       />
                   </div>
                 </ScrollPanel>  
                </Panel>
            </div>
            <div class="col-md-8">
                <Panel header="Prontuário" class="customPanel">
                    <div class="mt-2">
                      <AnamneseComponent
                        :executeMedicalRecord="executeMedicalRecord"
                        :setInfoMedicalRecord="setInfoMedical"
                      />  
                    </div>
                    
                    <div class="mt-2">
                       <DiagnosticHypothesisComponent/>
                    </div>

                    <div class="mt-2">
                       <DefinitiveDiagnosticComponent/>
                    </div>
                    
                    <div class="mt-2">
                       <TherapeuticConductComponent/>
                    </div>
                       <div class="mt-2">
                           <DoctorPrescritionComponent/>
                       </div>
                       <div class="mt-2">
                           <RequestExamesComponent/>
                       </div>
                       <div class="mt-2">
                           <MedicalReleaseComponent/>
                       </div>
                 
                   
                   <div class="d-flex d-flex-row mt-2">
                         <button 
                           class="btn btn-success"
                           @click="saveMedicalRecord"
                         >Salvar</button> 
                   </div>
                </Panel>
            </div>
        </div>
    </div>
</template>

<script>
import Panel from "primevue/panel";
import Avatar from "primevue/avatar";
import Listbox from "primevue/listbox";
import ScrollPanel from "primevue/scrollpanel";
import AnamneseComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/AnamneseComponent";
import DiagnosticHypothesisComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/DiagnosticHypothesisComponent";
import DefinitiveDiagnosticComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/DefinitiveDiagnosticComponent";
import TherapeuticConductComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/TherapeuticConductComponent";
import DoctorPrescritionComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/DoctorPrescritionComponent";
import RequestExamesComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/RequestExamesComponent"
import MedicalReleaseComponent from "@/components/HealthProfessionalComponents/MedicalRecordComponents/MedicalReleaseComponent";
    export default{
        components:{
            Panel,
            Avatar,
            Listbox,
            ScrollPanel,
            AnamneseComponent,
            DiagnosticHypothesisComponent,
            DefinitiveDiagnosticComponent,
            TherapeuticConductComponent,
            DoctorPrescritionComponent,
            RequestExamesComponent,
            MedicalReleaseComponent
        },
        data(){
            return{
               lastServices:[
                   {date:'18/08/2021'},
                   {date: '29/11/2021'},
                   {date: '14/12/2021'},
                   {date: '20/12/2021'},
                   {date: '25/12/2021'},
               ],
               infoMedicalRecord: [],
               executeMedicalRecord: false,
            } 
        },
        methods:{
            setInfoMedical(dataMedicalRecord){
                if(dataMedicalRecord !== null){
                    this.infoMedicalRecord.push(dataMedicalRecord);
                }    
            },
            saveMedicalRecord(){
                this.executeMedicalRecord = true;
                console.log(this.infoMedicalRecord)
            }
        }
    }
</script>

<style scope>


</style>