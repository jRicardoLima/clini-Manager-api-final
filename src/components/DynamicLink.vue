<template>
    
    <div>
        <div v-if="mostrar === true && multiple === true">
        <div class="row mt-2" v-for="(data,index) in param" :key="index">
          <div class="col-md">
               <a class="link-success link-style" :href="data.href" :download="data.nameFile">
               <span v-if="data.typeMime === 'pdf'">
                   <i class="fas fa-file-pdf"></i>
               </span>
               <span v-else>
                   <i class="fas fa-file-image"></i>
               </span>
               <b>{{data.label}}</b>
           </a>
          </div>
        </div>

        <div v-if="mostrar === true && multiple === false">
        <div class="row mt-2">
            <div class="col-md">
                <a class="link-sucess link-style" :href="param.href" :download="param.nameFile">
                    <b>{{param.label}}</b>
                </a>
            </div>
        </div>
    
    </div> 
    </div>
    </div>
</template>

<script>
 
 export default{
     props:{
         param: [Array,Object],
         mostrar: Boolean,
         multiple: Boolean
     },
     data(){
         return{
             showLinks: false,

         }
     },
     computed:{
         paramBool(){
             if(this.param !== undefined && this.param.length > 0){
                return true;    
             }
             return false;
         },
     },
     methods:{
         showL(){
             
         }
     }
 }
</script>

<style scoped>
    .link-style{
     text-decoration: none;   
    }
</style>