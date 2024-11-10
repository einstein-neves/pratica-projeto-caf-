// logica da proramação//
//[x] preciso saber quando o user clicou obotao //
//[x]precisa mudar o posicionamento do modal ou seja o mapa //
//[]quando clicar na mascara fechar o modal.//

const modal = document.querySelector(".modal")
const mascara = document.querySelector(".mascara-modal")

function mostrarModal(){
    modal.style.left='50%'
    mascara.style.visibility='visible'
}

function esconderModal(){
    modal.style.left= '-30%'
    mascara.style.visibility='hidden'
}