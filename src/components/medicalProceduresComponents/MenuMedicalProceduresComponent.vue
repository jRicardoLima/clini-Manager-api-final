<template>
  <Panel>
    <template #header>
      <h4>Menu Procedimentos Médicos</h4>
    </template>
    <div class="row">
      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="medical_proc_id"
            class="form-control"
            type="text"
            placeholder="Código"
            @keyup="procedureCod"
            v-model="medicalProc.id"
          />
          <label for="medical_proc_id">Código</label>
        </div>
      </div>

      <div class="col-md-4">
       <div class="form-floating">
         <Money
             id="medical_proc_price"
             v-bind="money"
             v-model="medicalProc.price"
             class="form-control"
             style="padding-top: 15px; padding-bottom: 15px"
         ></Money>
         <label for="medical_proc_price">Valor</label>
       </div>
      </div>

      <div class="col-md-4 mt-2">
        <AutoComplete
            :source="items"
            results-display="termo"
            placeholder="Pesquisar Especialidades"
            input-class="form-control"
            @selected="procedureSelected"
        />
      </div>
    </div>
    <div class="row mt-2">
     <div class="col-md-2">
       <SplitButton
           label="Selecione"
           :model="itemsOptions"
           class="p-button-help"
           style="width: 200px;"
       />
     </div>
    </div>
  </Panel>
</template>

