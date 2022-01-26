<template>
  <Dialog
    header="Agenda"
    :visible.sync="displayModal"
    :style="{width: '35vw'}"
    :modal="true"
    :closable="false"
  >
    <div class="row">
      <div class="col-md-3">
        <button
            class="btn btn-success"
            @click="onSchedule"
        >Agendar</button>
      </div>
      <div class="col-md-2">
        <button
            class="btn btn-warning"
            @click="closeModal"
        >Fechar</button>
      </div>
    </div>
    <div class="d-flex justify-content-center mt-2">
      <div class="row">
        <div class="col-md-12">
          <vc-calendar
              :attributes="attributes"
              @dayclick="dayclick"
          />
        </div>
      </div>
    </div>
  </Dialog>

</template>

<script>
import Dialog from "primevue/dialog";

export default {
  components:{
   Dialog
  },
  created() {
    this.daysAviable = this.aviableDatesSchedule();
  },
  props:{
   displayModal: Boolean,
   closeModalSchedule: Function,
   setSchedule: Function,
   healthProfessional: Object
  },
  data(){
    return{
      days: [],
      daysAviable: []
    }
  },
  computed:{
    dates(){
      return this.days.map(day => day.date);
    },
    attributes(){
        return this.dates.map(date => ({
          highlight: true,
          dates: date
        }));
    }
  },
  methods:{
    dayclick(day){
      const index = this.days.findIndex(d => d.id === day.id);

      if(index >= 0 ) {
        this.days.splice(index,1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
    onSchedule(){
      this.setSchedule(this.days);
    },
    closeModal(){
      this.closeModalSchedule();
    },
    aviableDatesSchedule(){
      /**
       * Função que irá pesquisar
       * os dias disponiveis na
       * agenda do profissional e
       * irá exibir no calendar
       * somente os dias liberados
       */
    }
  }
}
</script>

<style scoped>

</style>