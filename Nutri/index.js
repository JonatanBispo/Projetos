function calcular() {
   let nome = document.getElementById('name').value
   let peso = document.getElementById('peso').value
   let altura = document.getElementById('altura').value
   

   let n = document.getElementById('n')
   let imc = document.getElementById('imc')
   let cl = document.getElementById('cl')
   
   
   let r = parseFloat(IMC(peso,altura)).toFixed(2)   
   montar(r,n,imc,cl,nome)
}
function IMC(peso,altura) {
   alert("calculando o imc")
   res = peso/(altura*altura) 
      return res 
}

function montar(r,n,imc,cl,nome){
   prompt("montando tela")
   if (r < 10){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText = "Situação: Desnutrição Grau V"
     }else if (r  < 12.9){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Desnutrição Grau IV"
     } else if (r  < 15.9){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Desnutrição Grau III"
     } else if (r  < 16.9){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Desnutrição Grau II"
     }else if (r  < 18.4){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Desnutrição Grau I"
     }else if (r  < 24.9){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Normal"
     } else if (r   < 29.9){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Pré-Obsidade"
     }else if (r  < 34.5){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Obesidade Grau I"
     }else if (r < 39.9){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Obesidade Grau II"
     } else if (r  > 40){
      n.innerText = "Nome: "+nome
      imc.innerText = "Seu IMC: "+ r
      cl.innerText =  "Situação: Obesidade Grau III"
     }
}