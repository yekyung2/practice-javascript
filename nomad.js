// const title = document.getElementById("title");
const title = document.querySelector("#title");

title.innerHTML= "Hey, It's Time to Dive-In!";
// console.log(title);

console.dir(title); //콘솔창에 h1#title이 뜨고, 많은 attributes가 뜬다! 이렇게 다양한 속성값
//확인해주고 아래처럼 html이 아닌 js에서 다양한 속성값들을 수정가능 하게된다.
// title.style.color = "royalblue";

console.dir(document); //콘솔창에 #document에 관련된 attributes 뜬다. 여기서 이름을 보고 수정가능!
document.title = "Scuba Dive-In"

// function handleReszie(event){
//     console.log(event);
    // console.log("I have been resized")
// }
//  window.addEventListener("resize", handleReszie);

// function handleClick(){
//     title.style.color = "orange";
// }
//  title.addEventListener("click", handleClick);


 //if-else 개념
//  if(10===5){
//      console.log("hi");
//  } else if(10 === "10"){
//      console.log("ho");
//  } else{
//      console.log("lalala")
//  }

// //&&, || : and, or
//  if(20>5 || "nicolas" === "nicolas"){
//      console.log("yes");
//  } else{
//      console.log("no");
//  }

//연습 용으로 쓰지만, prompt는 fancy하지 않아 이제 쓰지 않아!!
//  const age = prompt("How old are you");
// if(age > 18 && age <=21 ){
//  console.log("you can but you should not drink")
// } else {
//     console.log("you can't")
// }

//클릭시 색깔 변환
// const BASE_COLOR = "royalblue";
// const OTHER_COLOR = "orange";

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }
//     else {
//         title.style.color = BASE_COLOR;  
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("mouseenter", handleClick);
// }

// init();

//모든 자바스크립트 이벤트 참조 https://developer.mozilla.org/ko/docs/Web/API/Event
//javascirpt events DOM mdn 구글에 검색!

function handleOffline(){
    console.log("Byebye");
}

function handleOnline(){
    console.log("Welcome back");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);


//간단버전
// const title = document.querySelector('#title')
const CLICKED_CLASS = 'clicked';
function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
function init(){
    title.addEventListener("mouseover", handleClick);
}
init();