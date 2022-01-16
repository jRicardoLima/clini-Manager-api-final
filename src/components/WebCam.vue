<template>
<div>
 <Dialog
  header="Foto Paciente"
  :visible.sync="displayModal"
  :style="{width: '50vw'}"
  :modal="true"
  :closable="false"
 >
   <div class="row">
     <div class="col-md-4">
       <video
           :autoplay="isOpen"
           ref="webCamera"
           class="styleVideo"
       ></video>
     </div>
     <div class="col-md-4">
       <button class="btn btn-success" @click="takeSnapShot">
         Tirar Foto
       </button>
     </div>
   </div>
   <div  v-if="showPhoto" class="photo-patient">
     <img
         :src="image"
     />
   </div>
   <div class="row">
     <div class="col-md-12">
       <canvas ref="canvas"></canvas>
     </div>
   </div>
   <div class="row">
     <div class="col-md-4">
       <button class="btn btn-info" @click="closeCamera">Fechar</button>
     </div>
   </div>
 </Dialog>
</div>
</template>

<script>
import Dialog from "primevue/dialog";
export default {
  components:{
    Dialog
  },
  mounted() {
    this.loadCamera();
  },
  props:{
    displayModal: Boolean,
    isOpen: Boolean,
  },
  data(){
    return{
      showPhoto: false,
      image: "",
    }
  },
  methods:{
    loadCamera(){
      let video = this.$refs.webCamera;

      video.setAttribute('autoplay','');
      video.setAttribute('muted','');
      video.setAttribute('playsinline','');

      if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({audio:false,video: {facingMode: 'user'}})
        .then(stream => {
          video.srcObject = stream;
        }).catch(error => {
          alert('Falha'+error);
        });
      }
    },
    closeCamera(){
      const tracks = this.$refs.webCamera.srcObject.getTracks();
      tracks.forEach(track => {
        track.stop();
      });
      this.displayModal = false;
    },
    takeSnapShot(){
      const video = this.$refs.webCamera;

      const canvas = this.$refs.canvas;
      //canvas.width = video.videoWidth;
      //canvas.height = video.videoHeight;
      canvas.width = 180;
      canvas.height = 180;
      let ctx = canvas.getContext('2d');

      ctx.drawImage(video,0,0,canvas.width,canvas.height);

      this.image = canvas.toDataURL('image/jpeg');
    }
  }
}
</script>

<style scoped>
  .styleVideo{
    height: 180px;
  }
  .photo-patient{
    margin-right: -120px;
    border: 4px solid black;
  }
</style>