class Person {
    private _name: String;
    private _age: Number;
    
    set name(nme){
        this._name = nme;
    }
    get name(){
        return this._name;
    }

    set age(age){
        this._age = age;
    }
    get age(){
        return this._age;
    }

    public getFullName()
    {
        return this._name + this._age.toString();
    }
}

let student = new Person();
// student.setAge(20);
student.name = "Anushka";
student.age = 20;
console.log(student.name);
console.log(student.getFullName());
console.log(student.age);