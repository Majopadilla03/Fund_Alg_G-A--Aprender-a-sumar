function verificarRespuesta(){

    var total = 10;
    var punto = 0;

    var myForm = document.forms["evaluacionForm"];
    var respuestas = ["c","a","c","d","c","a","c","b","d","a"];

    for(var i = 1; i <= total; i++){
        if(myForm["p" + i].value === null ||  myForm["p" + i].value === ""){
            alert("por favor responde la pregunta" + i);
            return false;
        }else{
            if(myForm["p" + i]. value === respuestas[i - 1]){
                punto++;

            }
        }
    }
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = '<h3>obtuviste <span>'+punto+'</span> de <span>'+total+'punto </span> </h3>';

    return false;


}