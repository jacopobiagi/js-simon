// VARIABILI GLOBALI
let arr = generaNumeri();
let start = document.getElementById("startButton");
let tempo = 30;
let invio = document.getElementById("sub");


// EVENTO PER INIZIARE A GIOCARE
start.addEventListener("click", funzioneGioco);

// FUNZIONE PER AVVIARE IL GAME
function funzioneGioco(){

    let spaceTime = document.getElementById("spazioTempo");
    let blockAnswer = document.getElementById("bloccoRisposta");

    start.classList.add("d-none");
    let padre = document.getElementsByClassName("container")[0];
    padre.innerHTML = "";

    // GENERATORE DI NUMERI NELL'INTERFACCIA
    for (let i in arr) {
        let figlio = document.createElement("div");
        figlio.innerHTML = arr[i];

        padre.append(figlio);
    }

    // FUNZIONE CHE AVVIA IL TIMER
    var clock = setInterval(() => {
        spaceTime.innerHTML = "";

        if (tempo !== 0) {

            spaceTime.innerHTML = tempo;
            tempo--;
            
        } else {
            padre.innerHTML = "";
            blockAnswer.classList.remove("d-none")
            clearInterval(clock);
        }
    }, 1000);
    
}

// FUNZIONE CHE GENERA UN ARRAY DI NUMERI CASUALI
function generaNumeri() {
    let seqNum = [];

    for (let i = 1; i <= 5; i++) {
        let casualNum = numeroCasuale();

        if(!seqNum.includes(casualNum)){
            seqNum.push(casualNum);
        }
        
    }

    return seqNum;
}

// FUNZIONE CHE GENERA UN NUMERO CASUALE
function numeroCasuale() {
    return Math.floor(Math.random() * 100);
}


// FUNZIONE CHE GENERA IL RISULTATO
invio.addEventListener("click",

    ()=>{
        let blockResult = document.getElementById("bloccoRisultato");
        let risultato = document.getElementById("result");
        let input = document.getElementsByClassName("text");

        blockResult.classList.remove("d-none");
        risultato.innerHTML = "";
        let myArr = [];
        for(let i of input){
            myArr.push(i.value);
        }
    
        console.log(arr,myArr)

        
        for(let i in myArr){

            for(let index in arr){

                if(arr[index] == myArr[i]){

                    risultato.innerHTML += " "+myArr[i]+ " ";
                }
            }
            
        }


    }

)