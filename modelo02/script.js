function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('ft')
var data = new Date()
//var hora = data.getHours()
var hora = 18
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12) {
    //BOM DIA!
    img.src = 'dia.png'
} else if (hora >= 12 && hora < 18){
    //BOA TARDE!
    img.src = 'tarde.png'
} else {
    //BOA NOITE!
    img.src = 'noite.png'
}
}
