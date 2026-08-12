const header = document.getElementById("header");
const overlay = document.querySelector(".overlay");
window.addEventListener("scroll", atualizarNav)
atualizarNav();


function navTemaBlur(){
    header.classList.add("scroll");
}

function navTemaTrasparente(){
    header.classList.remove("scroll");
}

function atualizarNav(){
        if(window.scrollY > 50){
            navTemaBlur()
        } else{
            navTemaTrasparente();
        }
}



const nav = document.getElementById("menuNav");

const btnToogler = document.getElementById("btn-toggle");
btnToogler.addEventListener("click", abrirMenu);

window.addEventListener("click", (e)=>{
    if(!nav.contains(e.target) && !btnToogler.contains(e.target)){
        fecharMenu();
    }
})


const iconeFecharToggler = document.getElementById("btn-fecharMenu");

iconeFecharToggler.addEventListener("click", ()=>{
    fecharMenu();
})
function abrirMenu(){
    navTemaTrasparente();
    nav.classList.add("show");
    header.classList.add("close");
    document.body.classList.add("travar")
    overlay.classList.add("ativo");
}

function fecharMenu(){
    atualizarNav();
    nav.classList.remove("show");
    header.classList.remove("close");
    document.body.classList.remove("travar")
    overlay.classList.remove("ativo");

}