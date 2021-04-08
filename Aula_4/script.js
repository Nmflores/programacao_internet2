function lerJson(){
    var http = XMLHttpRequest();
    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var obj_JS = JSON.parse(this.responseText());
            var divObjeto = document.getElementById("divObjeto")

            divObjeto.innerHTML = "Nome:" + obj_JS.nome + "<br>Idade:" + obj_JS.idade;
            var textFilhos = "Filhos: ";
            obj_JS.filhos.forEach 

            var divJson = document.getElementById("divJson");

            divJson.innerHTML = JSON.stringify(obj_JS);
        }
        http.open("GET","meuJson.json",true);
        http.send();
    }
}