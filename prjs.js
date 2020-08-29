// 2020.08.27-28 연습1
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


// while문 연습
// var i=10;
// while(i>=1){
//     if(i%2==0)
//     document.write(i+"<br>");
//     i--;
// }


// for문
    // var result;
    // var dan=2;
    // document.write("<h1>"+dan+"단</h1>");
    // for(var k=1; k<=10; k++){
    //     result=k*dan;
    //     document.write("2X"+k+"="+result+"<br>");
    // }
 

    // 이중for문
    // for (var k=2; k<=9; k++){
    //     document.write("<h1>"+k+"단</h1><br>");
    //     for (var m=1; m<=9; m++){
    //     // 2 x 1 = 2,  k + "x" + m + "=" k*m
    //     document.write(k+"x"+m+"="+(k*m)+"<br>");
    //     }
    // }


    //break문
    // for(var i=1; i<=10; i++){
    //     document.write(i+"<br>");
    //     if(i==5) break;
    // }


    // continue문
    // for(var i=1; i<=10; i++){
    //     if(i%2==1) continue;
    //     document.write(i+"<br/>");
    // }


    // 객체의 생성 - new 연산자    
    // var today=new Date();
    // var todayy = today.getFullYear();
    // document.write(todayy);



    // 요일에 따라 이미지 출력하기
    // var today = new Date();
    // var nowDay = today.getDay();

    // // document.write(nowDay)
    // if(nowDay==5){
    //     document.write("<img src="images/practice3.jpg" style= "width: 50%">");
    // }else{
    //         document.write('bye');
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
    //     document.write('안녕 <img src="images/practice6.jpg"/>');
    // }
    // else if(nowDay==6){
    //     document.write('<img src="images/practice7.jpg" alt="토요일" />');
    // }
    // else{
    //     document.write('<img src="images/practice8.jpg" alt="일요일" />');
    // }
    // }

    
// Math 객체 : 다른 내장 객체와 다르게 New(생성자 키워드)를 사용하지 않는 정적인 객체다.
// var maxNum = Math.max(30,70,5);
// document.write("최댓값"+ maxNum +"<br/>");

var imgNum = Math.floor(Math.random()*7)+2;
document.write("<img src='images/practice"+imgNum+".jpg' alt='랜덤이미지'/>");

