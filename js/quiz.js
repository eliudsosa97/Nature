let currentStep = 1;
const form = document.getElementById('quiz-form');

function showStep(step) {
  const steps = document.getElementsByClassName('quiz__container');
  for (let i = 0; i < steps.length; i++) {
    steps[i].style.display = 'none';
  }
  document.getElementById(`step${step}`).style.display = 'flex';
}

function nextStep(step) {
    
  if (validateStep(currentStep)) {
    currentStep = step;
    showStep(currentStep);
  }
}

function prevStep(step) {
  currentStep = step;
  showStep(currentStep);
}

function validateStep(step) {
    
  switch(step){
    case 1: console.log('validando case 1');
      // Validar fecha de nacimiento
      const diaField = document.getElementById('day'); //Hacer todo aqui 
      const mesField = document.getElementById('month');
      const yearField = document.getElementById('year');
      const dia = parseInt(diaField.value);
      const mes = parseInt(mesField.value);
      const year = parseInt(yearField.value);
      if (isNaN(dia) || isNaN(mes) || isNaN(year) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || year < 1900 || year > 2016) {
          alert('Por favor ingrese una fecha de nacimiento válida.');
          return false;
      }if (mes === 2 && dia > 28) {
          alert('Febrero tiene máximo 28 días');
          return false;
      } if (mes === 4 && dia > 30) {
          alert('Abril tiene máximo 30 días');
          return false;
      }if (mes === 6 && dia > 30) {
          alert('Junio tiene máximo 30 días');
          return false;
      }if (mes === 9 && dia > 30) {
          alert('Septiembre tiene máximo 30 días');
          return false;
      }if (mes === 11 && dia > 30) {
          alert('Septiembre tiene máximo 30 días');
          return false;
      }
      break;
    case 2: //-------------Validar sexo--------------------------------------
    const sex = obtenerRespuestaRadio('sexo');
    if (sex === null){
        alert("selecciona una respuesta");
        return false;
    }
    break;
    case 3:
         //----------------Validar estatura y peso-------------------
      const alturaField = document.getElementById('altura');
      const pesoField = document.getElementById('peso');
      const altura = parseInt(alturaField.value);
      const peso = parseInt(pesoField.value);

      if (altura >= 20 && altura <= 250 && peso >= 3 && peso <= 350) {
        return true;
      } else {
        alert('Por favor, ingrese un valor válido para altura y peso.');
        return false;
      }
      case 4: 
      //---------------------validar objetivo-----------------
      const objetivo = obtenerRespuestaRadio('objetivo');
      if (objetivo === null){
        alert('Selecciona una respuesta');
        return false;
      }
      break;
      case 5:
        //-----------------validar nombre y email-----------------
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');

        if (!nombre.value || !email.value){
            alert('Por favor ingresa tus datos correctamente');
            return false;
        }
        break;

        default: break;
        
  }
  return true;
}

function showResult() {
    if(validateStep(currentStep)){
    collectData();
    showStep('result');
    
    
    }
  }

