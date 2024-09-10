async function pesquisarCep(){

    var cep = document.getElementById("cep");
    
    if(cep.value == ""){
        alert("Campo obrigatório não preenchido.")
    }else{

        try{
            var resposta = await fetch(`http://viacep.com.br/ws/${cep.value}/json/`);
            var dados = await resposta.json();
        }catch(e){
            alert("CEP Inválido!");
        }
        

        console.log(dados);
        console.log(dados.localidade);
        console.log(dados.regiao);

        var logradouro = document.getElementById("log");
        logradouro.innerHTML = dados.logradouro;
        var bairro = document.getElementById("bairro");
        bairro.innerHTML = dados.bairro;
        var cidade = document.getElementById("cidade");
        cidade.innerHTML = dados.localidade;
        var estado = document.getElementById("estado");
        estado.innerHTML = dados.estado;

    }

}