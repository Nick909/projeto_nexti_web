$(document).ready(function(){
    $('.sidenav').sidenav();
});


//codigo de cadastro


function repetiSenha() {
    var pass = document.getElementById('pass').value;
    var repatpass = document.getElementById('repeatpass').value;

    if(pass != repatpass){
        alert('senhas diferentes');
    }
}
