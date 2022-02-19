export function allUpper(value){
    return value.toUpperCase();
}

export function onlyNumbers(value){
    if(value !== 8 && value !== 9){
        if(value < 48 || value > 57){
            if(value < 96 || value > 105){
                return false
            }
        }
    }
}

export function validCnpj(value){
    if(value !== 8 && value !== 9 && value !== 189 && value !== 191 && value !== 190){
        if(value < 48 || value > 57){
            if(value < 96 || value > 105){
                return false
            }
        }
    }
}

export function validTelphone(value){
   if(value !== 8 && value !== 9 && value !== 16 && value !== 57 && value !== 48 && value !== 189 && value !== 32){
       if(value < 48 || value > 57){
           if(value < 96 || value > 105){
               return false
           }
       }
   }
}

export function validZipCode(value){
    if(value !== 8 && value !== 9 && value !== 189){
        if(value < 48 || value > 57){
            if(value < 96 || value > 105){
                return false
            }
        }
    }
}

export function validCpf(value){
    if(value !== 8 && value !== 9 && value !== 189 && value !== 190){
        if(value < 48 || value > 57){
            if(value < 96 || value > 105){
                return false
            }
        }
    }
}

export function formatCurrencyToBRL(value){
    if(value !== "" && value !== undefined){
        return value.toLocaleString('pt-BR',{style: 'currency',currency:'BRL'});
    }
    return '';
}

export function validDate(value){
    if(value !== "" && value !== undefined){
        let date = value.split("/");

        if(date[0] > 31 || date[0] < 1){
            return false;
        }
        if(date[1] > 12 || date[1] < 1){
            return false;
        }
        if(date[2] < 1000){
            return false;
        }
        return true;
    }
    return false
    
}

export function formatDateToBr(value = "",options = null){
    if(value !== ""){
        if(options !== null){
            return new Intl.DateTimeFormat('pt-BR',options).format(value);           
        }
        return new Intl.DateTimeFormat('pt-BR',{
            year: 'numeric',month:'numeric',day: 'numeric',
            hour:'numeric',minute: 'numeric',second: 'numeric'})
            .format(value);
    }
}

export function validString(value,...symbols){
   for(let element of symbols){
       if(value.indexOf(element) >= 1){
           return true;
       }
   }
   return false; 
   
}

export function formatDateFullCalendar(value){
    let month = parseInt(value.getMonth()) + 1;
    let dateFormated = value.getFullYear()+"-";
    dateFormated += month < 10 ? '0'+month+"-" : month+"-";
    dateFormated += parseInt(value.getDate()) < 10 ? '0'+value.getDate()+"T": value.getDate()+"T";
    dateFormated += parseInt(value.getHours()) < 10 ? '0'+value.getHours()+":" : value.getHours()+":";
    dateFormated += parseInt(value.getMinutes()) < 10 ? '0'+value.getMinutes()+":" : value.getMinutes()+":"
    dateFormated += parseInt(value.getSeconds()) < 10 ? '0'+value.getSeconds() : value.getSeconds();
    return dateFormated;
}