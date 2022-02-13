"use strict";
const charakterList = document.querySelectorAll("button");
//console.log(charakterList);
//button.addEventListener("click", clickHendler);
function clickHendler(){
    alert( `Нажал` )
}
for (let i = 0; i < charakterList.length; i = i + 1){
    console.log(charakterList[i]) 
    console.log(i)
    const button = charakterList[i]
    button.addEventListener("click", clickHendler);
}
