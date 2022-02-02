/<template>
  <Panel>
    <template #header>
      <h4>Fila de Espera</h4>
    </template>

    <div class="row">
      <div class="col-md-2">
        <div class="form-check">
          <input
            id="queue_day"
            class="form-check-input"
            type="checkbox"
            v-model="queueDay"
          />
          <label class="form-check-label" for="queue_day">Agenda do Dia</label>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-3">
        <div class="form-floating">
          <InputMask
            id="date_schedule_ini"
            mask="99/99/9999"
            placeholder="Periodo Inicial"
            class="form-control"
            v-model="queue.dateInitial"
            :readonly="queueDay === true"
          />
          <label for="date_schedule_ini">Periodo Inicial</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating">
          <InputMask
            id="date_schedule_fin"
            mask="99/99/9999"
            placeholder="Periodo Final"
            class="form-control"
            v-model="queue.dateFinal"
            :readonly="queueDay === true"
          />
          <label for="date_schedule_fin">Periodo Final</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating">
          <input
            id="name_patient"
            type="text"
            class="form-control"
            placeholder="Nome Paciente"
            v-model="queue.namePatient"
            @keyup="upWord('name_patient')"
            :readonly="queueDay === true"
          />
          <label for="name_patient">Nome Paciente</label>
        </div>
      </div>

      <div class="col-md-3">
        <div class="form-floating">
          <input
            id="cpf_patient"
            type="text"
            class="form-control"
            placeholder="CPF Paciente"
            v-model="queue.cpfPatient"
            @keyup="validateCpfPatient"
            :readonly="queueDay === true"
          />
          <label for="cpf_patient">CPF Paciente</label>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-1">
        <button
          id="btn_search_queue"
          class="btn btn-success"
          @click="searchQueue"
        >
          Pesquisar
        </button>
      </div>
    </div>
  </Panel>
</template>

<script>
import Panel from "primevue/panel";
import InputMask from "primevue/inputmask";
import {allUpper, validCpf} from "@/helpers/Helpers";

export default {
  components:{
    Panel,
    InputMask
  },
  props:{
    setResultSearch: Function,
    setQueueOfDay: Function,
  },
  data(){
    return {
      queueDay:true,
      queue:{
        dateInitial: '',
        dateFinal: '',
        namePatient: '',
        cpfPatient: ''
      }
    }
  },
  watch:{
    queueDay(){
      if(this.queueDay === true){
        this.setQueueOfDay(true);
      } else {
        this.setQueueOfDay(false);
      }
    }
  },
  methods:{
    upWord(nameInput){
      switch (nameInput){
        case 'name_patient':
          this.queue.namePatient = allUpper(this.queue.namePatient);
          break;
      }
    },
    validateCpfPatient(event){
      if(!validCpf(event.keyCode) && validCpf(event.keyCode) !== undefined){
        this.queue.cpfPatient = "";
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CARACTERE NÃO PERMITIDO',
          life:1500
        });
      }
    },
    searchQueue(){
      let response = [
        {
          id: 1,
          dates: [
            {
              id: 1,
              scheduled: '25/01/2022'
            },
            {
              id: 2,
              scheduled: '29/01/2022'
            },
            {
              id: 3,
              scheduled: '05/02/2022'
            }
          ],
          patient:{
            id: 6,
            name: 'João Ricardo'
            /**
             * Restate dos dados do paciente
             */
          },
          healthProfessional: {
            id: 15,
            name: 'Jessica Dyana Mello dos Santos Lima',
            /**
             * Restante dos dados do profissional
             */
            specialtie: {
              id: 1,
              name: 'Psicologo'
              /**
               * Restante dos dados da especialidade
               */
            },
            medicalProcedure: {
              id: 3,
              name: 'TCC'
              /**
               * Restante dos dados do procedimento
               */
            }
          }
        },
        {
          id: 100,
          dates: [
            {
              id: 4,
              scheduled: '25/01/2022'
            },
            {
              id: 10,
              scheduled: '08/03/2022'
            },
            {
              id: 9,
              scheduled: '15/03/2022'
            }
          ],
          patient:{
            id: 50,
            name: 'João Miguel'
            /**
             * Restate dos dados do paciente
             */
          },
          healthProfessional: {
            id: 22,
            name: 'Marta Aparecidade Vasconcelos',
            /**
             * Restante dos dados do profissional
             */
            specialtie: {
              id: 15,
              name: 'Dermatologista'
              /**
               * Restante dos dados da especialidade
               */
            },
            medicalProcedure: {
              id: 18,
              name: 'Consulta normal'
              /**
               * Restante dos dados do procedimento
               */
            }
          }
        }
      ];
      setTimeout(() => {
        this.setResultSearch(response,true);
      },3000);
    }
  }
}
</script>

<style scoped>

</style>