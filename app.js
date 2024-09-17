let gameseq = [];
let userseq = [];
let btns = ["red","yellow","green","purple"]
let hs = 0;

let gamestart = false;
let level = 0;
let h2 = document.querySelector('h2');

document.addEventListener("click",function(){
    if(gamestart == false){
        console.log("Game Started");
        gamestart = true;
        levelup();
    }


    
});
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    // Random color
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    btnflash(randbtn);
    

}

function check(idx){
    // console.log("curr is",level);
    
    if(gameseq[idx]===userseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        
    } else{
        hs = Math.max(hs,level);
        h2.innerText = `Game Over! Your Score is ${level}. Press Any key to start again.Highest Score is ${hs}`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        setTimeout(reset, 2000);
    }
    
}

function btnpress(){
    let btn = this;
   btnflash(btn);
   usercolor = btn.getAttribute("id");
   userseq.push(usercolor);
    check(userseq.length-1);
    
}
let bttns = document.querySelectorAll(".btn");
for(btn of bttns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gamestart = false;
    gameseq = [];
    userseq = [];
    level = 0;
}