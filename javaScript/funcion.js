function incorrecto(){
    document.getElementById("mensajeId").innerHTML="Pokémon incorrecto, intentalo nuevamente"
    document.getElementById("mensajeId").style.backgroundColor="0"
    document.getElementById("mensajeId").style.border="0"

    if(document.getElementById("intentoId").innerHTML=="Intentos: 0"){
        document.getElementById("intentoId").innerHTML="Intentos: 1"
    }
    else if(document.getElementById("intentoId").innerHTML=="Intentos: 1"){
        document.getElementById("intentoId").innerHTML="Intentos: 2"
    }
    else if(document.getElementById("intentoId").innerHTML=="Intentos: 2"){
        document.getElementById("intentoId").innerHTML="Intentos: 3"
    }
    else{
        reiniciar()
    }

}

function correcto(){

    document.getElementById("mensajeId").innerHTML="Felicitaciones, has seleccionado la opción correcta"
    document.getElementById("mensajeId").style.backgroundColor="blue"
    document.getElementById("mensajeId").style.border="1px solid"
    document.getElementById("mensajeId").style.fontFamily="'Times New Roman', Times, serif"
    
    document.getElementById("imagenId").src="/image/pcolor.jpg"
    
    if(document.getElementById("intentoId").innerHTML=="Intentos: 0"){
        document.getElementById("puntajeId").innerHTML="Puntaje: 5"
        document.getElementById("intentoId").innerHTML="Intentos: 1"
    }

    else if(document.getElementById("intentoId").innerHTML=="Intentos: 1"){
        document.getElementById("puntajeId").innerHTML="Puntaje: 3"
        document.getElementById("intentoId").innerHTML="Intentos: 2"
    }
    else if(document.getElementById("intentoId").innerHTML=="Intentos: 2"){
        document.getElementById("puntajeId").innerHTML="Puntaje: 1"
        document.getElementById("intentoId").innerHTML="Intentos: 3"
    }
    else{
        reiniciar()
    }

}

function reiniciar(){
    document.getElementById("imagenId").src="/image/pnegro.jpg"
    document.getElementById("puntajeId").innerHTML="Puntaje: 0"
    document.getElementById("intentoId").innerHTML="Intentos: 0"

    document.getElementById("mensajeId").innerHTML=""
    document.getElementById("mensajeId").style.backgroundColor="0"
    document.getElementById("mensajeId").style.border="0"
}