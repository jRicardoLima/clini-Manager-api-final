<template>
  <div> 
    <template v-if="typePayment !== ''">
        <div class="row mt-2">
            <div class="col-md-3">
                <div class="form-floating">
                    <input
                        id="parcel_number"
                        type="text"
                        class="form-control"
                        placeholder="Numero Parcela"
                        :readonly="typePayment !== 'Cartão Crédito'"
                        v-model="parcelsInfo.parcelNumber"
                        @keyup="onlyNumbersValidate"
                    />
                    <label for="parcel_number">Número Parcela</label>
                </div>
            </div>

            <div class="col-md-3">
                <div class="form-floating">
                    <Money
                        id="price_parcel"
                        class="form-control"
                        placeholder="Valor"
                        v-bind="money"
                        v-model="parcelsInfo.priceParcel"
                        style="padding-top: 15px; padding-bottom: 15px"
                    />
                    <label for="price_parcel">Valor</label>
                </div>
            </div>

            <div :class="typePayment === 'Plano de Saude' ? 'col-md-3' : 'col-md-6'">
                <div class="form-floating">
                    <InputMask
                        id="parcel_due_date"
                        class="form-control"
                        mask="99/99/9999"
                        v-model="parcelsInfo.dueDateParcel"
                        :readonly="typePayment !== 'Cartão Crédito'"
                        @focusout="validateDate"
                        placeholder="Data Vencimento"
                    />
                    <label for="parcel_due_date">Data Vencimento</label>
                </div>
            </div>

            <div 
               v-if="typePayment === 'Plano de Saude'" 
               class="col-md-3"
              >
                <select class="form-select" v-model="parcelsInfo.typeHealthInsurance" style="padding-top: 15px; padding-bottom: 15px">
                    <option value="">SELECIONE O PLANO</option>
                    <option value="BRADESCO SAUDE">BRADESCO SAÚDE</option>
                    <option value="UNIMED">UNIMED</option>
                </select>    
            </div>
        </div>
        <div class="d-flex d-flex-row mt-2">
             <button 
                  class="btn btn-sm btn-info"
                  @click="addParcel"
                  >
                  <i class="fas fa-plus-circle"></i>Adicionar</button>
        </div>
        <div class="mt-1">
            <DataTable
                :value="paymentsInfo.dataParcels"
                :paginator="true"
                class="p-datatable"
                editMode="cell"
                @cell-edit-complete="cellEditation"
                :selection.sync="selectedTypePayment"
                showGridlines
                :rows="3"
                paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                currentPageReportTemplate="Mostrando {first} de {last} total de {totalRecords}"
            >
            <template #header>
                <div class="d-flex d-flex-row">
                    <button class="btn btn-sm btn-secondary" @click="deleteTypePayment">Excluir</button>
                </div>
                
            </template>
             <Column selectionMode="multiple" :styless="{width: '3rem'}" :exportable="false"></Column>
             <Column field="idNumber" header="Registro"/>
             <Column field="parcelNumber" header="Parcela"/>
             <Column  header="Valor">
                <template #body="slotsProps">
                    {{slotsProps.data.priceParcel | convertMoney}}
                </template>
             </Column>
             <Column field="dueDateParcel" header="Data Vencimeto"/>
             <Column field="typePayment" header="Tipo Pagamento"/>
             <Column field="typeHealthInsurance" header="Plano Saúde"/>
            </DataTable>
        </div>
    </template>
  </div> 
</template>

<script>
import {Money} from "v-money";
import InputMask from "primevue/inputmask";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import {onlyNumbers,formatCurrencyToBRL,validDate} from "@/helpers/Helpers.js";

