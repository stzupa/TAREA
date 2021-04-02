$(document).ready(function(){
    let cont = 1;
    let celdas = "";
    let pulsados = 1;
    let nSeleccionados = [];
    let nMaquina = [];
    let jugar = true;
    let aciertos = 0;
    $("#jugar").attr("disabled", true);
    for(let i = 1; i <= 5; i++ ){
        for(let j = 1; j <= 8; j++){
            celdas += "<td class=\"botonera\"><button class=\"boton\" value=1>"+cont+"</button></td>";
            cont++;
        }
        $("#fila"+i).html(celdas);
        celdas = "";
    }                
    $(".boton").click(function(){
        if(pulsados<7){
            if($(this).val() == 1){
                $(this).addClass("selected");
                $("#faltantes").html(6-pulsados);
                $(this).attr("value", "2");
                nSeleccionados.push($(this).html());                                                        
                pulsados++;
                if(pulsados == 7){
                    $("#jugar").attr("disabled", false);
                }
             }
        }else{
            alert("Presiona JUGAR");
        }
    });
    $("#jugar").click(function(){
        let contador = 5;
        let aciertos = 0;
        let numero = 0;
        let repetidos = 0;
        if(pulsados == 7){
            if(nSeleccionados.length == 6){
                for(var i = 0; i < nSeleccionados.length; i++){
                    $("#yourSelect").append("<span>"+nSeleccionados[i]+"</span>&nbsp;&nbsp;");
                }
            }
            nMaquina.push(Math.round(Math.random()*(40-1)+1));
            for(var i = 0; i < contador; i++){
                numero =  Math.round(Math.random()*(40-1)+1);
                for(var j = 0; j < nMaquina.length; j++){
                    if(numero == nMaquina[j]){aciertos++;repetidos++;}
                }
                if(aciertos == 0){nMaquina.push(numero);}
                else{i--;}
                numero = 0;
                aciertos = 0;
            }
            for(var i = 0; i < nMaquina.length; i++){
                $("#IAselected").append("<span>"+nMaquina[i]+"</span>&nbsp;&nbsp;");
            }
            pulsados=1;
            $("#jugar").attr("disabled", true);
        }
        console.log(nMaquina);
        jugar = false;
        for(var i = 0; i < nSeleccionados.length; i++){
            for(var j = 0; j < nMaquina.length; j++){
                if(nSeleccionados[i] == nMaquina[j]){
                    aciertos++;
                }
            }                        
        }
        $("#res").html(aciertos);
        $(".boton").attr("disabled", true);                
    });
    $("#reset").click(function(){
        $(".boton").attr("value", "1").removeClass("selected");
        cont = 1;
        celdas = "";
        pulsados = 1;
        nSeleccionados = [];
        nMaquina = [];
        jugar = true;
        aciertos = 0;
        $("#res").html("");
        $("#faltantes").html("6");
        $("#yourSelect").html("");
        $("#IAselected").html("");
        $(".boton").attr("disabled", false);
    });               
});