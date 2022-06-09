import {initRouter, next} from "../router/router.js"

const Welcome = () => {

    const template = //html
    `   <header class="hd">
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
    <section class="sct">
     <div class="fcenter">
        <h1 class="title">Te damos la bienvenida a la primera red social de creadores y fans.
         </h1>
        <div class="btn">
         <button id="start">Iniciar Sesión</button>
        </div>
        <div class="btn1">
         <button class="aut_btn">Autenticar con Google</button>
        </div>
        <h2 class="sbtitle">¿No tienes una cuenta? <a href="#" id="reg">Regístrate</a> 
        </h2></div>
    </section>
    `
    /*const container = document.getElementById("main-page").innerHTML=template;*/
    const container = document.createElement('div')
    container.innerHTML = template

   let btn = container.querySelector("#start");
    btn.addEventListener('click', (e)=>{
    next("/login")
})
let registro = container.querySelector("#reg");
registro.addEventListener('click', (e)=>{
    e.preventDefault()

next("/register")
})
    /* function start(){
    window.location = "/login";
    if (btn) {
    btn.addEventListener("click", start);
    }*/

    return container
      
    }
   
 export default Welcome