function NavBarDisplay() {
    if (window.scrollY >= menuheight) {
       navbar.style.display = 'flex'
    } else {
        navbar.style.display = 'none'
    }
}
 
//função para que o menu só apareça quando não estamos na página inicial, evitando redundância

const menu = document.getElementById('menu')
const menuheight = menu.offsetTop
navbar = window.document.getElementById('nav')

window.addEventListener('load', function () {
    NavBarDisplay() 
}) //aplicando a função no carregamento da página; quando abrimos o site, a barra de cima não aparece

window.addEventListener('scroll', function () {
    NavBarDisplay()
}) //aplicando a função no rolamento da página
 


