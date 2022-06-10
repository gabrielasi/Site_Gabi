const cep = document.querySelector("#cep")

// aqui evento perde o foco e busca os valores do cep e prepara para envio

cep.addEventListener("blur",(e)=>
{     // arrow fuction
    let search = cep.value.replace("-", "")
    const options ={
        method: 'Get', // solicitação
        mode: 'cors',   // acesso externo
        Cache: 'default'
    }

    // aqui envia o cep digitado para a via cep e retorna

    fetch(`https://viacep.com.br/ws/${search}/json`,options)

    // quando se acessa uma URL com fatch api retorna se uma promessa
    // se der certo .then()
    // se der errado .catch()

    .then(Response => {Response.json()
        .then(data => mostrarDados(data))
    })

    .catch(e => console.log(`Erro Inesperado` + e,message))

})

// alimentar todos os campos do dormulário

const mostrarDados = (result)=>{ //aqui busco o retorno na variável campo
    for(const campo in result){  //aqui amazena todo o retorno na variável campo
        if(document.querySelector("#"+campo)){ //verifico se o campo existe
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}
