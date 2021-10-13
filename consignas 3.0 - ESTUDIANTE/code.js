/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};
let ocultar = true;
const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  const nombre = prompt("Ingresa tu nombre")
  const edad = prompt("Ingresa el año en que naciste")
  const ciudad = prompt("Ingresa la ciudad donde vives")
  const Js = confirm("Te interesa Javascript?")
  const date = new Date


  datosPersona["nombre"] = nombre
  datosPersona["ciudad"] = ciudad
  datosPersona["interesPorJs"] = Js
  datosPersona["edad"] = date.getFullYear() - edad
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  document.getElementById("nombre").innerText = datosPersona.nombre
  document.getElementById("edad").innerText = datosPersona.edad
  document.getElementById("ciudad").innerText = datosPersona.ciudad
  document.getElementById("javascript").innerText = datosPersona.Js ? "Si" : "No"


}

function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.getElementById("fila")
  fila.innerHTML = "" 
  console.log("ejecutando");
   console.log(ocultar);
   if(ocultar){
    for (let item of listado) {
      fila.innerHTML += `
        <div class="caja">
          <img src=${item.imgUrl} alt="${item.lenguajes}">
          <p class="lenguajes">Lenguajes: ${item.lenguajes}</p>
          <p class="bimestre">Bimestre: ${item.bimestre}</p>
        </div>
      `
    }
    ocultar = false;
   }else{
     fila.innerHTML = '';
     ocultar = true;
   }

}

  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  function alternarColorTema() {
    let body = document.querySelector('body');
    let cards = document.querySelectorAll('.item');
    body.classList.toggle("dark");
     cards.forEach(element => {
         element.classList.toggle("dark");
 
        
    });

 }
 
 /* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
 let body = document.querySelector('body');
 body.onkeydown = function(event){
     if(event.key==='f'){
       let ocultar = document.querySelector('#sobre-mi').classList.remove('oculto');
     }
}
