var campoFiltro = document.querySelector("#filtrar-tabela");
campoFiltro.addEventListener("input",function () {          //imput, evento que detecta a digitação
  console.log(this.value);
  var pacientes = document.querySelectorAll(".paciente");

  if(this.value.length > 0){
    for (var i = 0;i < pacientes.length;i++){
      var paciente = pacientes[i];
      var tdNome = paciente.querySelector(".info-nome");
      var nome = tdNome.textContent;
      var expressao = new RegExp(this.value,"i");                          //buscar o valor do conteudo do evendo input do filtro case sensitive ou case insensitive que busca sem necessariamente precisar digitar a palavra por completo
      if(!expressao.test(nome)){                                            //expressao regular
        paciente.classList.add("invisivel-filtro");
      }else{
        paciente.classList.remove("invisivel-filtro");
      }

    }


  }else{ for (var i = 0;i < pacientes.length;i++){
      var paciente = pacientes[i];
      paciente.classList.remove("invisivel-filtro")
    }
}


});
