<template>
  <div>
    <Menubar>
    <template #start>
      <Button 
        icon="pi pi-align-justify" 
        class="p-button-rounded" 
        @click="sideBarOpen"
      />
    </template>
    <template #end>
      <SplitButton label="Opções" :model="itemsSplitButton" class="p-button-secondary p-mr-3"/>
      <Button label="Sair" icon="pi pi-power-off" class="p-button-secondary p-button-text"/>
    </template>
  </Menubar>
  </div>
</template>
<script>
import Menubar from "primevue/menubar";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";

export default {
  components:{
    Menubar,
    Button,
    SplitButton
  },
  data(){
    return{
      itemsSplitButton:[
        {
          label: "Alterar Usuário/Senha",
          icon: "pi pi-user-edit",
          command: () => {

          },
        },
        {
          label: "Gerenciar Usuário",
          icon: "pi pi-user",
          command: () => {

          }
        },
        {
          label: "Configuração Sistema",
          icon: "pi pi-cog",
          command: () => {

          }
        }
      ]
    }
  },
  methods:{
    sideBarOpen(){
      if(this.$store.state.sideBarControl.open == true){
        this.$store.state.sideBarControl.open = false;
      } else {
        this.$store.state.sideBarControl.open = true
      }
    }
  }
}
</script>
<style scope>

</style>