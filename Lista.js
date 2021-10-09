let nombreNo="n"
let precioTotal = 0;
let cant=1
let contador2=0
let Lista=[]
let Lista2=[]
let Lista3=[]
let cosa={nombre:"", precioCosa:"", cantidad:""}
let crono=0000
let h=0
let m=0
let s=0

function obtenerVoces(){
    vocesDisponibles = window.speechSynthesis.getVoices();
    }
    obtenerVoces();
    setTimeout(obtenerVoces, 100)

function hablar(palabras){
    let mensaje = new SpeechSynthesisUtterance();
    mensaje.voice = vocesDisponibles[7];
    mensaje.rate = 1;
    mensaje.text = palabras;
    mensaje.pitch = 1;
    // ¡Habla!
    speechSynthesis.speak(mensaje);
}
function fuma(){
    init()
    document.getElementById("fumas").style='background-image: url("fuma.jpg"); width: 100%; height: 100%; position: absolute; background-repeat: no-repeat; overflow: scroll; background-size: cover;'
    hablar("Atilio Ledo, Podés fumar")
    crono=0
    setTimeout(()=>{noFuma(); init();}, 600000);
}

function noFuma(){
    init()
    document.getElementById("fumas").style='background-image: url("noFumes.jpg"); width: 100%; height: 100%; position: absolute; background-repeat: no-repeat; overflow: scroll; background-size: cover;'
    hablar("Atilio Ledo, ya no podés fumar")
    crono=0
}

document.addEventListener("click", ()=>{
    if (contador2===0){
        init()
        cronometrar();
        fuma();
        setInterval(fuma, 1440000);
        setInterval(()=>{crono+=1}, 1000)
        contador2+=1
    }
})

function init(){
    h = 0;
    m = 0;
    s = 0;
    document.getElementById("crono").innerHTML="00:00:00";
}         
function cronometrar(){
    escribir();
    setInterval(escribir,1000);
}
function escribir(){
    var hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    document.getElementById("crono").innerHTML = hAux + ":" + mAux + ":" + sAux; 
}