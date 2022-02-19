class UserService{
 
    constructor(vm,axios){
        this.axios = axios;
        this.vm = vm;
        this.dataUser = {
            menus: null,
            permissions: null
        }
    }
    setDataUser(user){
       /**Requisição AJAX */
       console.log(user);
       this.dataUser ={} /** DADOS */ 
    }
    getMenuAccess(){
        this.dataUser.menus = [
            {
              label:'Pacientes',
              icon:'pi pi-fw pi-users',
              command: () => {
                this.vm.$router.push({name: 'patient'}).catch(() => {});
              }
            },
            {
              label: 'Profissional Saúde',
              icon: 'pi pi-fw pi-heart',
              command: () => {
                this.vm.$router.push({name:'queue'}).catch(() => {});
              }
            },
            {
               label: 'Agendamentos',
               icon: 'pi pi-book',
               command: () => {
                 this.vm.$router.push({name: 'schedule'}).catch(() => {});
               }
            },
            {
              label:'Cadastros',
              icon: 'pi pi-fw pi-id-card',
              items:[
                {
                  label: "Especialidades",
                  command: () => {
                    this.vm.$router.push({name:"specialtie"}).catch(() => {});
                  }
                },
                {
                  label: "Procedimentos",
                  command: () => {
                    this.vm.$router.push({name:"medicalProc"}).catch(() => {});
                  }
                },
                {
                  label: "Planos de Saúde",
                  command: () => {
                    this.vm.$router.push({name:'healthInsurance'}).catch(() => {});
                  }
                },
                {
                  label: "Funcionários",
                  command: () => {
                    this.vm.$router.push({name:'employee'}).catch(() => {});
                  }
                },
                {
                  label: "Funções",
                  command: () => {
                    this.vm.$router.push({name:"occupation"}).catch(() => {});
                  }
                },
              ]
            },
            {
              label: "Financeiro",
              icon: "pi pi-money-bill",
              items:[
                {
                  label: "Fluxo Caixa",
                  command:() => {
                    this.vm.$router.push({name:'flowPayment'}).catch(() => {});
                  }
                },
                {
                  label: "Cont Pagar/Receber"
                },
                {
                  label: "Conciliação Bancária"
                },
                {
                  label: "Fechamento Mensal" 
                },
                {
                  label: "Faturamento TISS"
                }
              ]
            }
          ];
          return this.dataUser.menus;
    }

    getPermissionsActions(){
        /** Requisição AJAX */
    }
}
export default UserService