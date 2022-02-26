<template>
    <div>
        <Dialog 
          :header="$store.state.dialog.header" 
          :visible.sync="$store.state.dialog.show"
          :containerStyle="{width: '90vw'}"
          >
            <p><b>{{$store.state.dialog.message}}</b></p>

            <template #footer v-if="$store.state.dialog.buttons === true">
                <div class="row">
                    <div class="col" v-if="$store.state.dialog.actionButtonOne !== null">
                      <button class="btn btn-success btn-sm" @click="$store.state.dialog.actionButtonOne">
                        {{$store.state.dialog.labelButtonOne}}
                      </button>
                    </div>
                    <div class="col" v-if="$store.state.dialog.actionButtonOne !== null">
                      <button class="btn btn-success btn-sm" @click="$store.state.dialog.actionButtonTwo">
                         {{$store.state.dialog.labelButtonTwo}}
                      </button>
                    </div>
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script>
import Dialog from "primevue/dialog";

export default{
    components:{
        Dialog
    },
}
</script>

<style scoped>
.p-dialog{
 width: 990px;
}
</style>
