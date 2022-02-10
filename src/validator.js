const validator = {
  // ...
 isValid: function IsValidCard (creditCardNumber) {
  //Para hacer validaciones
  //Si contiene letras
  //Si se  ingresa un campo vacío
    
  //convirtiendo nuestra cadena en array y revirtiendola
  const array = Array.from(creditCardNumber).reverse;
  //creando una variable para sumar.
  addNumbers = 0;
  //hacemos el recorrido
  for (let i =0; i<array.length; i++)
  //Establecemos condición para el número par. 
  if ((i+1)%2 === 0){
    array*=2;
  if(array[i]>=10){
    array -= 9;
    }
    addNumbers += parseInt(array);
  }
  

  
  
  
  }

  

  
  

 },
 //..

  maskify: function maskifyCard (creditCardNumber){
       const hideNum = [];
       for(let i= 0; i < creditCardNumber.length;i++){
         if(i< creditCardNumber.lenght -4){
         hideNum.push("#");
       } else{
         hideNum.push (creditCardNumber[i]);
       }
       
      }
    return hideNum.join("");
  
  },
}; 
export default validator;
