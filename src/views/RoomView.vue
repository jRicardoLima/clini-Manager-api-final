<template>
    <div class="container-fluid mt-2">
        <div v-if="currentRouteName === 'room'">
            <MenuRoomComponent :setResultSearch="setResultSearch"/>
        </div>
    </div>
</template>

<script>
import MenuRoomComponent from "@/components/RoomComponents/MenuRoomComponent";

export default{
    components:{
        MenuRoomComponent
    },
    data(){
        return{
          resultSearch: null,
          search: false
        }
    },
    computed:{
        currentRouteName(){
            return this.$route.name;
        },
        renderTable(){
            return this.resultSearch !== null && this.search
        }
    },
    methods:{
        setResultSearch(results,search){
      if((results !== null || results !== []) && search){
        this.resultSearch = results;
        this.search = search;
       }
     }
    }
}
</script>

<style scoped></style>