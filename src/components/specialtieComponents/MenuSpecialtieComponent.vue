<template>
  <Panel class="p-mt-3">
    <template #header>
      <h4>Menu Especialidades</h4>
    </template>

    <div class="row">
      <div class="col-md-6">
        <div class="form-floating">
          <input
              id="specialtie_cod"
              class="form-control"
              type="text"
              v-model="specialtieSearch.id"
              @keyup="specialtieCod"
              placeholder="Código"
          />
          <label for="specialtie_cod">Código</label>
        </div>
      </div>

      <div class="col-md-6">
        <select class="form-select"  v-model="specialtieSearch.selected" style="padding-top: 15px; padding-bottom: 15px">
          <option value="">SELECIONE A ESPECIALIDADE</option>
          <option
              v-for="(specialtie,index) in specialtiesOptions"
              :key="index"
              :value="specialtie.code"
          >
            {{specialtie.name}}
          </option>
        </select>
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
import SplitButton from "primevue/splitbutton";
import {onlyNumbers} from "../../helpers/Helpers";

export default {
  components:{
    Panel,
    SplitButton
  },
  props:{
    setResultSearch: Function,
  },
  data(){
    return {
      specialtieSearch:{
        id: '',
        selected: '',
      },
      specialtiesOptions:[
        {name:'Psicilogo Detran',code:1},
        {name:'Psicilogo Especialista Autista',code:2},
        {name: 'Clinico Geral',code:3}
      ],
      itemsOptions:[
        {
          label: 'Pesquisar',
          command: () => {
            /* REQUSIÇÃO AJAX */

            /**
             * RECEBE A RESPOSTA DO BACK END
             * E CARREGA OS DADOS NA PROPRIEDADE setResultSearch
             */
            let response = [
              {id: 1,name: 'ESPECIALIDADE 1',CBO: '345 ADE',healthProfessional:[{id: 5, name:'MARIA'}]},
              {id: 2,name: 'ESPECIALIDADE 2',CBO: '574 FGR',healthProfessional:[{id: 5, name:'JOAO'}]},
              {id: 3,name: 'ESPECIALIDADE 3',CBO: '125 FGR',healthProfessional:[{id: 6, name:'JOAO'}]},
              {id: 4,name: 'ESPECIALIDADE 3',CBO: '127 XTU',healthProfessional:[]},
              {id: 5,name: 'ESPECIALIDADE 3',CBO:'',healthProfessional:[]},
              {id: 6,name: 'ESPECIALIDADE 3',CBO:'',healthProfessional:[]},
              {id: 7,name: 'ESPECIALIDADE 3',CBO:'ABC 123',healthProfessional:[{id: 8,name:'MIGUEL'}]},
              {id: 8,name: 'ESPECIALIDADE 3',CBO:'XCE 458',healthProfessional:[{id: 15, name:'JOAO'}]},
              {id: 9,name: 'ESPECIALIDADE 3',CBO: 'OAW 9780',healthProfessional:[
                  {id: 10, name:'JOAO'},
                  {id: 12,name:'MIGUEL'}
                ]},
              {id: 10,name: 'ESPECIALIDADE 50',CBO: 'XTU 4750',healthProfessional:[
                  {id: 11, name:'JOAO'},
                  {id: 20,name:'MIGUEL'}
                ]},
              {id: 11,name: 'ESPECIALIDADE 3',CBO:'478 AEXF',healthProfessional:[
                  {id: 16, name:'JOAO'},
                  {id: 15,name:'MIGUEL'}
                ]},
              {id: 12,name: 'ESPECIALIDADE 3',CBO: 'ERD 7458',healthProfessional:[
                  {id: 20, name:'JOAO'},
                  {id: 16,name:'MIGUEL'}
                ]},
              {id: 13,name: 'ESPECIALIDADE 3',CBO: 'UAW 8899',healthProfessional:[
                  {id: 5, name:'JOAO'},
                  {id: 3,name:'MIGUEL'}
                ]},
              {id: 14,name: 'ESPECIALIDADE 3',CBO: 'XMC 7789',healthProfessional:[
                  {id: 2, name:'JOAO'},
                  {id: 4,name:'MIGUEL'}
                ]},
              {id: 15,name: 'ESPECIALIDADE 3',CBO: 'XTO 8711',healthProfessional:[
                  {id: 3, name:'JOAO'},
                  {id: 4,name:'MIGUEL'}
                ]},
              {id: 16,name: 'ESPECIALIDADE 3',CBO:'5478 ADFC',healthProfessional:[
                  {id: 7, name:'JOAO'},
                  {id: 6,name:'MIGUEL'}
                ]},
              {id: 17,name: 'ESPECIALIDADE 3',CBO: '5412 XETR',healthProfessional:[
                  {id: 8, name:'JOAO'},
                  {id: 1,name:'MIGUEL'}
                ]},
              {id: 18,name: 'ESPECIALIDADE 3',CBO:'5412 XDE',healthProfessional:[
                  {id: 6, name:'JOAO'},
                  {id: 1,name:'MIGUEL'}
                ]},
              {id: 19,name: 'ESPECIALIDADE 3',CBO: '5412 XEUT',healthProfessional:[
                  {id: 10, name:'JOAO'},
                  {id: 12,name:'MIGUEL'}
                ]},
              {id: 20,name: 'ESPECIALIDADE 3',CBO: '5412 XERT',healthProfessional:[
                  {id: 14, name:'JOAO'},
                  {id: 9,name:'MIGUEL'}
                ]},
            ]
            setTimeout(() => {
              this.setResultSearch(response,true);
            },3000);
            /* FIM REQUISIÇÃO AJAX*/
          }
        },
        {
          label: 'Cadastrar',
          command: () => {
            this.$router.push({name: 'specialtie_new'}).catch(() => {});
          }
        }
      ]
    }
  },
  methods:{
    specialtieCod(event){
      if(!onlyNumbers(event.keyCode) && onlyNumbers(event.keyCode) !== undefined){
        this.specialtieSearch.id = '';
        this.$toast.add({
          severity:'warn',
          summary:'INFORMAÇÃO DO SISTEMA',
          detail:'CAMPO PERMITE SOMENTE NUMEROS',
          life:1500
        });
      }
    },
    newSpecialties(){
      this.$router.push({name: 'specialtie_new'}).catch(() => {});
    }
  }
}
</script>

<style scoped>

</style>