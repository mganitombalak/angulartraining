var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getFullName = function () {
        return this.name + ' ' + this.surname;
    };
    return Person;
}());
var p = new Person('Gani', 'Tombalak');
// p.name='Gani';
// p.surname='Tombalak';
console.log(p.getFullName());
var Greeting = /** @class */ (function () {
    function Greeting(person) {
        this.person = person;
    }
    Greeting.prototype.sayHello = function () {
        console.log("Hello " + this.person.getFullName());
    };
    return Greeting;
}());
var g = new Greeting({
    name: 'Emre', surname: 'Turker', getFullName: function () {
        console.log("HA ha ha");
        return "olay";
    }
});
g.sayHello();
