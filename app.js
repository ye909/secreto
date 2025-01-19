// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Función para agregar el amigo con sus datos
document.getElementById('formularioAmigo').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const areaTrabajo = document.getElementById('areaTrabajo').value;
    const tipoRegalo = document.getElementById('tipoRegalo').value;

    if (nombre && areaTrabajo && tipoRegalo) {
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = `${nombre} - ${areaTrabajo} - Regalo: ${tipoRegalo}`;
        listaAmigos.appendChild(li);
        
        // Limpiar los campos después de agregar
        document.getElementById('nombre').value = '';
        document.getElementById('areaTrabajo').value = '';
        document.getElementById('tipoRegalo').value = '';
    }
});

// Función para simular el sorteo del amigo secreto
function sortearAmigo() {
    const listaAmigos = document.querySelectorAll('#listaAmigos li');
    const resultado = document.getElementById('resultado');
    
    if (listaAmigos.length === 0) {
        resultado.textContent = 'No hay amigos agregados para sortear.';
        return;
    }

    // Randomizar el sorteo
    const sorteados = [];
    listaAmigos.forEach((amigo, index) => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * listaAmigos.length);
        } while (sorteados.includes(randomIndex) || randomIndex === index);

        sorteados.push(randomIndex);
        const amigoSecreto = listaAmigos[randomIndex].textContent;
        const amigoNombre = amigo.textContent.split(' - ')[0];

        // Mostrar resultado del sorteo
        const liResultado = document.createElement('li');
        liResultado.textContent = `${amigoNombre} tiene como amigo secreto a ${amigoSecreto}`;
        resultado.appendChild(liResultado);
    });
}
