document.getElementById("btn-login1").addEventListener("click", login);

function login(event){
    event.preventDefault();
    var email = document.getElementById("inputEmail").value;
    var senha = document.getElementById("inputSenha").value;

    var user = JSON.parse(localStorage.getItem(senha));

    if(user){
        if (email == user.email && senha == user.password) {
            window.location.replace("./p_cadastro.html")
        } else {
            alert("Email ou senha inválidos!")
        }    
        
    } else {
        alert("Usuário não cadastrado")
    }
    
}

