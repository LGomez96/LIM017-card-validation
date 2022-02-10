import validator from './validator.js';

console.log(validator);

const btnSend = document.getElementById("btnSend");

      btnSend.addEventListener("click",()=>{
         
        const creditCardNumber = document.getElementById("cardNumber").value;
                
        if( validator.isValid(creditCardNumber) == true ){ 
             alert("Tarjeta válida");
        } 
        else {
             alert("Tarjeta inválida");
        }

        
        const creditCardNumber2 = document.getElementById("cardNumber").value;


        validator.maskify(creditCardNumber2);
           
        //ya es string le dimos una variable nueva para evitar confusiiones con isvalid 

      }   


    );

