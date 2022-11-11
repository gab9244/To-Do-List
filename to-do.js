//Os elementos que seram ussandos
let List = document.getElementById('List')
let Box = document.getElementById("Box-Of-Text")
var Btn = document.createElement('button')

// função que fará com que o texto Escrito seja colocado em uma lista e seja um List element
function Submit() {
    //Criei o botão Btn (Ele não funciona ainda) usando o Método .document.createElement()
    var Btn = document.createElement('button')
    Btn.innerHTML = 'Done'
    let Box = document.getElementById("Box-Of-Text")
    let List = document.getElementById('List')
    //Usei o appendChild() para colocar o botão(Btn) dentro da Lista(List)
    List.appendChild(Btn)
    List.innerHTML += `<ul>${Box.value}</ul>`
    
}
// O botão clear só vai fazer com que a lista seja apagada mudando o valor dela para Nada('')
function Clear(){
    let List = document.getElementById('List')
    List.innerHTML = ``
   
}


