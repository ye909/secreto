
  
const container = document.getElementById("container");
const containerbtnsorteo = document.getElementById("containerbtnsorteo");

 const formularioAmigo = document.getElementById("formularioAmigo");

 const datos_amigo =document.getElementById("datos_amigo")
const info_datos = document.getElementById("info_datos")
formularioAmigo.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe (si se trata de un formulario)
  

  const nombre = document.getElementById("nombre").value;
  const areaTrabajo = document.getElementById("areaTrabajo").value;
  const tipoRegalo = document.getElementById("tipoRegalo").value;
            // Crear un nuevo objeto amigo
            const nuevoAmigo = {
              nombre: nombre,
              area: areaTrabajo,
              regalo: tipoRegalo
          };

          // Añadir el nuevo amigo al array
          amigos.push(nuevoAmigo);
   

  if (nombre == "" ) {
    const mensaje = document.getElementById("mensaje");
    mensaje.innerHTML = "Por favor ingrese su nombre";
  
  
  }else{
    const titulo_data = document.createElement("p");
    titulo_data.innerHTML = ` BIENVENIDOS/A  <br> ${nombre}  `;
    info_datos.append(titulo_data);
    if (container) {
      container.style.display = "none";
      containerbtnsorteo.style.display = "inline";
      
  
    }
  }

  if (areaTrabajo) {
    
    const titulo_data = document.createElement("p");
    titulo_data.innerHTML = `Del area  de trabajo <br> ${areaTrabajo} `;
    info_datos.append(titulo_data);
   
   }
  if (tipoRegalo) {
  const Regalo = document.createElement("p");
  Regalo.innerHTML = `Tu regalo  ${tipoRegalo} <br> para el amigo  `;
  info_datos.append(Regalo);
;
  }
   if (nombre) {
    
    const titulo_data = document.createElement("p");
    titulo_data.innerHTML = ` ${nombre} <br> Te queremos felisitar por aser parte de esta actibidad <br>  por eso un te informamos cual es tu `;
    info_datos.append(titulo_data);
   
   }


//   containersorteo.style.display = "inline";


   
 });
 const verResgistrados=document.getElementById("verResgistrados")
 verResgistrados.addEventListener("click", () => {
  datos_amigo.innerHTML=nuevoAmigo.nombre
 } )

 const sorteo = document.getElementById("sorteo");

 // Agrega un evento al hacer clic en el botón
 sorteo.addEventListener("click", () => {
  
 var end = Date.now() + (15 * 1000);

 // go Buckeyes!
 var colors = ['#bb0000', '#ffffff'];
 
 (function frame() {
   confetti({
     particleCount: 2,
     angle: 60,
     spread: 55,
     origin: { x: 0 },
     colors: colors
   });
   confetti({
     particleCount: 2,
     angle: 120,
     spread: 55,
     origin: { x: 1 },
     colors: colors
   });
 
   if (Date.now() < end) {
     requestAnimationFrame(frame);
   }
 }());
 datos_amigo.style.display = "inline";
 containerbtnsorteo.style.display = "none";
 });



