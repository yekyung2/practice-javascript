//class 선언
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log(`${this.name}: hello!`);
    }
}

//object 생성 (새로운 오브젝트를 만들때는 new 라는 키워드를 쓴다.)
const scuba = new Person('scuba', 20)
console.log(scuba.name);
console.log(scuba.age);

