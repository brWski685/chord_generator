let notes = ["C", "C#", "Db", "D", "D#", "Eb", "E", "E#", "F", "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B"];
let types = ["j7/9/13", "j7#11", "j7#5", "-7/9/13", "-j7", "-7b5", "7/9/13/sus4", "7/9/#11/13", "7/b9/13", "7alt", "dim7", "aug"];

let random1 = Math.floor(Math.random() * 18);
let random2 = Math.floor(Math.random() * 13);
let input_field = document.getElementById("input_field").value;

let lastNote = "";
let lastChord = "";

let tempo = 120;
let bpm = document.getElementById("input_field").value;
let counter = 1;

let measurement = document.getElementById("select").value;

function sound1(){
    const metronome = document.getElementById("metronome");
    if (typeof (metronome.currentTime) != 'undefined') {
        metronome.currentTime = 0;
      }
      metronome.play();
}
function sound2(){
    const metronomeup = document.getElementById("metronomeup");
    if (typeof (metronomeup.currentTime) != 'undefined') {
        metronomeup.currentTime = 0;
      }
      metronomeup.play();
}

function setTempo(){
    bpm = document.getElementById("input_field").value;
    if (bpm < 1){
        bpm = 1
    }
    tempo = 60000 / bpm;
}
function setTimer1(){
    setTimeout(myfunc_1, tempo);
}
function changeChord1(){
    random1 = Math.floor(Math.random() * 18);
    random2 = Math.floor(Math.random() * 12);
    document.getElementById("output3").innerHTML = notes[random1];
    document.getElementById("output4").innerHTML = types[random2];
    changeChord2();
    lastNote = random1;
    lastChord = random2;
}
function changeChord2(){
    if (lastNote === ""){
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = ""; 
    }else{
        document.getElementById("output1").innerHTML = notes[lastNote];
        document.getElementById("output2").innerHTML = types[lastChord];
    }
}

function myfunc_1(){;
    setTempo();
    if(document.getElementById("input_field").value === ""){
        clearTimeout;
        return;
    }
    if (counter === 1 && measurement === "4/4"){
        sound2();
        counter += 1;
        changeChord1();
        setTimer1();
    }else if (counter === 2 && measurement === "4/4"){
        counter += 1;
        sound1();
        setTimer1()
    }else if (counter === 3 && measurement === "4/4"){
        counter += 1;
        sound1();
        setTimer1();
    }else if (counter === 4 && measurement === "4/4"){
        counter = 1;
        sound1();
        setTimer1();
    }else if (counter === 1 && measurement === "3/4"){
        sound2();
        counter += 1;
        changeChord1();
        setTimer1();
    }else if (counter === 2 && measurement === "3/4"){
        counter += 1;
        sound1();
        setTimer1()
    }else if (counter === 3 && measurement === "3/4"){
        counter = 1;
        sound1();
        setTimer1()
    }
}

function myfunc_2(){
    document.getElementById("input_field").value = "";
}

function myfunc_3(){
    measurement = document.getElementById("select").value;
}
