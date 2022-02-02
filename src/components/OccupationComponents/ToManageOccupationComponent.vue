<template>
  <div class="card mt-3">
    <TabView :scrollable="true">
      <TabPanel header="Geral">
        <div class="row">
          <div class="col-md-12">
            <div class="form-floating">
              <input
                id="name_occupation"
                type="text"
                class="form-control"
                placeholder="Nome"
                v-model="occupation.name"
              />
              <label for="name_occupation">Nome</label>
            </div>
          </div>
        </div>
      </TabPanel>
      <div class="row mt-2">
        <div class="col-md-2">
          <button
              id="btn_save_occupation"
              class="btn btn-success btn-sm"
              style="width: 250px"
          >
            <i class="fas fa-check"></i> Salvar
          </button>
        </div>
      </div>
    </TabView>
  </div>
</template>

<script>
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";

export default {
  components:{
    TabPanel,
    TabView
  },
  beforeMount() {
    this.editOccupation();
  },
  props:{
    storeOccupation:[]
  },
  data(){
    return{
      occupationEdit: null,
      occupation:{
        name: ""
      }
    }
  },
  methods:{
    editOccupation(){
      if(this.$route.name === "occupationEdit"){
        let id = this.$route.params.id;

        this.occupationEdit = this.storeOccupation.find(element => element.id === id);

        if(this.occupationEdit.name !== null && this.occupationEdit !== ""){
          this.occupation.name = this.occupationEdit.name;
        }
      }
    }
  }
}
</script>

<style scoped>

</style>