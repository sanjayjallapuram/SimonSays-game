let gameSeq=[];
let userSeq=[];

let btns=["yellow","red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelUp();
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function (){
       btn.classList.remove("flash");
    },350);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function (){
       btn.classList.remove("userFlash");
    },350);
}

function levelUp(){
   userSeq=[];
   level++;
   h2.innerText=`Level ${level}`;
   
   let randomIndx=(Math.floor(Math.random()*4)) ;
   let randColor=btns[randomIndx];
   let randBtn=document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);

   gameFlash(randBtn);    //random button choose

}

function checkAns(idx){    //level
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
       }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start. `;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
          document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
   
    checkAns(userSeq.length-1);         //level     
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
