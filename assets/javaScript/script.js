
const btnPesquisar = document.querySelector("#pesquisar")
const resulatdo =  document.querySelector('.resposta');

btnPesquisar.addEventListener('click', pesquisarCep)

function pesquisarCep(event){
    event.preventDefault()
    const inputCep = document.querySelector("#cep");
    let cep = inputCep.value.replace('-', '');

    let teste = cep.split('');
    
    if(teste.length == 8){
        let url = `https://viacep.com.br/ws/${cep}/json`

        let xhr = new XMLHttpRequest(); 
        xhr.open('GET', url, true); 
        xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4) { 
        if (xhr.status = 200) resposta(JSON.parse(xhr.responseText));
        console.log(xhr.responseText); 
        } }     
        xhr.send(); 
        resulatdo.classList.remove('resposta');
        resulatdo.classList.add('respostaPreenchio')
    
        console.log(xhr.responseText);
    }
    else{
        alert('Verifique se está correta o cep digitado')
    }


  
    
    
   
}

function resposta(json){
    document.querySelector('#logradouro').value = json.logradouro;
    document.querySelector('#bairro').value = json.bairro;
    document.querySelector('#cidade').value = json.localidade;
    document.querySelector('#estado').value = json.uf
}