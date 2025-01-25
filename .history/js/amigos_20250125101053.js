// const amigos=[{
//     nombre: "Juan",
//     area:"logistica ",
//     regalo:"zapatillas"

// },
// {
//     nombre: "daniel",
//       area:"recursos ",
//       regalo:"reloj"
// },
// {
// nombre:"anpara",
//     area:"alministrador",
//      regalo:"tualla"
// },
// {
//     nombre: "Paola",
//      area:"marketing ",
//     regalo:"sudadera"
// },
// {
//     nombre: "Pedro",
//      area:"finansas",
//     regalo:"libro"
// }]


// const verResgistrados=document.getElementById("verResgistrados")
// verResgistrados.addEventListener("click",(e) =>{
//  e.preventDefault()
 
//  info_datos.innerHTML=amigos

//  })

const amigos = [
    { nombre: "Juan", area: "logística", regalo: "zapatillas" },
    { nombre: "Daniel", area: "recursos", regalo: "reloj" },
    { nombre: "Anpara", area: "administrador", regalo: "toalla" },
    { nombre: "Paola", area: "marketing", regalo: "sudadera" },
    { nombre: "Pedro", area: "finanzas", regalo: "libro" },
  ];
  
  // Corregimos el identificador del botón.
  const verRegistrados = document.getElementById("verRegistrados");
  
  // Asegúrate de que el contenedor `info_datos` exista en tu HTML.
//   const info_datos = document.getElementById("info_datos");
  
  verRegistrados.addEventListener("click", (e) => {
    e.preventDefault();
  
    // Formateamos los datos para mostrarlos correctamente.
    if (info_datos) {
      info_datos.innerHTML = `
        <ul>
          ${amigos
            .map(
              (amigo) =>
                `<li><strong>${amigo.nombre}</strong> - Área: ${amigo.area}, Regalo: ${amigo.regalo}</li>`
            )
            .join("")}
        </ul>
      `;
    } else {
      console.error("El contenedor info_datos no existe en el HTML.");
    }
  });
  
function seleccionarAmigoAleatorio(amigos) {

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
      return amigos[indiceAleatorio];
    }
    
    const amigoSeleccionado = seleccionarAmigoAleatorio(amigos);
  


    const nombrealeatoria = document.createElement("p");
    nombrealeatoria .textContent = `Amigo secreto :  ${  amigoSeleccionado.nombre} `;

    const arealeatoria = document.createElement("p");
    arealeatoria .textContent = `Area:  ${amigoSeleccionado.area} `;

    const regaloaleatoria = document.createElement("p");
    regaloaleatoria .textContent = `Regalo : ${amigoSeleccionado.regalo} `;

    datos_amigo.appendChild(nombrealeatoria );  
     datos_amigo.appendChild(arealeatoria );  
       datos_amigo.appendChild( regaloaleatoria );

  
