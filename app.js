// MiniAplicacion para reconocer la voz mediante la herramienta Web Speech API
// Esta funciona mediante eventos como click o onchange

//imports buttons and textArea
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'

//prepara la variable recon con la herramienta.
let recon = new webkitSpeechRecognition();

const btnStartRecon = document.getElementById("btnStartRecon");
const btnStopRecon = document.getElementById("btnStopRecon");
const TextRecon = document.getElementById("textRecon");


//se configura con:
// lang : tipo de lenguaje (es-ES || en-US)
// continuous : continua grabando mientras nosotros paramos de hablar
// interimResults : resultados instantaneos o cuando se para de hablar
recon.lang = 'es-ES';
recon.continuous = true;
recon.interimResults = false;
console.log(recon);

//Evento que devuelve el texto cuando se para de hablar
recon.onresult = (event) => {
    console.log(event);
    const result = event.result;
    console.log(result);
}
recon.onerror = function(event) {
    message.textContent = 'Error occurred in recognition: ' + event.error;
}   

//Evento que empieza y detiene la grabación
btnStartRecon.addEventListener('click', function(){
    console.log("Start");
    recon.start();
});
btnStopRecon.addEventListener('click', function(){
    recon.abort();
    console.log("Stop");
});