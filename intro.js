var Person = /** @class */ (function () {
    function Person() {
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (nme) {
            this._name = nme;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Person.prototype.getFullName = function () {
        return this._name + this._age;
    };
    return Person;
}());
var student = new Person();
// student.setAge(20);
student.name = "Anushka";
student.age = 20;
console.log(student.name);
console.log(student.getFullName());
console.log(student.age);
