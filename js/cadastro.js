document.getElementById("cadastrar").addEventListener("submit", cadastrar);

function cadastrar(event) {
    // console.log("teste")
    var pass = document.getElementById("pass").value;
    var repatpass = document.getElementById("repeatpass").value;
   
    if (pass != repatpass) {
        alert('senhas diferentes');
        event.preventDefault();
        return false;

    } else {

        var nome = document.getElementById("nome");
        var sobrenome = document.getElementById("sobrenome");
        var email = document.getElementById("email");
        var password = document.getElementById("pass");


        var user = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            email: email.value,
            password: password.value
        }

        localStorage.setItem(email.value, JSON.stringify(user));

        nome.value = '';
        sobrenome.value = '';
        email.value = '';
        password.value = '';

       
        return true;
    }
}


