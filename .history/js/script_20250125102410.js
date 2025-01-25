
  
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
  const verResgistrados=document.getElementById("verResgistrados")

verResgistrados.addEventListener("click",(e) =>{
 e.preventDefault()
 

 const htmlContent = amigos
 .map(
   (amigo) =>
     `<div>
       <p>< ${amigo.nombre},</p>
   
     </div>`
 )
 .join("");


info_datos.innerHTML = htmlContent;
 })

   
 });


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



