<template>
    <SideBar 
      :visible.sync="$store.state.sideBarControl.open" 
      :baseZIndex="1000"
      @hide="hideSideBar"
      >
       <PanelMenu :model="itemsMenus"/>   
    </SideBar>
</template>

<script>
import SideBar from "primevue/sidebar";
import PanelMenu from "primevue/panelmenu";
import UserService from "@/services/UserService";

export default{
    components:{
        SideBar,
        PanelMenu
    },
    menuModel: null,
    mounted(){
        let axios = {}
        this.menuModel = new UserService(this,axios); 
        this.itemsMenus = this.menuModel.getMenuAccess();
    },
    data(){
        return{
            openParam: this.open, 
            itemsMenus: null,
        }
    },
    methods:{
        hideSideBar(){
            this.$store.state.sideBarControl.open = false;
        }
    }
}
</script>

<style scoped>
 .p-sidebar{
     background-color:#B8D6E2;
 }
</style>