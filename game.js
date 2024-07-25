// let userscore=0;
// let compscore=0;
// let choices=document.querySelectorAll(".choice")

// choices.forEach((choices)=>{
//    choices.addEventListener("click",()=>{
//     const choiceId=choices.getAttribute("id");
//     console.log("choice was clicked",choiceId);
//    });
// });



let userscore=0;
let compscore=0;
let choices=document.querySelectorAll(".choice")
const message=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");


const getcompchoice= () => {
   const options= ["rock","paper","scissors"];
   let index=Math.floor(Math.random() * 3);
   return options[index];

};


//function for drawgame
const drawgame= () => {
   // console.log("game was draw");
   message.innerText="Game draw. Play again.";
   message.style.backgroundColor="black";
}


//function to show winner
const showwinner=(userwin , userchoice,compchoice)=>{
if(userwin){
   userscore++;
   userScorepara.innerText=userscore;
   message.innerText=`You win! ${userchoice} beats ${compchoice}`;
   message.style.backgroundColor="green";
}
else{
    compscore++;
    compScorepara.innerText=compscore;
   message.innerText=`You lose! ${compchoice} beats ${userchoice}`;
   message.style.backgroundColor="red";
}
};






const playGame=(userchoice)=>{
   // console.log("user choice =",userchoice);
   const compchoice=getcompchoice();
   // console.log("comp choice =",compchoice);
   if(userchoice==compchoice){
    const draws=drawgame();    
   //  drawgame();   call drawgame function 
}   else{

   let userwin=true;

   if(userchoice==="rock"){
      if(compchoice==="paper"){
         userwin=false;
   }
       else{
      userwin=true;
      }
   }
    else if(userchoice==="paper"){
         if(compchoice==="scissors"){
            userwin=false;
         }
         else {
            userwin=true;
         }
      }

   else{
      //user have scissors choice
      if(compchoice==="rock"){
         userwin=false;
      }
      else{
         userwin=true;
      }
   }

   showwinner(userwin ,userchoice,compchoice);

   
}
};






choices.forEach((choicesss)=>{
   // console.log(choices);
   choicesss.addEventListener("click",()=>{
      const userchoice=choicesss.getAttribute("id");
      playGame(userchoice);
});
});