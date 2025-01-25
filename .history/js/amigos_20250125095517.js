const amigos=[{
    nombre: "Juan",
    area:"logistica ",
    regalo:"zapatillas"

},
{
    nombre: "daniel",
      area:"recursos ",
      regalo:"reloj"
},
{
nombre:"anpara",
    area:"alministrador",
     regalo:"tualla"
},
{
    nombre: "Paola",
     area:"marketing ",
    regalo:"sudadera"
},
{
    nombre: "Pedro",
     area:"finansas",
    regalo:"libro"
}]



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

  
