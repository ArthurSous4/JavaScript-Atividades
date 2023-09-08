let lista = []

function Adicionar() {
    
    let logsel = window.document.getElementById("seltotal")
    let txt = window.document.getElementById("txtNum")
    Number(txt.value)
    txt.value.trim()

    if (txt.value < 1 || txt.value > 100 || txt.value == "" ) {
        window.alert("[ERRO]Verifique os dados novamente!!")
    } else {
    
    let item = document.createElement("option")
    item.text = `Valor de ${txt.value} adicionado à lista`
    
    lista.push(txt.value)
    
    logsel.appendChild(item)
    console.log(lista)

    }
}

function Finalizar() {
    if(lista.length == 0){
        window.alert("[ERRO] Adicione um valor á lista para finalizar")
    }else {
    
    let logsel = document.getElementById("seltotal")
    logsel.length = 0

    var listaMin = Math.min(...lista)
    var listaMax = Math.max(...lista)
    var listaSoma = 0
    
    for (var cont = 0; cont < lista.length; cont++) {
        listaSoma += parseInt(lista[cont])
    }

    var listaMedia = parseFloat(listaSoma/lista.length)
    

    let div2 = window.document.getElementById("div2")
    div2.innerHTML = `<p></p> Ao todo, temos <b>${lista.length}</b> Números cadastrados
    <p></p> O maior valor informado foi <b>${listaMax}</b><p></p>
    O menor valor informado foi <b>${listaMin}</b><p></p>
    Somando todos os valores temos <b>${listaSoma}</b><p></p>
    A média dos valores digitados é <b>${listaMedia}</b>`

    lista = []
}
}
