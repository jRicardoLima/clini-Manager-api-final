<template>
  <Panel>
    <template #header>
      <h4>Menu Funções</h4>
    </template>

    <div class="row">
      <div class="col-md-12">
        <div class="form-floating">
          <input
            id="occupation_name"
            class="form-control"
            type="text"
            placeholder="Nome"
          />
          <label for="occupation_name">Nome</label>
        </div>
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
export default {
  components:{
    Panel,
    SplitButton
  },
  props:{
    setResultSearch: Function
  },
  data(){
    return {
      itemsOptions:[
        {
          label: "Pesquisar",
          command: () => {
            let response = [
              {
                id: 1,
                name: 'Médico'
              },
              {
                id: 2,
                name: 'Enfermeiro'
              },
              {
                id: 3,
                name: 'Psicologo'
              },
              {
                id: 4,
                name: 'Fisioterapeuta'
              },
              {
                id: 5,
                name: 'Administrativo'
              },
              {
                id: 6,
                name: 'Terapeuta Ocupacional'
              },
              {
                id: 7,
                name: 'Auxiliar Saúde'
              },
              {
                id: 8,
                name: 'Fonoaudiólogo'
              },
              {
                id: 9,
                name: 'Financeiro'
              },
              {
                id: 10,
                name: 'Secretária'
              },
            ];
            setTimeout(() => {
              this.setResultSearch(response,true);
            },3000);
          }
        },
        {
          label: "Cadastrar",
          command: () => {
              this.$router.push({name: "occupationNew"});
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>