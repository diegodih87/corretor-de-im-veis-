document.querySelector('form').addEventListener('submit', function(event){

    var valor01 = document.querySelector('#txtValor01').value
    var valor02 = document.querySelector('#txtValor02').value


    
    var calculo = parseFloat(valor01) + parseFloat(valor02);
    console.log(`${calculo}`);
})