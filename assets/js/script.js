const header = document.getElementById("header");

function navTemaBlur(){
    header.classList.add("scroll");
}

function navTemaTrasparente(){
    header.classList.remove("scroll");
}

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 50){
        navTemaBlur()
    } else{
        navTemaTrasparente();
    }
})


const nav = document.getElementById("menuNav");


window.addEventListener("click", (e)=>{
    if(!nav.contains(e.target) && !btnToogler.contains(e.target)){
        fecharMenu();
    }
})



const btnToogler = document.getElementById("btn-toggle");


btnToogler.addEventListener("click", abrirMenu);


const iconeFecharToggler = document.getElementById("btn-fecharMenu");

iconeFecharToggler.addEventListener("click", ()=>{
    fecharMenu();
})
function abrirMenu(){
    nav.classList.add("show");
    header.classList.add("close");
    document.body.classList.add("travar")
}

function fecharMenu(){
    nav.classList.remove("show");
    header.classList.remove("close");
    document.body.classList.remove("travar")
}