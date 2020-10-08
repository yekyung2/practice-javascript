// //class 선언
// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     speak(){
//         console.log(`${this.name}: hello!`);
//     }
// }

// //object 생성 (새로운 오브젝트를 만들때는 new 라는 키워드를 쓴다.)
// const scuba = new Person('scuba', 20);
// console.log(scuba.name);
// console.log(scuba.age);


//생활코딩 객체 지향 프로그래밍 11.상속 개념
class Person{
    constructor(name, first, second){
        this.name = name;
        this.first = first;
        this.second = second;
    }
    sum(){
        return this.first+this.second;
    }
}

// class PersonPlus{
//     constructor(name, first, second){
//         this.name = name;
//         this.first = first;
//         this.second = second;
//     }
//     sum(){
//         return 'prototype :'+(this.first+this.second);
//     }
//     avg(){
//         return (this.first+this.second)/2;
//     }
// }

// const kim = new PersonPlus('kim', 10, 20);
// console.log(kim.name);
// console.log(kim.avg());
// console.log(kim.sum());

//중복 없애기
class PersonPlus extends Person{
    constructor(name, first, second, third){
        super(name, first, second);
        this.third = third;
    }
    sum(){
        return super.sum()+this.third;
    }
    avg(){
        return (this.first+this.second+this.third)/3;
    }
}

const kim = new PersonPlus('kim', 10, 20, 30);
console.log(kim.name);
console.log(kim.sum());
console.log(kim.avg());
