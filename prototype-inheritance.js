const superObj = {superVal: 'super'}
const subObj = {subVal : 'sub'}
//타 객체를 슈퍼객체로 만들고, 슈퍼객체의 property 상속받기
subObj.__proto__=superObj;
console.log(subObj.subVal);
console.log(subObj.superVal);


//직접 연습
const fruits = {apple : 'red'}
const food = {avocado : 'green'}
food.__proto__=fruits; //fruits의 속성을 상속받기

console.log('avocado is',food.avocado);
console.log('apple is', food.apple); 
//food 객체에서 apple에 대한 속성값이 없음에도, 상속받았기 때문에 출력된다.

food.apple = 'light green';
console.log('apple is', food.apple);
console.log('apple is', fruits.apple);

//__proto__대신, 서브 오브젝트 만드는 또다른 방법
const snack = Object.create(fruits);
console.log("snack is", snack.apple);