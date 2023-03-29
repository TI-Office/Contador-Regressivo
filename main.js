function ativarContagem() {
    tempo = setInterval(function () {
        var cronometro = document.getElementById('tempo').value;
     if (isNaN(cronometro)) {
            document.getElementById('tempo').value = "DIGITE APENAS NÚMERO";
            pararContagem();
            return;
        } 
        
   
var soma = parseInt(cronometro) - 1;

       
        if (soma <= 0) {
            document.getElementById('tempo').value = "TEMPO ESGOTADO";
            pararContagem()

        } else {

            document.getElementById('tempo').value = soma;
        }
    }
    
    
    , 1000);
    

    
}

function pararContagem() {
    clearInterval(tempo);
    return
    //document.getElementById('tempo').innerHTML = " parou a contagem";
}

function limpar() {
    document.getElementById("tempo").value = "";
    clearInterval(tempo);
}