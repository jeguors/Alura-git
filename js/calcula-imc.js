var titulo = document.querySelector(".titulo");
titulo.textContent="Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i=0;i < pacientes.length; i++){

  var paciente = pacientes[i];
  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");
  var imc = calculaImc(peso,altura);

  var pesoEhValido = validaPeso(peso);
  var alturaEhValida = validaAltura(altura);

  if (!pesoEhValido){                       //!=torna um valor verdairo em falso//              // ||= ou //
      console.log("Peso Invàlido!");
      pesoEhValido= false;
      tdPeso.textContent="Peso Inválido";
      paciente.classList.add("paciente-invalido");   //adiciona o estilo da lista criada no css(nao sendo necessario coloco o ponto(.))//
  }

  if (!alturaEhValida){
      console.log("Altura Invàlida!");
      alturaEhValida = false;
      tdAltura.textContent="Altura Inválida"
      paciente.classList.add("paciente-invalido");
  }

  if(alturaEhValida && pesoEhValido){
    var imc =calculaImc(peso,altura);
    tdImc.textContent=imc;
  } else (tdImc.textContent="peso e/ou altura invalidos");

}

function validaPeso(peso) {
  if(peso > 0 && peso < 1000){
    return true;
  }else{
    return false;
  }
}

function validaAltura(altura) {
  if(altura > 0 && altura < 3.00){
    return true;}else{
      return false;
    }

}


function calculaImc (peso,altura){
    var imc = 0
    imc=peso / (altura*altura);
    return Math.round(imc);                         //ou imc.toFixed(numero de casas decimais)//
}
