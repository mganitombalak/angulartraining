interface IPerson {
    name: string;
    surname: string;
    getFullName(): string;
}
class Person implements IPerson {
    constructor(public name: string, public surname: string) { }
    getFullName(): string {
        return this.name + ' ' + this.surname;
    }
}
var p = new Person('Gani', 'Tombalak');
// p.name='Gani';
// p.surname='Tombalak';
console.log(p.getFullName());
class Greeting {
    constructor(private person: IPerson) { }
    sayHello(): void {
        console.log(`Hello ${this.person.getFullName()}`);
    }
}
var g = new Greeting({
    name: 'Emre', surname: 'Turker', getFullName: function () {
        console.log("HA ha ha");
        return "olay";
    }
});
g.sayHello();
