//alert("Tudo pronto para programar Sr. Vinicius");

let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function adicionarUsuario(){
    let nome = document.getElementById("nome").value;
    let idade = document.getElementById("idade").value;

    if (nome === "" || idade === ""){
        alert("Preencha Todos os Campos");
        return;
    }

    let novoUsuario = {nome: nome, idade: idade};

    usuarios.push(novoUsuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mostrarUsuarios();
}

function mostrarUsuarios(){
    let lista = document.getElementById("listaUsuarios");
    
    lista.innerHTML = "";

    usuarios.forEach(usuario => {
        let item = document.createElement("li");

        item.textContent = usuario.nome + " - " + usuario.idade + " anos";

        lista.appendChild(item);
    })
}

mostrarUsuarios();