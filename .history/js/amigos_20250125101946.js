

const amigos = [
    { nombre: "Juan", area: "logística", regalo: "zapatillas" },
    { nombre: "Daniel", area: "recursos", regalo: "reloj" },
    { nombre: "Anpara", area: "administrador", regalo: "toalla" },
    { nombre: "Paola", area: "marketing", regalo: "sudadera" },
    { nombre: "Pedro", area: "finanzas", regalo: "libro" },
  ];
  


  const verResgistrados=document.getElementById("verResgistrados")

verResgistrados.addEventListener("click",(e) =>{
 e.preventDefault()
 
 // Generar HTML a partir del arreglo de objetos
 const htmlContent = amigos
 .map(
   (amigo) =>
     `<div>
       <p><strong>Nombre:</strong> ${amigo.nombre}</p>
   
     </div>`
 )
 .join("");

// Asignar el contenido generado a info_datos
info_datos.innerHTML = htmlContent;
 })

  
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

  
