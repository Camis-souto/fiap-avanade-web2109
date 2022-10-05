const tooltip = document.querySelector("#tooltip");
const body = document.querySelector("body");
const header = document.querySelector(".top-site");


// alvo.addEventListener("evento", função);
// precisa ser pensando em cosntruir um evento para
// addionar uma escuta para um evento.

// mouseover, função arrow no body.

body.addEventListener('mouseover', (e)=>{
    body.style.background = "pink";
});
body.addEventListener('mouseout', (e) =>{
    body.style.background = "unset";
});

tooltip.addEventListener("mouseover", (e) => {

    console.log("Altura da Página", body.clientHeight);
    console.log("Largura da Página", body.clientWidth);
    console.log("Altura do tooltip", tooltip.clientHeight);
    console.log("Largura do tooltip", tooltip.clientWidth);
    console.log("altura do mouse", e.clientY);
    console.log("largura do mouse", e.clientX);

    if (document.querySelector(".tooltip")) {
        document.querySelector(".tooltip").remove();
    }
    
    const newDiv = document.createElement("div");
    newDiv.classList.add('tooltip');
    newDiv.innerHTML = 
    "Gelatooooo para tú aaaahhhh chasy wiiiiiii daa hahaha me want bananaaaa! Daa baboiiiii ti amoooo!";
        // esse texto sera um parametro da função.  
    const largura = 200;
    newDiv.style.position = "fixed";
    newDiv.style.width = largura + "px";
    newDiv.style.top = e.clientY + "px";
    newDiv.style.display = "flex";
    newDiv.style.left =
      (e.clientX + largura > body.clientWidth
        ? e.clientX - largura - 20
        : e.clientX + largura) + "px";
    
    header.appendChild(newDiv);
  
}); 

tooltip.addEventListener("mouseout", (e) => {
    if(document.querySelector(".tooltip")){
        document.querySelector(".tooltip").remove();
    }
});

// tooltip("#tooltip", "texto do tooltip");