<template>
  <div class="container-fluid">
    <div class="row">
     <div class="col-md-3">
        <button @click="addDados">ADD</button>
     </div>
    </div>
    <div class="row">
    <div class="col-md-12">
      <FullCalendar ref="refCalendar" :options="calendarOptions"/>
    </div>
  </div>
  </div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css';
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import brLocale from "@fullcalendar/core/locales/pt-br";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
export default {
  components:{
    FullCalendar,
  },
  beforeMount(){
    this.calendarOptions.events = [{ id:5,title: 'João Ricardo', date: '2022-02-01T12:30:00' },
          { id:6,title: 'João Miguel', date: '2022-02-01T13:30:00' },
          { id:4,title: 'Jessica Dyana', date: '2022-02-01T14:30:00' },
          { id:3,title: 'João Pedro', date: '2022-02-01T15:30:00' },]
    // this.calendarOptions.events = this.eventsCalendar;  
  },
  data(){
    return {
      calendarOptions:{
         plugins:[dayGridPlugin,interactionPlugin,bootstrap5Plugin],
         themeSystem: 'bootstrap5',
         locales: [brLocale],
         initialView: 'dayGridMonth',
         eventClick:this.testeClic,
         events: ''
      },
    }
  },
 
  methods:{
    testeClic(info){
      let aux = [];

      this.calendarOptions.events.forEach(element => {
          
        if(element.id != parseInt(info.event.id)){
          aux.push(element);
        }
      });
      
      this.calendarOptions.events = aux;
      
      
    },
    addDados(){
      this.calendarOptions.events.push({id:15,title:'Ricardo Lima',date:"2022-02-02T05:20:20"})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>