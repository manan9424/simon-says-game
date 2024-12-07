let gameSeq = [];
let userSeq = [];
let btns = ["red" , "yellow" , "purple" , "green"];

let start = false;
let level = 0;
let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(start == false){
        // console.log("started");
        start = true;
        levelUp();
    }
}); 

function flsh(btn){
    btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    }, 250);
}
function userflsh(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userSeq= [];
    level++;
h2.innerText = `Level ${level}`;
let random = Math.floor(Math.random()* 3 );
let randomclr = btns[random];
let randombtn = document.querySelector(`.${randomclr}`);
// console.log(randombtn);
gameSeq.push(randomclr);
console.log(gameSeq);
flsh(randombtn);


}
function check(idx)
{
    // console.log("current level", level);
    // let idx = level-1;
    if(userSeq[idx]=== gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
     setTimeout(levelUp, 1000);       
        } 
    }
        // console.log("same value");}
        else{
            h2.innerHTML = `Game over! Your score was <b>${level}<b> <br>press any key to start again.`;
            reset(); 
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function (){
                document.querySelector("body").style.backgroundColor = "white";},150

            )
        }
    }


function btnpress() {
    let  btn = this;
    
    // console.log(this);
    userflsh(btn);
    userColor = btn.getAttribute("id");
    // console.log(userSeq);

    userSeq.push(userColor);
    
    check(userSeq.length-1);

}
let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click", btnpress);
}
function reset(){
    start = false; 
    gameSeq = [];
    userSeq= [];
    level = 0 ;
}