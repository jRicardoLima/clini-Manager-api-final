<template>
  <Dialog
    header="   "
    :visible.sync="displayModal"
    :style="{width: '35vw'}"
    :modal="true"
    :closable="false"
  >
    <div class="row">
      <div class="col-md-4">
       <div class="form-floating">
         <input
             id="cod_patient"
             type="text"
             class="form-control"
             placeholder="Código"
         />
         <label for="cod_patient">Código</label>
       </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="name_patient"
            type="text"
            class="form-control"
            placeholder="Nome"
          />
          <label for="name_patient">Nome</label>
        </div>
      </div>

      <div class="col-md-4">
        <div class="form-floating">
          <input
            id="cpf_patient"
            type="text"
            class="form-control"
            placeholder="CPF"
          />
          <label for="cpf_patient">CPF</label>
        </div>
      </div>
    </div>

    <div class="row mt-2">
      <div class="col-md-2">
        <button
          id="search_patient"
          class="btn btn-success btn-sm"
          style="width: 250px"
        >
          <i class="fas fa-search"></i> Pesquisar
        </button>
      </div>
    </div>
  </Dialog>
</template>

<script>
import Dialog from "primevue/dialog";

export default {
  components:{
    Dialog,
  },
  props:{
    displayModal: Boolean,
    closeModal: Function
  }
}
</script>

<style scoped>

</style>