function collectData() {
  // fecha de nacimiento
  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;
  
//sexo
    const respuesta2 = obtenerRespuestaRadio('sexo');
//Altura y peso
  const respuesta3 = {
    'altura': document.getElementById('altura').value, 
    'peso':document.getElementById('peso').value
    }; 
//Objetivo
  const respuesta4 = obtenerRespuestaRadio('objetivo'); 
  //Nombre y email
  const respuesta5 = {
    'nombre': document.getElementById('nombre').value, 
    'email':document.getElementById('email').value
    };; 

  // Almacenar los datos en un objeto, enviarlos a un servidor, etc.
  const data = {
    fecha_nacimiento: `${day}/${month}/${year}`,
    pregunta_2: respuesta2,
    pregunta_3: respuesta3,
    pregunta_4: respuesta4,
    pregunta_5: respuesta5,
  };

  console.log(data);

  //-----Calcular age------
const age = calculateAge(day, month, year);
console.log("age: " + age);
console.log(day, month, year);




  //--------Obtener IMC-----------

const imc = calcularIMC(peso, altura);

console.log("Tu IMC es: " + imc);
console.log("El peso es de: " + peso.value);
console.log("Tu altura es de: " + altura.value);

//-------Calcular imc segun su age----------

let estatusImc;

if (age >= 6 && age <8 && respuesta2 === 'F'){
  if (imc <= 12.70){
    estatusImc = 0;
  } else if (imc >= 12.80 && imc <= 16.80){
    estatusImc = 1;
  } else if (imc >= 16.90 && imc <= 18.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 8 && age <10 && respuesta2 === 'F'){
  if (imc <= 12.9){
    estatusImc = 0;
  } else if (imc >= 13 && imc <= 17.6){
    estatusImc = 1;
  } else if (imc >= 17.7 && imc <= 20.5){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 10 && age <12 && respuesta2 === 'F'){
  if (imc <= 13.1){
    estatusImc = 0;
  } else if (imc >= 13.2 && imc <= 18.9){
    estatusImc = 1;
  } else if (imc >= 19 && imc <= 22.5){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 12 && age <14 && respuesta2 === 'F'){
  if (imc <= 14.4){
    estatusImc = 0;
  } else if (imc >= 14.5 && imc <= 20.7){
    estatusImc = 1;
  } else if (imc >= 20.8 && imc <= 24.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 14 && age <16 && respuesta2 === 'F'){
  if (imc <= 15.4){
    estatusImc = 0;
  } else if (imc >= 15.5 && imc <= 22.6){
    estatusImc = 1;
  } else if (imc >= 22.7 && imc <= 27.2){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 16 && age < 18 && respuesta2 === 'F'){
  if (imc <= 16.2){
    estatusImc = 0;
  } else if (imc >= 16.3 && imc <= 24){
    estatusImc = 1;
  } else if (imc >= 24.1 && imc <= 28.8){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age === 18 && respuesta2 === 'F'){
  if (imc <= 16.4){
    estatusImc = 0;
  } else if (imc >= 16.5 && imc <= 24.7){
    estatusImc = 1;
  } else if (imc >= 24.8 && imc <= 29.4){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 6 && age < 8 && respuesta2 === 'M'){
  if (imc <= 13){
    estatusImc = 0;
  } else if (imc >= 13.1 && imc <= 16.7){
    estatusImc = 1;
  } else if (imc >= 16.8 && imc <= 18.4){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 8 && age < 10 && respuesta2 === 'M'){
  if (imc <= 13.3){
    estatusImc = 0;
  } else if (imc >= 13.4 && imc <= 17.3){
    estatusImc = 1;
  } else if (imc >= 17.4 && imc <= 16.6){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 10 && age < 12 && respuesta2 === 'M'){
  if (imc <= 13.7){
    estatusImc = 0;
  } else if (imc >= 13.8 && imc <= 18.4){
    estatusImc = 1;
  } else if (imc >= 18.5 && imc <= 21.4){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 12 && age < 14 && respuesta2 === 'M'){
  if (imc <= 14.5){
    estatusImc = 0;
  } else if (imc >= 14.6 && imc <= 19.8){
    estatusImc = 1;
  } else if (imc >= 19.9 && imc <= 23.6){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 14 && age < 16 && respuesta2 === 'M'){
  if (imc <= 15.5){
    estatusImc = 0;
  } else if (imc >= 15.6 && imc <= 21.7){
    estatusImc = 1;
  } else if (imc >= 21.8 && imc <= 25.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 16 && age < 18 && respuesta2 === 'M'){
  if (imc <= 16.5){
    estatusImc = 0;
  } else if (imc >= 16.6 && imc <= 23.4){
    estatusImc = 1;
  } else if (imc >= 23.5 && imc <= 27.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age === 18 && respuesta2 === 'M'){
  if (imc <= 17.3){
    estatusImc = 0;
  } else if (imc >= 17.4 && imc <= 24.8){
    estatusImc = 1;
  } else if (imc >= 24.9 && imc <= 29.2){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
} else if (age >= 19){
  if (imc < 18.5){
    estatusImc = 0;
  } else if (imc >= 18.5 && imc <= 24.9 ){
    estatusImc = 1;
  } else if (imc >= 25 && imc <= 29.9){
    estatusImc = 2;
  } else {
    estatusImc = 3;
  }
  console.log(age, imc, respuesta2);
  
  
} else {
  console.log("Es menor de 6 años");
}

//--------------------cambiar estatus de imc--------------

if (estatusImc === 0){
    estatusImc = "Riesgo de desnutrición";
  } else if (estatusImc === 1){
    estatusImc = "normalidad";
  } else if (estatusImc === 2){
    estatusImc = "sobrepeso"
  } else if (estatusImc === 3){
    estatusImc = "obesidad";
  } else {
    estatusImc = "no determinado";
  } 
  
  console.log('Estatus' + estatusImc);
  console.log(age, imc, estatusImc, respuesta2, respuesta3, respuesta4, respuesta5);

  const edadElement = document.getElementById('edadE');
  edadElement.textContent = age;
  const nombreElement = document.getElementById('nombreE');
  nombreElement.textContent = respuesta5.nombre;
  const imcElement = document.getElementById('imcE');
  imcElement.textContent = imc;
  const statusImcElement = document.getElementById('estatusIMCE');
  statusImcElement.textContent = estatusImc;
  const paqueteElement = document.getElementById('paqRE');
  paqueteElement.textContent = respuesta4;
  
}





function obtenerRespuestaRadio(nombreGrupo) {
    const radioButtons = document.getElementsByName(nombreGrupo);
    for (const radioButton of radioButtons) {
      if (radioButton.checked) {
        return radioButton.value;
      }
    }
    //return null si no responden
    return null;
  }

  function calculateAge(day, month, year) {
    
    
    
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };
 
  
  
  function calcularIMC(pesoField, alturaField) {
    const peso = parseInt(pesoField.value);
    let altura = parseInt(alturaField.value);
    // Convertir la altura a metros
    altura = altura / 100;
    
    // Calcular el IMC
    let formImc = peso / (altura * altura);
    
    // Redondear el resultado a dos decimales
    formImc = Math.round(formImc * 100) / 100;
    
    return formImc;
  };

showStep(currentStep);









