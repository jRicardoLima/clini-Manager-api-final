<template>
    <div class="container-fluid mt-2">
        <div v-if="currentRouteName === 'room'">
            <MenuRoomComponent :setResultSearch="setResultSearch"/>
            <div v-if="renderTable === true" class="mt-3">
                <TableDataRoomComponent :resultSearch="resultSearch"/>
            </div>
        </div>

        <div v-if="currentRouteName === 'roomNew'">
            <ToManageRoomComponent/>
        </div>
    </div>
</template>

<script>
import MenuRoomComponent from "@/components/RoomComponents/MenuRoomComponent";
import TableDataRoomComponent from "@/components/RoomComponents/TableDataRoomComponent";
import ToManageRoomComponent from "@/components/RoomComponents/ToManageRoomComponent";

export default{
    components:{
        MenuRoomComponent,
        TableDataRoomComponent,
        ToManageRoomComponent
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