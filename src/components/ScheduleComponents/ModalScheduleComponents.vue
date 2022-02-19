<template>
  <Dialog
    header="Agenda"
    :visible.sync="displayModal"
    :style="{width: '125vw'}"
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
      <p>{{date}}</p>
    </div>
    <div class="d-flex justify-content-center mt-2">
      <div class="row">
        <div class="col-md-12">
          <FullCalendar :options="calendarOptions"/>
         <!--<vc-calendar
              :attributes='attributes'
              @dayclick="dayclick"
              is-dark
             
          /> !-->
          <!--<date-picker
            mode="dateTime"
            v-model="date"
            :valid-hours="validHours"
            :available-dates="{start:new Date()}"
            is-dark
            is24hr
          />-->
        </div>
      </div>
    </div>
  </Dialog>

</template>

<script>
import Dialog from "primevue/dialog";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components:{
   Dialog,
   FullCalendar,
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
      calendarOptions:{
        plugins:[dayGridPlugin,interactionPlugin],
        initialView: 'dayGridMonth'
      },
      days: [],
      date: null,
      daysAviable: [],
      validHours: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20],
    }
  },
  computed:{
    dates(){
      return this.days.map(day => day.date);
    },
    attributes(){
        return this.dates.map(date => ({
          key: 'today',
          highlight: '',
          dot: true,
          bar: true,
          dates: date,
          excludeDates: new Date(2022,1,5)
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
    setShowDate(d){
      this.showDate = d;
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