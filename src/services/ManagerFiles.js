class ManagerFiles{

    constructor(multiple = false){
        this.fileBase64 = [];
        this.filesBase64 = [];
        this.multiple = multiple;
        this.mimes = [];
    }

    createBase(eventFile){
        const instance = this;
        if(this.multiple){
            for(let file of eventFile){
              
                let reader = new FileReader();

                reader.onload = (e) => {
                    instance.filesBase64.push(e.target.result);
                }
                reader.readAsDataURL(file);
               
               
            }
        } else {
            //let file = eventFile.target.files || eventFile.dataTransfer.files;
           // let file = eventFile;
           console.log(eventFile)
        //     let reader = new FileReader();
        //    reader.onload = (e) => {
        //        instance.fileBase64.push(e.target.result);
        //     }
        //     reader.readAsDataURL(file);     
        }   
        
    }

    convertBaseToDownload(){
        if(this.multiple){
            let count = 0;
            let files = [];
           for(let file of this.filesBase64){
               let b64 = file.slice(file.indexOf(",")+1);
               let mime = file.slice(file.indexOf("/")+1,file.indexOf(";"));
               count += 1;
               files.push({
                   href: `data:application/octet-stream;base64,${b64}`,
                   label: `Arquivo_${count}.${mime}`,
                   nameFile: `Arquivo_${count}.${mime}`,
                   typeMime: mime,
               });
               this.mimes.push({typeMime: mime});
           }
           return files;
        } else {
            let files = [];
            for(let file in this.fileBase64){
                let b64 = file.slice(file.indexOf(",")+1);
                let mime = file.slice(file.indexOf("/")+1,
                                                 file.indexOf(";")); 
                this.mimes.push({typeMime: mime});
                
                files.push({
                    href: `data:application/octet-stream;base64,${b64}`,
                     label: `Arquivo_1.${mime}`,
                     nameFile: `Arquivo_1.${mime}`,
                     typeMime: mime,
              });
            }           
        }
    }
}
export default ManagerFiles