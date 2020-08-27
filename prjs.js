// 연습1
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
//         areaNum="031";;
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
    var result;
    var dan=2;
    document.write("<h1>"+dan+"단</h1>");
    for(var k=1; k<=10; k++){
        result=k*dan;
        document.write("2X"+k+"="+result+"<br>");
    }