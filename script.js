let arr = generaNumeri();
let start = document.getElementById("startButton");
let tempo = 5;
let spaceTime = document.getElementById("spazioTempo");
let blockAnswer = document.getElementById("bloccoRisposta");
let answer = document.getElementById("risposta");
let invio = document.getElementById("sub");
let input = document.getElementsByClassName("text")


start.addEventListener("click", () => {
    start.classList.add("d-none");
    let padre = document.getElementsByClassName("container")[0];
    padre.innerHTML = "";

    for (let i in arr) {
        let figlio = document.createElement("div");
        figlio.innerHTML = arr[i];

        padre.append(figlio);
    }

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
});

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

function numeroCasuale() {
    return Math.floor(Math.random() * 100);
}



invio.addEventListener("click",

    ()=>{
        let blockResult = document.getElementById("bloccoRisultato");
        let risultato = document.getElementById("result");
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

                    risultato.innerHTML += myArr[i];
                }
            }
            
        }


    }

)