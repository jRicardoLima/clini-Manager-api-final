<template>
    <Dialog
        :visible.sync="displayModal"
        :style="{width: `${width}`}"
        :modal="true"
        :closable="false"  
        :position="position"
    >
  
      <template #header>
        <div class="row">
            <div class="col-md-12">
                 <b>{{headerName}}</b> 
            </div>
        </div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div clas="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
        <div class="row"></div>
         <div class="row">
            <div class="col-md-2">
              <button class="btn btn-warning btn-sm" @click="closeComponentModal"><i class="fas fa-times-circle"></i></button>
           </div>
        </div>
      </template>
      <component :is="component" v-bind="data"/>
    </Dialog>
</template>

<script>
import Dialog from "primevue/dialog"
import ShortTypePaymentComponent from "@/components/FlowPayComponents/ShortTypePaymentComponent";
import ShortEmployeeComponent from "@/components/EmployeeComponents/ShortEmployeeComponent";
import ShortPatientComponent from "@/components/PatientComponents/ShortPatientComponent";

export default{
    components:{
        Dialog,
        ShortTypePaymentComponent,
        ShortEmployeeComponent,
        ShortPatientComponent
    },
    props:{
        headerName: String,
        displayModal: Boolean,
        closeModal: Function,
        componentName: String,
        width: String,
        data:[Object,Array],
        position: String, 
    },
    computed:{
        component(){
           return this.componentName;     
        }
    },
    methods:{
        closeComponentModal(){
          this.closeModal()
        }
    }
}
</script>

<style>
</style>