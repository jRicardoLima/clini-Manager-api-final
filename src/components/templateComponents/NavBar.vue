<template>
  <Menubar :model="items">
    <template #start>
      <Avatar image="/pessoa.jpg" size="large" shape="circle"/>
    </template>
    <template #end>
      <SplitButton label="Opções" :model="itemsSplitButton" class="p-button-secondary p-mr-3"/>
      <Button label="Sair" icon="pi pi-power-off" class="p-button-secondary p-button-text"/>
    </template>
  </Menubar>
</template>
<script>
import Menubar from "primevue/menubar";
import Avatar from "primevue/avatar";
import Button from "primevue/button";
import SplitButton from "primevue/splitbutton";
export default {
  components:{
    Menubar,
    Avatar,
    Button,
    SplitButton
  },
  data(){
    return{
      items:[
        {
          label:'Pacientes',
          icon:'pi pi-fw pi-users',
          command: () => {
            this.$router.push({name: 'patient'}).catch(() => {});
          }
        },
        {
          label: 'Profissional Saúde',
          icon: 'pi pi-fw pi-heart',
          command: () => {
            this.$router.push('/admin/profissional-saude');
          }
        },
        {
           label: 'Agendamentos',
           icon: 'pi pi-book',
           command: () => {
             this.$router.push({name: 'schedule'}).catch(() => {});
           }
        },
        {
          label:'Cadastros',
          icon: 'pi pi-fw pi-id-card',
          items:[
            {
              label: "Especialidades",
              command: () => {
                this.$router.push({name:"specialtie"}).catch(() => {});
              }
            },
            {
              label: "Procedimentos",
              command: () => {
                this.$router.push({name:"medicalProc"}).catch(() => {});
              }
            },
            {
              label: "Planos de Saúde",
              command: () => {
                this.$router.push({name:'healthInsurance'}).catch(() => {});
              }
            },
            {
              label: "Funcionários",
              command: () => {
                this.$router.push({name:'employee'}).catch(() => {});
              }
            },
            {
              label: "Funções",
              command: () => {
                this.$router.push({name:"occupation"}).catch(() => {});
              }
            },
          ]
        },
        {
          label: "Financeiro",
          icon: "pi pi-money-bill",
          items:[
            {
              label: "Fluxo Caixa"
            },
            {
              label: "Cont Pagar/Receber"
            },
            {
              label: "Conciliação Bancária"
            },
            {
              label: "Fechamento Mensal"
            }
          ]
        }
      ],
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
  }
}
</script>
<style scoped>
.p-menubar{
  margin-top: -40px !important;
  background-color: #CACFD1 !important;
}
</style>