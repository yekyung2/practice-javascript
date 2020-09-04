// const title = document.getElementById("title");
const title = document.querySelector("#title");

title.innerHTML= "Hi! From JS";
// console.log(title);

console.dir(title); //콘솔창에 h1#title이 뜨고, 많은 attributes가 뜬다! 이렇게 다양한 속성값
//확인해주고 아래처럼 html이 아닌 js에서 다양한 속성값들을 수정가능 하게된다.
title.style.color = "royalblue";

console.dir(document); //콘솔창에 #document에 관련된 attributes 뜬다. 여기서 이름을 보고 수정가능!
document.title = "Scuba Dive-In"

// function handleReszie(event){
//     console.log(event);
    // console.log("I have been resized")
// }
//  window.addEventListener("resize", handleReszie);

function handleClick(){
    title.style.color = "orange";
}
 title.addEventListener("click", handleClick);