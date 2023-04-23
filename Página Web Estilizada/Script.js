function mudarcorbts(){
  bt =  document.getElementById("btn")
  ob =  document.getElementById('obj')
  bt.style.background = "#1E3FAA"
  function Pessoa(nome,idade){
    this.nome = nome
    this.idade = idade
    this.a = function falar(){
         alert("Função funcionando!!!!!")
    }
  }
  const pessoa1 = new Pessoa("Jonatan",30)
  ob.innerHTML = pessoa1.nome
  ob.innerHTML += pessoa1.idade

  function Trabalho(nome,local){
    return{
      nome:nome,
      local:local,
    }
  }
  const trabalho2 = new Trabalho("Prevnordeste","caminho das arvores")
  ob.innerHTML += trabalho2.nome
  ob.innerHTML += trabalho2.local
}
function mudarcorbts2(){
    bt =  document.getElementById("btn")
    bt.style.background = ""
  }