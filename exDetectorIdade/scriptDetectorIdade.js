function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >=0 && idade <= 3) {
                img.setAttribute("src", "bebehomi.jpg")
            } else if (idade > 3 && idade <= 13) {
                img.setAttribute("src", "menino.jpg")
            } else if (idade > 13 && idade <= 18) {
                img.setAttribute("src", "adolehomem.jpg")
            } else if (idade > 18 && idade <= 60) {
                img.setAttribute("src", "adulto.jpg")
            } else if (idade > 60 && idade <= 120) {
                img.setAttribute("src", "idoso.jpg")
            } else if (idade > 120){
                img.setAttribute("src", "morto.jpg")
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if(idade >=0 && idade <= 3) {
                img.setAttribute("src", "bebemuie.jpg")
            } else if (idade > 3 && idade <= 13) {
                img.setAttribute("src", "menina.jpg")
            } else if (idade > 13 && idade <= 18) {
                img.setAttribute("src", "adolemuie.jpg")
            } else if (idade > 18 && idade <= 60) {
                img.setAttribute("src", "adulta.jpg")
            } else if (idade > 60 && idade <= 120) {
                img.setAttribute("src", "idosa.jpg")
            } else if (idade > 120){
                img.setAttribute("src", "morto.jpg")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
}