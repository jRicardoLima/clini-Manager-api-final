<template>
    <div>
        <div class="row">
            <div class="col-md-12">
              <FullCalendar
                :options="optionsData"
            />
            </div>
        </div>

        <div class="d-flex d-flex-row mt-2">
            <button class="btn btn-success">
                Salvar
            </button>
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

export default{
 components:{
     FullCalendar
 },
 props:{
     setData: Object
 },
 data(){
     return{
         optionsData: {
              plugins:[dayGridPlugin,interactionPlugin,bootstrap5Plugin],
              themeSystem: 'bootstrap5',
              locales: [brLocale],
              initialView: 'dayGridMonth',
              headerToolbar: {
                  start: 'title',
                  center:'',
                  end: 'today prev,next'
              },
              eventClick: this.clickEvent,
              events: []
         }
     }
 },
 watch:{
    setData(){
           this.optionsData.events.push(this.setData);

           this.optionsData.events.sort((elementOne,elementTwo) => {
               let dateOne = new Date(elementOne.date);
               let dateTwo = new Date(elementTwo.date);
               
               if(dateOne > dateTwo){
                   return 1;
               }
               if(dateOne < dateTwo){
                   return -1;
               }
               return 0;
           });
        
    },
 },
 methods:{
     clickEvent(info){

         this.$store.state.dialog.show = true;
         this.$store.state.dialog.message = "Qual Ação Deseja Realizar?";
         this.$store.state.dialog.header = "Informação do Sistema";
         this.$store.state.dialog.buttons = true;
         this.$store.state.dialog.actionButtonOne = () => console.log(info.event.id);
         this.$store.state.dialog.actionButtonTwo = () => console.log(info.event.title);
         this.$store.state.dialog.labelButtonOne = "Detalhes";
         this.$store.state.dialog.labelButtonTwo = "Remover";
     },
 }

}
</script>

<style scoped>

</style>