export default{
    components:{
        Money,
        InputMask,
        DataTable,
        Column,
    },
    filters:{
        convertMoney(value){
            return formatCurrencyToBRL(value);
        }
    },
    props:{
        typePayment: String,
    },
    watch:{
        typePayment(){
           this.parcelsInfo.typePayment = this.typePayment;
        },
        paymentsInfo:{
            deep: true,
            handler(){
                this.parcelsInfo = {
                        idNumber:'',
                        parcelNumber: '',
                        priceParcel: '',
                        dueDateParcel: '',
                        typeHealthInsurance: '',
                        typePayment: this.typePayment,
                      }
            },
        }
    },
    data(){
        return{
            selectedTypePayment: null,
            id: 0,
            paymentsInfo:{
              dataParcels: [],            
            },
            parcelsInfo:{
                idNumber: '',
                parcelNumber: '',
                priceParcel: '',
                dueDateParcel: '',
                typeHealthInsurance: '',
                typePayment: '',
              },
            
             money:{
              decimal: ',',
              thousands: '.',
              prefix: 'R$ ',
              suffix: '',
              precision: 2,
              masked: false
            },
        }
    },
    methods:{
        addParcel(){
            this.parcelsInfo.idNumber = this.id + 1;
            this.id ++; 
            switch(this.typePayment){
                case 'Á Vista':
                     if(this.parcelsInfo.priceParcel !== '0,00'){
                        this.paymentsInfo.dataParcels.push(this.parcelsInfo);
                       
                   } else {
                       this.$toast.add({
                                  severity:'warn',
                                  summary:'INFORMAÇÃO DO SISTEMA',
                                  detail:'PREENCHA OS DADOS DA PARCELA',
                                  life:1500
                                });          
                   }
                break;

                case 'Plano de Saude':
                    if(this.parcelsInfo.priceParcel !== '0,00'
                       && this.parcelsInfo.typeHealthInsurance !== ''){

                           this.paymentsInfo.dataParcels.push(this.parcelsInfo);
                       } else {
                           this.$toast.add({
                                  severity:'warn',
                                  summary:'INFORMAÇÃO DO SISTEMA',
                                  detail:'PREENCHA OS DADOS DO PLANO DE SAÚDE',
                                  life:1500
                                });  
                       }

                break;
                case 'Pix':
                    if(this.parcelsInfo.priceParcel !== '0,00'){
                        this.paymentsInfo.dataParcels.push(this.parcelsInfo);
                    } else {
                        this.$toast.add({
                                  severity:'warn',
                                  summary:'INFORMAÇÃO DO SISTEMA',
                                  detail:'PREENCHA OS DADOS DO PIX',
                                  life:1500
                                });  
                    }
                break;

                case 'Cartão Crédito':
                    if(this.parcelsInfo.parcelNumber !== '' 
                       && this.parcelsInfo.priceParcel !== '0,00' 
                       && this.parcelsInfo.dueDateParcel !== ''){
                    
                    this.paymentsInfo.dataParcels.push(this.parcelsInfo); 

                    } else {
                         this.$toast.add({
                                  severity:'warn',
                                  summary:'INFORMAÇÃO DO SISTEMA',
                                  detail:'PREENCHA OS DADOS DA PARCELA',
                                  life:1500
                                });
                    }

                break;
                
                case 'Cartão Débito':
                    if(this.priceParcel !== '0,00'){
                        this.paymentsInfo.dataParcels.push(this.parcelsInfo);
                    } else {
                        this.$toast.add({
                                  severity:'warn',
                                  summary:'INFORMAÇÃO DO SISTEMA',
                                  detail:'PREENCHA OS DADOS DO CARTÃO DEBITO',
                                  life:1500
                                });
                    }
                break;    
            }     
        },
        onlyNumbersValidate(event){
            if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
                this.parcelsInfo.parcelNumber = "";
                this.$toast.add({
                              severity:'warn',
                              summary:'INFORMAÇÃO DO SISTEMA',
                              detail:'CAMPO PERMITE SOMENTE NUMEROS',
                              life:1500
                            });
            }
        },
        validateDate(){
           if(!validDate(this.parcelsInfo.dueDateParcel)){
               this.parcelsInfo.dueDateParcel = "";
               this.$toast.add({
                              severity:'warn',
                              summary:'INFORMAÇÃO DO SISTEMA',
                              detail:'INFORME UMA DATA VALIDA',
                              life:1500
                            });
           }
        },
        deleteTypePayment(){
            let typePaymentDeleted = [];

            for(let element of this.paymentsInfo.dataParcels){
                     
                for(let selected of this.selectedTypePayment){
                    if(element.idNumber !== selected.idNumber){
                        typePaymentDeleted.push(element);
                    }
                }
            }
            this.paymentsInfo.dataParcels = typePaymentDeleted;
        },
        teste(){
            console.log(this.paymentsInfo.dataParcels);
        }
    }
}    
</script>

<style scoped></style>