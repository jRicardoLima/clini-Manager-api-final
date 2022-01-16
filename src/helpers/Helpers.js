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