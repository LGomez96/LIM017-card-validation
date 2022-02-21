const validator = {
  // ...
 isValid: function IsValidCard (creditCardNumber) {
  //Para hacer validaciones
  //Si contiene letras
  //Si se  ingresa un campo vacío
    
  //convirtiendo nuestra cadena en array 
  let array = Array.from(creditCardNumber)
  // declaramos una variable en donde guardar nuestro numero de tarjeta ("NDT")
  let array0 = [];
  let addNum = 0;
  //creamos un ciclo de for para la variable que convirtio nuestro strin en array y asi poder aumentarle posiciones
  for (let i=0; i<array.length; i++){
    array0.push(parseInt(array[i]));
    //a nustra nueva variable le damos un push para que agg los numeros ingresados.
  }
  // inviertiendo el numero de nuestro array declarado para el NDT
  array0.reverse();
  // creamos un ciclo de for para poder interactuar con las posiciones del NDT
  for(let i=0;i<array0.length;i++){
  //condicionamos el resultado filtrandolo por las posiciones pares
  if((i+1)%2==0){
    //las posiciones empiezan en 0 por lo que las pares inician en la 1 si esto es verdad entonces:
    array0[i]*=2;
    //se multiplican por dos, "si" el resultado es dos digitos >9 entonces:
    if(array0[i]>9){
    // le restamos 9 seria como: array invertida es igual array invertida menos 9
    //operador compuesto, por ej: =10 => "10-9=1" == "10= 1+0=1"  
      array0[i]-=9;
    }
    //sumamos los nuevos numeros que nos dio para poder sumarlo con los que ya eran de 1 digito:
    addNum+=array0[i]; 
  }
  //si no son posiciones pares nos dará falso, entonces para falso vamos a decir que:
  else{
    //sumemos sus posiciones para acumularlas con el resultado de las posiciones pares:
    addNum+=array0[i];
  }
 }
  //Establezcamos los resultados; para que sea valido el algoritmo debe:
  //La suma resultante ser un número entero "si" se divide entre 10 entonces:
  if (addNum%10 === 0){
    return true;
  }
  else{
    return false;
  }
  
    //finalizamos cerrando nuestro primer objeto con "," 
   

},
 //..

  maskify: function maskifyCard (creditCardNumber){
    return creditCardNumber.replace(/.(?=.{4})/g, "#");
  },
  

   
}; 
export default validator;
