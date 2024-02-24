/* let menuVisible = false;
//Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
 */

// Contenido de tu-archivo.js
let menuVisible = false;

function mostrarOcultarMenu() {
  let nav = document.getElementById("nav");

  if (menuVisible) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }

  menuVisible = !menuVisible;
}

function seleccionar() {
  let nav = document.getElementById("nav");
  nav.classList.remove("responsive");
  menuVisible = false;
}
