<template>
    <div>

        <div class="row">
          <div class="col-md-3">
              <div class="form-floating">
                  <input
                    id="name_patient"
                    type="text"
                    class="form-control"
                    placeholder="Paciente"
                    v-model="typePaymentAppointment.idPatient"
                    readonly="readonly"
                  />
                  <label for="name_patient">Paciente</label>
              </div>
          </div>

          <div class="col-md-3">
              <div class="form-floating">
                  <input
                    id="health_professional"
                    type="text"
                    class="form-control"
                    placeholder="Profissional"
                    v-model="typePaymentAppointment.idHealthProfessional"
                    readonly="readonly"
                  />
                  <label for="health_professional">Profissional</label>
              </div>
          </div>

          <div class="col-md-3">
              <div class="form-floating">
                  <input
                    id="health_professiona_specialtie"
                    type="text"
                    class="form-control"
                    placeholder="Especialidade"
                    v-model="typePaymentAppointment.idHealthProfessionalSpecialtie"
                    readonly="readonly"
                  />
                  <label for="health_professiona_specialtie">Especialidade</label>
              </div>
          </div>

          <div class="col-md-3">
              <div class="form-floating">
                  <input
                    id="health_professional_procedure"
                    type="text"
                    class="form-control"
                    placeholder="Procedimento"
                    v-model="typePaymentAppointment.idMedicalProcedure"
                    readonly="readonly"
                  />
                  <label for="health_professional_procedure">Procedimento</label>
              </div>
          </div>
      </div>

      <div class="row mt-2">
          <div class="col-md-4">
             <div class="form-floating">
                  <Money
                     id="price_medical_procedure"
                     class="form-control"
                     placehlder="Preço Procedimento"
                     v-bind="money"
                     v-model="typePaymentAppointment.priceMedicalProcedure"
                     style="padding-top: 15px; padding-bottom: 15px"
                     readonly="readonly"
                  />
                  <label for="price_medical_procedure">Preço Procedimento</label>
             </div>
          </div>

          <div class='col-md-8'>
              <select 
                class="form-select" 
                style="padding-top: 15px; padding-bottom: 15px" 
                v-model="typePaymentAppointment.typePayment"
              >
                  <option value="">TIPO PAGAMENTO</option>
                  <option value="Á Vista">Particular</option>
                  <option value="Plano de Saude">Plano de Saúde</option>
                  <option value="Pix">Pix</option>
                  <option value="Cartão Crédito">Cartão Crédito</option>
                  <option value="Cartão Débito">Cartão Débito</option>
             </select>
          </div>
      </div>
      <div class="row mt-2">
         <OptionsTypePaymentComponent
            :typePayment="typePaymentAppointment.typePayment"
         />
        </div>

        <div class="d-flex d-flex-row mt-2">
            <button class="btn btn-success"><i class="fas fa-check"></i> Salvar</button>
        </div>
    </div>
</template>

<script>
import {Money} from "v-money";
import OptionsTypePaymentComponent from "@/components/FlowPayComponents/OptionsTypePaymentComponent";
export default{
    components:{
        Money,
        OptionsTypePaymentComponent
    },
    props:{
        data:[Object,Array]
    },
    computed:{
        typePayment(){
            return this.typePaymentAppointment.typePayment !== '' 
            && this.typePaymentAppointment.typePayment !== undefined
        }
    },
    data(){
        return{
            typePaymentAppointment:{
                idPatient: '',
                idHealthProfessional: '',
                idHealthProfessionalSpecialtie: '',
                idMedicalProcedure: '',
                priceMedicalProcedure: '',
                typePayment: ''
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
}
</script>

<style></style>