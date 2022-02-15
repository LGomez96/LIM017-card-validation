import validator from './validator.js';

console.log(validator);

const btnSend = document.getElementById("btnSend");

      btnSend.addEventListener("click",(event)=>{
         event.preventDefault();
         const creditCardNumber = document.getElementById("cardNumber").value;
        
          const isValidDiv = document.getElementById("isValid");
          
          
        //div.result para mostrar msj div.style.display
        if( validator.isValid(creditCardNumber) == true ){ 
             isValidDiv.innerText= validator.maskify(creditCardNumber) + " Es una tárjeta válida."
        } 
        else {
            isValidDiv.innerText= validator.maskify(creditCardNumber) + " Es una tárjeta inválida."
             
        } 
       const hideNumber = document.getElementById("hide");
       hideNumber.style.display= "none";
        
      
        //ya es string le dimos una variable nueva para evitar confusiiones con isvalid 

      }   


    );

