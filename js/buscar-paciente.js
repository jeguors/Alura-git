var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
  console.log("buscando")
  var xhr = new XMLHttpRequest();
  xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function () {
    var erroAjax = document.querySelector("#erro-ajax");

    if(xhr.status==200){
      erroAjax.classList.add("invisivel-filtro");
      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);                             //coverte um texto json em javascript

     pacientes.forEach(function(paciente) {
       adicionaPacienteNaTabela(paciente);
     });
   }else{
     console.log(xhr.status);
     console.log(xhr.responseText);
     erroAjax.classList.remove("invisivel-filtro");
   }



    });


  xhr.send("");

});