function pag1(){
    let login = document.getElementById("logar").value;
    if(login == ""){
        alert('Informe seu nome');
    }
    else{
        sessionStorage.setItem('logar',login);
        window.location = "site.html"
    }
}

function buscarValor(){
    document.getElementById('gs').value = "Seja bem-vindo(a) " +
    sessionStorage.getItem('logar') + "!";
}