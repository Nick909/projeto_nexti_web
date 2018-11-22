document.getElementById("login").addEventListener("click", login);

function login(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var senha = document.getElementById("pass").value;

    var user = JSON.parse(localStorage.getItem(email));

    if(user){
        if (email == user.email && senha == user.password) {
            window.location.replace("./exibir_contas.html")
        } else {
            alert("Email ou senha inválidos!")
        }    
        
    } else {
        alert("Usuário não cadastrado")
    }
    
}

