
var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start(){
document.getElementById("textbox").innerHTML= "";
Recognition.start();
}
Recognition.onresult=function spacerun(event){
    console.log(event);
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById("textbox").value=text;
}
