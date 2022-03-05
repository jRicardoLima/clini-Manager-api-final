<template>
  <div class="card mt-3">
      <TabView :scrollable="true">
          <TabPanel header="Geral">
              <div class="row">
                  <div class="col-md-12">
                     <div class="form-floating">
                         <input
                            id="name_room"
                            type="text"
                            class="form-control"
                            placeholder="Nome Sala"
                            v-model="room.name"
                            @keyup="upWord"
                            
                         />
                         <label for="name_room">Nome Sala</label>
                     </div>
                  </div>
              </div>
          </TabPanel>

          <TabPanel header="Configuração Salas">
              <div class="row">
                  <div class="col-md-3">
                      <select class="form-select" v-model="room.employee_health">
                          <option value="">SELECIONE O PROFISSIONAL</option>
                          <option 
                             v-for="(employ,index) in listEmployeeHealth" 
                             :key="index"
                             :value="{id:employ.id,name: employ.name}"
                             >
                              {{employ.name}}  
                          </option>
                      </select>
                  </div>

                  <div class="col-md-3">
                      <vc-date-picker
                        mode="datetime"
                        is24hr
                        v-model="room.date"
                      >
                      <template v-slot="{inputValue,inputEvents}">
                          <input
                            class="form-control"
                            :value="inputValue"
                            v-on="inputEvents"
                          />
                      </template>
                      </vc-date-picker>
                  </div>

                  <div class="col-md-3">
                      <button 
                        class="btn btn-info btn-secondary btn-sm buttonAdd"
                        @click="addRoomConfig">Adicionar</button>
                  </div>

                  <div class="col-md-3">
                      <button 
                       class="btn btn-danger btn-secondary btn-sm buttonRemove"
                       @click="removeRoomConfig"
                       >Remover</button>
                  </div>
              </div>

              <div class="row">
                  <div class="d-flex d-flex-row mt-2">
                      <ListBox
                        v-model="selectedEmployee"
                        :options="listPublic"
                        listStyle="max-height:80px"
                      />
                  </div>
              </div>
          </TabPanel>

          <div class="d-flex d-flex-row mt-2">
              <button 
                id="btn_save_romm"
                class="btn btn-success btn-sm"

                >
                <i class="fas fa-check"></i> Salvar
              </button>
          </div>
      </TabView>
  </div>  
</template>

<script>
import TabPanel from "primevue/tabpanel";
import TabView from "primevue/tabview";
import ListBox from "primevue/listbox";
import {allUpper,formatDateToBr} from "@/helpers/Helpers";

export default{
    components:{
        TabPanel,
        TabView,
        ListBox
    },
    data(){
       return{
           listEmployeeHealth:[
                   {
                       id: 35,
                       name: 'FUNC 1'

                   },
                   {
                       id: 22,
                       name: 'FUNC 10'

                   },
                   {
                       id: 15,
                       name: 'FUNC 4'

                   },
                   
               ],
           listPublic: [],    
           selectedEmployee: null,
           room:{
               name: '',
               employee_health:'',
               date: new Date(),
               listEmployee: []

           }
       }     
    },
    methods:{
        upWord(){
            this.room.name = allUpper(this.room.name);
        },

        addRoomConfig(){
          
          if(this.room.employee_health === "" || this.room.employee_health === undefined){
               this.$toast.add({
                    severity: 'warn',
                    summary: 'INFORMAÇÃO DO SISTEMA',
                    detail: 'SELECIONE UM PROFISSIONAL DE SAÚDE',
                    life: 1500
                });
          } else {
            this.room.listEmployee.push({ 
                health_professional_id: this.room.employee_health.id,
                health_professional_name:this.room.employee_health.name,
                dateReservedRoom: this.room.date
              });
             let nameEmployee = this.room.employee_health.name;
             let employeeId = this.room.employee_health.id;
             let dateRoomEmployee = formatDateToBr(this.room.date); 
            this.listPublic.push(`Cód ${employeeId}: ${nameEmployee} - ${dateRoomEmployee}`);
          }
        },
        removeRoomConfig(){
           let id = this.__searchIdRoomConfig(this.selectedEmployee);
                                  
           this.room.listEmployee = this.room.listEmployee.filter(element => 
                                                                  element.health_professional_id != id);
            
           this.listPublic = this.listPublic.filter(element => this.__searchIdRoomConfig(element) != id);

        },
       __searchIdRoomConfig(value){
          if(value === null || value === undefined){
              this.$toast.add({
                    severity: 'warn',
                    summary: 'INFORMAÇÃO DO SISTEMA',
                    detail: 'SELECIONE UM PROFISSIONAL DE SAÚDE PARA REMOVER',
                    life: 1500
                });
          } else {
              let id = parseInt(value.slice(value.indexOf("Cód")+3,value.indexOf(":")));
              return id;
          }     
        }
    },
}
</script>

<style scoped>
.p-multiselect {
  width: 19rem;
}
</style>