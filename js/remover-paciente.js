  var tabela = document.querySelector("#tabela-pacientes")
  tabela.addEventListener("dblclick",function(event){
                                                                                            // event para detectar o evento e o target para detectar o alvo//
   event.target.parentNode.classList.add("excluir-dinamico");                                   //atrela o alvo filho para o alvo pai, ou seja, linha/coluna/tabela e etc.//                                                                             // comando "this" esta atrelado ao eventos, ou seja, ele realiza o a funçao do evento//
  setTimeout(function(){                                        //delega tempo para realizar determinada função
  event.target.parentNode.remove();
},500)                                                                                     //paiDoAlvo.remove();                                      elemento this retorna evento disparado//
});
