class Person{
    protected _name;
    protected _age;
    set name(nme) {
        this._name = nme;
    }
    get name() {
        return this._name;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
    
}
class Student extends Person{
    getFullDetail() {
        return this._name + this._age;
    }
}
class Teacher extends Person{
    
}

let student = new Student();
student.age = 20;
student.name = "Divanshu";
console.log(student.getFullDetail());



// let teacher = new Teacher();
// teacher.age = 28;
// teacher.name = "Varun";


