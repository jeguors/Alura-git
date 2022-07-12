var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.addEventListener("click", function (event) {        //puxa o evento clicar para uma funcao//
      event.preventDefault();                                         //previne o comportamento padrao, permitindo a funcionalidades que queremos apresentar//

      var form= document.querySelector("#form-adiciona");
      var paciente = obtemPacienteDoFormulario(form);
      console.log(paciente);

      var erros= validaPaciente(paciente);

      console.log(erros);
      if(erros.length > 0){
        exibeMensagensDeErro(erros);

        return;
      }
  adicionaPacienteNaTabela();

       form.reset();                                                   //limpar o formulario depois de inserir um paciente na tabela//
       var mensagensErro = document.querySelector("#mensagens-erro");
       mensagensErro.innerHTML="";
});
    //adicionando o paciente na tabela//
function adicionaPacienteNaTabela(paciente){
      var pacienteTr = montaTr(paciente);
      var tabela = document.querySelector("#tabela-pacientes");
      tabela.appendChild(pacienteTr);

}


function exibeMensagensDeErro (erros) {
      var ul = document.querySelector("#mensagens-erro");
      ul.innerHTML="";                                     //limpa as mensagens de erro anteriores, antes de exibir as novas mensagens de erro//
      erros.forEach(function(erro){                         //Em JavaScript, todo array possui a função forEach. Passamos para ela uma função por parâmetro, e nessa função fazemos o que quisermos para cada item do array. O item do array é recebido por parâmetro na função interna.//
      var li = document.createElement("li");
      li.textContent=erro;
      ul.appendChild(li);

    });

    }

function obtemPacienteDoFormulario (form){
      var paciente = {
        nome:form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        gordura:form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
        }
    return paciente;
    }
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"))                    // tornar um elemento como filho, ou seja colocar um elemento dentro de uma tag pai(como <tr><td></tr>)//

     return pacienteTr;

}


  function montaTd(dado,classe){
    var td = document.createElement("td");
        td.textContent= dado;
        td.classList.add(classe);

        return td;
  }

  function validaPaciente (paciente){
    var erros = [];

    if(paciente.nome.length == 0){
      erros.push("campo nome precisa ser preenchido!");
    }

    if(!validaPeso(paciente.peso)){
     erros.push("Peso é invalido!");
      }

    if(!validaAltura(paciente.altura)){
      erros.push("Altura é inválida!");
    }

    if(paciente.gordura.length == 0){
      erros.push("campo gordura precisa ser preenchido!");
    }

    if(paciente.peso.length == 0){
      erros.push("campo peso precisa ser preenchido!");
    }

    if(paciente.altura.length == 0){
      erros.push("campo nome precisa ser preenchido!");
    }

    return erros;
  }
