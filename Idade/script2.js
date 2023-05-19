function mostrar() {
    let nome = document.getElementById('inome').value
    let sobrenome = document.getElementById('isobrenome').value
    let campo = document.getElementById('icampo').value
    let anonasc = document.getElementById('iano').value

    
    let idade = calcularidade(anonasc)

    acresentar(nome,sobrenome,campo,idade)
}
function calcularidade(ano) {
    let anoatual = new Date()
    let anoss =  anoatual.getFullYear()
    let idades = ano

    return anoss-idades

}
function acresentar(n,s,c,i) {
    let tabela = document.getElementById('itabela')

    let l = document.createElement("tr")
    let no = document.createElement("td")
    let camp = document.createElement("td")
    let ida = document.createElement("td")
     
    no.innerHTML = n+" "+s
    camp.innerHTML = c
    ida.innerHTML = i

    l.appendChild(no)
    l.appendChild(camp)
    l.appendChild(ida)

    tabela.appendChild(l)
}
function calcular() {
    let n1 = Number.parseFloat (document.getElementById('inumero').value)
    let n2 = Number.parseFloat( document.getElementById('inumero2').value)

    let res = document.getElementById('ires')
    mult = Number.parseFloat(n1*n2) 
    div = n1/n2
    som = n1+n2
    sub = n1-n2


    res.innerHTML = ` o resultado da multiplicação ${mult}</br>
    o resultado da divisão ${div}
    </br>
    o resultado da soma ${som}
    </br>
    o resultado da subtração ${sub}`
}