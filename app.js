// MiniAplicacion para reconocer la voz mediante la herramienta Web Speech API
// Esta funciona mediante eventos como click o onchange

//imports buttons and textArea
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var grammar = '#JSGF V1.0;'

//prepara la variable recon con la herramienta.
let recon = new webkitSpeechRecognition();

const btnStartRecon = document.getElementById("btnStartRecon");
const btnStopRecon = document.getElementById("btnStartRecon");
const TextRecon = document.getElementById("btnStartRecon");


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
    const result = event.result;
    console.log(result);
}

//Evento que empieza y detiene la grabación
btnStartRecon.addEventListener('click',()=>{
    recon.start();
    console.log(recon);
});
btnStopRecon.addEventListener('click',()=>{
    recon.abort();
});