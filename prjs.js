// 2020.08.27-28 start 연습1
//var result =confirm("Do you like javascript?");
// var theText =result ? "good" : "No-good";
// document.write(theText);


// 연습2
// var myAge = prompt("Type in your age!");
// if(myAge>=20 && myAge<30){
//     document.write("Welcome!");
// }else{
//     document.write("bye");
// }


// 연습3
// var num=prompt("type in your score")
// if(num>=90){
//     document.write("A");
// }else if(num>=80){
//     document.write("B");
// }else{
//     document.write("bye");
// }


// 연습4
// var myArea = prompt("지역을 입력하세요", "서울");
// switch(myArea){
//     case "서울":
//         areaNum="02";
//         break;
//     case "경기":
//         areaNum="031";
//         break;
//     default:
//         alert("sorry");
// }
// document.write(myArea+" 지역번호는 "+areaNum+"입니다.");


// // 연습5
// for(var k=1; k<=10; k++){
//     document.write(k+"<br>");
// }

// for(var k=1; k<=6; k++){
// //  <h1>Hello. I'm Scuba.</h1>
//     document.write('<h'+k+'>'+"Hello, I'm Scuba."+'</'+k+'>');
// }

// for(var k=6; k>0; k--){
//     //  <h1>Hello. I'm Scuba.</h1>
//         document.write('<h'+k+'>'+"Hello, I'm Scuba."+'</'+k+'>');
//     }


// 연습6 while문 연습
// var i=10;
// while(i>=1){
//     if(i%2==0)
//     document.write(i+"<br>");
//     i--;
// }


// 연습7 for문
// var result;
// var dan=2;
// document.write("<h1>"+dan+"단</h1>");
// for(var k=1; k<=10; k++){
//     result=k*dan;
//     document.write("2X"+k+"="+result+"<br>");
// }
 

// 연습8 이중for문
// for (var k=2; k<=9; k++){
//     document.write("<h1>"+k+"단</h1><br>");
//     for (var m=1; m<=9; m++){
//     // 2 x 1 = 2,  k + "x" + m + "=" k*m
//     document.write(k+"x"+m+"="+(k*m)+"<br>");
//     }
// }


// 연습9 break문
// for(var i=1; i<=10; i++){
//     document.write(i+"<br>");
//     if(i==5) break;
// }


// 연습10 continue문
// for(var i=1; i<=10; i++){
//     if(i%2==1) continue;
//     document.write(i+"<br/>");
// }


// 연습11 객체의 생성 - new 연산자    
// var today=new Date();
// var todayy = today.getFullYear();
// document.write(todayy);



// 연습12 요일에 따라 이미지 출력하기
// var today = new Date();
// var nowDay = today.getDay();

// document.write(nowDay)
// if(nowDay==0){
//    document.write('<img src="images/practice3.jpg">');
// }else{
//     document.write("");
//     }

// 왜안됨...ㅠㅠ

// if(nowDay==1){
//     document.write('<img src="practice2.jpg" alt="월요일" />');
// }
// else if(nowDay==2){
//     document.write('<img src="images/practice3.jpg" alt="화요일" />');
// }
// else if(nowDay==3){
//     document.write('<img src="images/practice4.jpg" alt="수요일" />');
// }
// else if(nowDay==4){
//     document.write('<img src="images/practice5.jpg" alt="목요일" />');
// }
// else if(nowDay==5){
//     document.write('<img src="images/practice6.jpg"/>');
// }
// else if(nowDay==6){
//     document.write('<img src="images/practice7.jpg" alt="토요일" />');
// }
// else{
//     document.write('<img src="images/practice8.jpg" alt="일요일" />');
// }
// }

    
// 연습13 Math 객체 : 다른 내장 객체와 다르게 New(생성자 키워드)를 사용하지 않는 정적인 객체다.
// var maxNum = Math.max(30,70,5);
// document.write("최댓값"+ maxNum +"<br/>");

// var minNum = Math.min(8,10,15);
// document.write("최소값"+ minNum +"<br/>");

// var roundNum = Math.round(3.5);
// document.write("반올림"+ roundNum +"<br/>");

// var ceilNum = Math.ceil(5.1);
// document.write("소숫점올림"+ ceilNum +"<br/>");

// var floorNum=Math.floor(10.5);
// document.write("소숫점내림:"+floorNum+"<br />");

// var absNum=Math.abs(-10);
// document.write("절대값:"+absNum+"<br />");


// 랜덤이미지 출력하기 practice.2-8사이의 이미지.
// var imgNum = Math.floor(Math.random()*7)+2;
// document.write("<img src='images/practice"+imgNum+".jpg' alt='랜덤이미지'/>");

// 연습14
// var theText = "Hi web js city";
// theText = theText.bold();
// document.write(theText);

// theText = theText.length;
// document.write(theText);

// theText = theText.charAt(2);
// document.write(theText);


// 연습15
// document.write("<h3>문자치환</h3>");
// var theText1 = "img2_out.jpg";
// theText1 = theText1.replace("out","over");
// document.write(theText1+"<br />");


// 연습16 Array 객체 생성 방법 (서랍장, 하나의 변수에 여러개의 데이터를 저장하는 방법)
var days = ["일", "월", "화", "수", "목", "금", "토"];
var today = new Date();
var day= days[today.getDay()];
document.write(day+"요일"+"<br />");

// 전체 재산의 합 구하기
var money=[100,200,300,400];
var theLen = money.length;
var total = 0;
for(var i=0; i<theLen; i++){
    total = total + money[i];
}
document.write(total+"만원<br />");

//reverse() 배열 데이터 역순 정렬
var theFood=["사과","당근","고구마","호박"];
theFood.reverse();
console.log(theFood);
document.write(theFood,"<br>");

//sort() 배열 데이터 오름차순 정렬
var theSubway=["2호선","9호선","7호선","4호선","3호선"];
theSubway.sort();
document.write(theSubway,"<br>");

//concat() 배열된 데이터를 결합
var Mountain1=["남산","도봉산","관악산","청계산"];
var Mountain2=["설악산", "지리산"];
var joinResult=Mountain1.concat(Mountain2);
document.write(joinResult,"<br>");

//slice(시작 인덱스, 마지막 인덱스)-원하는 데이터만 선택
var theName =["준","설","산","조제","스쿠버"];
// var result=theName.slice(2,4)
var result=theName.slice(0,2)
document.write("단짝:"+result+"<br/>");

//join("구분자")-구분자 기준으로 데이터를 합친다.
var theProduct = ["냉장고", "컴퓨터","선풍기","밥솥","핸드폰"];
var joinResult = theProduct.join("✅");
document.write(joinResult+"<br/>");


//드디어 함수!!!
//기본적인 함수의 정의와 호출
// function greet(){
//     alert("bye bye");
// }

var num = 2;
function nextGallery(){
    num++
    if(num>8) num=2;
    document.getElementById("gallery").src="images/practice"+num+".jpg";
    return false;
}

function prevGallery(){
    num--
    if(num<2) num=8;
    document.getElementById("gallery").src="images/practice"+num+".jpg";
}


// 함수 연습2
function greet(theText){
    alert(theText)
}