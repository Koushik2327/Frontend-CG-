function fun(){
    let refElem = document.getElementById("ref");

    let refElem1 =document.getElementById("ref1");
    let name = "Koushik";
    let age =22;

    refElem1.innerHTML = `<h1>my name is ${name} and my age is ${age}</h1>`;

    let card =`
        <div class="card">
            <img src="assets/profile.jpeg" alt="">
            <h1>profile pic</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates obcaecati, sit distinctio laudantium cumque error aspernatur et? A, libero? Nihil officia soluta placeat libero iusto doloremque harum, deserunt iste cum.</p>
            <button>read me</button>
        </div>
    `;

    let cards = " ";

    for(let i =0;i<3;i++){
        cards+=card;
    }

    refElem.innerHTML=cards;

}


let count=0;


function inc(){
    let incr = document.getElementById("ref2");
    count++;
    incr.innerHTML=count;
}

function dec(){
    let dec = document.getElementById("ref2");
    count--;
    dec.innerHTML=count;
}
function res(){
    let res = document.getElementById("ref2");
    count=0;
    res.innerHTML=count;

}

// stopwatch
// --------------------------------------------------------------------
let hours=0;
let mins=0;
let seconds=0;

let refEle1=document.getElementById("timer")
let intervel =null;
let isTimerStarted =true;

function start(){
    if(isTimerStarted=true){
        return;
    }
    isTimerStarted=true;
   intervel= setInterval(()=>{
        seconds++;
        if(seconds>59){
            mins++;
            seconds=0;
        }
        if(mins>59){
            hours++;
            mins=0;
        }
        refEle1.innerText=`${hours}:${mins}:${seconds}`
    },10)
}

function stop(){
    clearInterval(intervel)
    isTimerStarted=false;
}

function reset(){
    clearInterval(intervel)
    hours=0;
    mins=0;
    seconds=0;
    refEle1.innerText=`${hours}:${mins}:${seconds}`
    isTimerStarted=false;
}