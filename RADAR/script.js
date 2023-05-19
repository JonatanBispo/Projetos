//velocidade maxima 70km = ok
//a cada 5 km acima você ganha 1 ponto 
//Math.Floor() 
//caso pontos maior que 12 --> "Carteira suspensa"


function registrar() {
    let carro = document.getElementById('icarro').value
    let velocidade = document.getElementById('ivelocidade').value
    let tabela = document.getElementById('itabela')
    let placa = document.getElementById('iplaca').value

    let velocidademaxima = 70;
    
    

    
    let l = document.createElement('tr')
    let v = document.createElement("td")
    let p = document.createElement("td")
    let v1 = document.createElement("td")
    let v2 = document.createElement('td')
    let v3 = document.createElement('td')
   
    if (velocidade > velocidademaxima) {
        v.innerHTML = carro 
        p.innerHTML = placa
        v1.innerHTML = velocidade + "KM"
        v2.innerHTML = "Multado"
        v3.innerHTML = "R$ 200,00"

        l.appendChild(v)
        l.appendChild(p)
        l.appendChild(v1) 
        l.appendChild(v2)
        l.appendChild(v3)

        v2.style.backgroundColor = 'red'

        tabela.appendChild(l)
        

        
    }else{
        v.innerHTML = carro 
        p.innerHTML = placa     
        v1.innerHTML = velocidade + "KM"
        v2.innerHTML = "Não foi Multado"
        v3.innerHTML = ""

        l.appendChild(v) 
        l.appendChild(p)
        l.appendChild(v1) 
        l.appendChild(v2)
        l.appendChild(v3)

       v2.style.backgroundColor = 'green'

        tabela.appendChild(l)
        
    }

   

}
function acresentar() {
    
}