<script>
import Panel from "primevue/panel";
import {Money} from "v-money"
import AutoComplete from "vuejs-auto-complete";
import SplitButton from "primevue/splitbutton";
import {onlyNumbers} from "@/helpers/Helpers";
export default {
  components:{
    Panel,
    Money,
    AutoComplete,
    SplitButton
  },
  props:{
    setResultSearch: Function
  },
  data(){
    return{
      medicalProc:{
        id: '',
        idSelected: '',
        price: 0.00,
      },
      money:{
        decimal: ',',
        thousands: '.',
        prefix: 'R$ ',
        suffix: '',
        precision: 2,
        masked: false
      },
      itemsOptions:[
        {
          label: 'Pesquisar',
          command: () => {
            let response = [
              {
                id: 1,
                cod_termo: 10101012,
                termo: "Consulta em consultório (no horário normal ou preestabelecido)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: false,

              },
              {
                id: 2,
                cod_termo: 10101020,
                termo: "Consulta em domicílio",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2009",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2010",
                padrao_tiss: true,

              },
              {
                id: 3,
                cod_termo: 10101039,
                termo: "Consulta em pronto socorro",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2009",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 4,
                cod_termo: 10102019,
                termo: "Visita hospitalar (paciente internado)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 5,
                cod_termo: 10103015,
                termo: "Atendimento ao recém-nascido em berçário",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 6,
                cod_termo: 10103023,
                termo: "Atendimento ao recém-nascido em sala de parto (parto normal ou operatório de baixo risco)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 7,
                cod_termo: 10103031,
                termo: "Atendimento ao recém-nascido em sala de parto (parto normal ou operatório de alto risco)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 8,
                cod_termo: 10104011,
                termo: "Atendimento do intensivista diarista (por dia e por paciente)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 9,
                cod_termo: 10104020,
                termo: "Atendimento médico do intensivista em UTI geral ou pediátrica (plantão de 12 horas - por paciente)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 10,
                cod_termo: 10105034,
                termo: "Transporte extra-hospitalar terrestre de pacientes graves, 1a hora - a partir do deslocamento do médico - acompanhamento médico",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 11,
                cod_termo: 10105042,
                termo: "Transporte extra-hospitalar terrestre de pacientes graves, por hora adicional - até o retorno do médico à base - acompanhamento médico",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 12,
                cod_termo: 10105050,
                termo: "Transporte extra-hospitalar aéreo ou aquático de pacientes graves, 1a hora - a partir do deslocamento do médico - acompanhamento médico",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 13,
                cod_termo: 10105069,
                termo: "Transporte extra-hospitalar aéreo ou aquático de pacientes graves, por hora adicional - acompanhamento médico",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 14,
                cod_termo: 10105077,
                termo: "Acompanhamento médico para transporte intra-hospitalar de pacientes graves, com ventilação assistida, da UTI para o centro de diagnósitco",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 15,
                cod_termo: 10106014,
                termo: "Aconselhamento genético",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 16,
                cod_termo: 10106030,
                termo: "Atendimento ao familiar do adolescente",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 17,
                cod_termo: 10106049,
                termo: "Atendimento pediátrico a gestantes (3o trimestre)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 18,
                cod_termo: 10106065,
                termo: "Exame de aptidão física e mental, ou em portadores de mobilidade reduzida, para fins de inscrição ou renovação da CNH (Carteira Nacional de Habilitação)",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 19,
                cod_termo: 10106073,
                termo: "Junta Médica (três ou mais profissionais) - destina-se ao esclarecimento diagnóstico ou decisão de conduta em caso de difícil solução - por profissiona",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 20,
                cod_termo: 10106090,
                termo: "Junta Médica - pagamento de honorários médicos referente a 3a opinião, conforme resolução Consu no 8",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
              {
                id: 21,
                termo: "Perícia médica",
                desc_detalhada: "",
                data_ini_vigencia: "13/02/2019",
                data_fim_vigencia: "",
                data_fim_implantacao: "15/10/2021",
                padrao_tiss: true,

              },
            ];

            setTimeout(() => {
              this.setResultSearch(response,true);
            },3000);
          }
        },
        {
          label: 'Cadastrar',
          command: () => {
            this.$router.push({name:"medicalProcNew"}).catch(() => {});
          }
        },
        {
          label: 'Definir Valores',
          command: () => {
            this.$router.push({name:"priceMedicalProcedure"}).catch(() => {});
          }
        },
        {
          label: 'Relatórios',
          command: () => {

          }
        }
      ],
      items:[
        {
          id: 1,
          termo: "Consulta em consultório (no horário normal ou preestabelecido)",
        },
        {
          id: 2,
          termo: "Consulta em domicílio",
        },
        {
          id: 3,
          termo: "Consulta em pronto socorro",
        },
        {
          id: 4,
          termo: "Visita hospitalar (paciente internado)",
        },
        {
          id: 5,
          termo: "Atendimento ao recém-nascido em berçário",
        },
        {
          id: 6,
          termo: "Atendimento ao recém-nascido em sala de parto (parto normal ou operatório de baixo risco)",
        },
        {
          id: 7,
          termo: "Atendimento ao recém-nascido em sala de parto (parto normal ou operatório de alto risco)",
        },
        {
          id: 8,
          termo: "Atendimento do intensivista diarista (por dia e por paciente)",
        },
        {
          id: 9,
          termo: "Atendimento médico do intensivista em UTI geral ou pediátrica (plantão de 12 horas - por paciente)",
        },
        {
          id: 10,
          termo: "Transporte extra-hospitalar terrestre de pacientes graves, 1a hora - a partir do deslocamento do médico - acompanhamento médico",
        },
        {
          id: 11,
          termo: "Transporte extra-hospitalar terrestre de pacientes graves, por hora adicional - até o retorno do médico à base - acompanhamento médico",
        },
        {
          id: 12,
          termo: "Transporte extra-hospitalar aéreo ou aquático de pacientes graves, 1a hora - a partir do deslocamento do médico - acompanhamento médico",
        },
        {
          id: 13,
          termo: "Transporte extra-hospitalar aéreo ou aquático de pacientes graves, por hora adicional - acompanhamento médico",
        },
        {
          id: 14,
          termo: "Acompanhamento médico para transporte intra-hospitalar de pacientes graves, com ventilação assistida, da UTI para o centro de diagnósitco",
        },
        {
          id: 15,
          termo: "Aconselhamento genético",
        },
        {
          id: 16,
          termo: "Atendimento ao familiar do adolescente",
        },
        {
          id: 17,
          termo: "Atendimento pediátrico a gestantes (3o trimestre)",
        },
        {
          id: 18,
          termo: "Exame de aptidão física e mental, ou em portadores de mobilidade reduzida, para fins de inscrição ou renovação da CNH (Carteira Nacional de Habilitação)",
        },
        {
          id: 19,
          termo: "Junta Médica (três ou mais profissionais) - destina-se ao esclarecimento diagnóstico ou decisão de conduta em caso de difícil solução - por profissiona",
        },
        {
          id: 20,
          termo: "Junta Médica - pagamento de honorários médicos referente a 3a opinião, conforme resolução Consu no 8",
        },
        {
          id: 21,
          termo: "Perícia médica",
        },
      ]
    }
  },
  methods:{
    procedureCod(event){
      if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
        this.medicalProc.id = ""
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CAMPO PERMITE SOMENTE NUMEROS',
          life:1500
        });
      }
    },
    procedureSelected(procedure){
      this.medicalProc.idSelected = procedure.value
    },
  }
}
</script>

<style scoped>

</style>