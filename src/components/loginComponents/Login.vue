<template>
  <div class="p-d-flex p-jc-center">
    <Card class="backgroundLogin p-shadow-10">
      <template #header>
        <h2>Seja Bem Vindo</h2>
        <h4><strong>CLINI</strong>-MANAGER</h4>
      </template>
      <template #title>
        <p><strong>Login</strong></p>
      </template>
      <template #content>
        <label for="username"><strong>Nome Usuário</strong></label>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <i class="fas fa-user"/>
            <InputText
                id="username"
                type="text"
                v-model="user.nameUser"
            />
          </div>
        </div>

        <label for="password"><strong>Senha</strong></label>
        <div class="p-fluid p-formgrid p-grid">
          <div class="p-field p-col">
            <i class="fas fa-lock"></i>
            <InputText
                id="password"
                type="password"
                v-model="user.password"
            />
          </div>
        </div>

        <div class="p-grid">
          <div class="p-col-4"></div>
          <div class="p-col-4">
            <Button
                label="Logar"
                class="p-button-sm"
                @click="logIn"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>
<script>
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
export default {
  components:{
    Card,
    InputText,
    Button
  },
  data(){
    return{
      user:{
        nameUser: '',
        password: '',
      }
    }
  },
  methods:{
    logIn(){
      console.log(this.user);
      this.$store.commit('displayLoading',{
        showLoading: true,
        message: 'Aguarde'
      });
    }
  }
}
</script>

<style scoped>
.backgroundLogin{
  background-color: #A2F7E8;
}
</style>