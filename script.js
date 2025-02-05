let amigos = ();

function agregarAmigo() {
    let input = document.getElementById("nombreAmigo"); 
    let nombre = input.value.trim(); 

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; 

    actualizarLista();
}
function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultadoSorteo").innerHTML = 
        `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
}
