function contagem() {
    var resul = window.document.getElementById("resul")
    resul.innerHTML = ""
    var strinicio = window.document.getElementById("txtinicio")
    var strfim = window.document.getElementById("txtfim")
    var strpasso = document.getElementById("txtpasso")
    var ini = parseInt(strinicio.value)
    var fim = parseInt(strfim.value)
    var pass = parseInt(strpasso.value)
    if (pass == 0){
        window.alert("[ERRO] Contagem não é possivel pois Passo = 0")
    } else if (ini == "" || fim == "") {
        window.alert("[ERRO] Contagem não é possivel, Tente novamente")
    } else {
        for (c = ini; c <= fim; pass) {
            resul.innerHTML += c + " -> "
            c++
        }
    }
}