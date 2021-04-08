function ler(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            document.getElementById("resultado").innerHTML = this.responseText
        }
    }
    xhttp.open("GET","informacoes.txt", true);
    xhttp.send();
}
function gerarNumeros(){
    var http = new XMLHttpRequest();
    document.getElementById("divNumeros").innerHTML = "Carregando";
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            document.getElementById("divNumeros").innerHTML = this.responseText
        }

    }
    var valor = document.getElementById("txtValor").value;
    http.open("GET","servidor.php?valor="+valor, true);
    http.send();
 }

