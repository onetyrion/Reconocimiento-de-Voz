// MiniAplicacion para reconocer la voz mediante la herramienta Web Speech API
// Esta funciona mediante eventos como click o onchange

//imports buttons and textArea
//var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;

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
console.log("Fix#02");

//Evento que devuelve el texto cuando se para de hablar
recon.onresult = (event) => {
    const result = event.results;
    const text = result[result.length-1][0].transcript;
    console.log(text);
    TextRecon.value += text;
}
recon.onerror = (event) => {
    // TextRecon.textContent = 'Error occurred in recognition: ' + event.error;
    alert('Ha ocurrido un error en el reconocimiento: ' + event.error);
}   
recon.onend = (event) => {
    console.log('El mic deja de escuchar')
}

//Evento que empieza y detiene la grabación
btnStartRecon.addEventListener('click', ()=>{
    console.log("Start");
    recon.start();
});
btnStopRecon.addEventListener('click', ()=>{
    console.log("Stop");
    recon.abort();
});