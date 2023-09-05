function contagem() {
    var resul = window.document.getElementById("resul")
    resul.innerHTML = ""
    var strinicio = window.document.getElementById("txtinicio")
    var strfim = window.document.getElementById("txtfim")
    var strpasso = document.getElementById("txtpasso")
    var ini = strinicio.value.trim()
    var fim = strfim.value.trim()
    var pass = parseInt(strpasso.value)
    if (pass == 0){
        window.alert("[ERRO] Contagem não é possivel pois Passo = 0")
    } else if (ini == "" || fim == "" ) {
        window.alert("[ERRO] Contagem não é possivel, Tente novamente")
    } else {
        ini = parseInt(ini)
        fim = parseInt(fim)
        for (c = ini; c <= fim; c += pass) {
            resul.innerHTML += c + " -> "
            
        }
    }
    resul.innerHTML += "<b>CHEGADA</b>"
    console.log(pass)
    console.log(ini)
    console.log(fim)
}