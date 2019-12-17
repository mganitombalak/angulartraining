//HOISTING
//THIS SCOPE
// var myVariable = {
//     name: "Gani",
//     surname: "Tombalak",
//     getFullName: function () {
//         console.log(this);
//         console.log(this.name + ' ' + this.surname);
//     }
// };//Literal Javascript Object

// console.log(this);
// console.log(myVariable.name);
// console.log(myVariable.surname);
// console.log(myVariable.getFullName);
// console.log(myVariable.getFullName());

// var person = function (isim, soyisim) {
//     this.name = isim;
//     this.surname = soyisim;
//     // this.getFullName = () => this.name + ' ' + this.surname;
//     this.updateName = function (newValue) {
//         this.name = newValue;
//         console.log(this);
//     };
//     this.updateName("Halkbank");

// };
// var p = new person('Emre', 'Turker');
// console.log(p.name);

// person.prototype.getFullName = () => this.name + ' ' + this.surname;
// var p1 = new person('Sadik', 'Umurlu');
// p.getFullName.bind(p);
// p1.getFullName.bind(p1);
// console.log(p.getFullName());
// console.log(p1.getFullName());
// console.log(p.name);
// console.log(p.surname);
// console.log(p1.name);
// console.log(p1.surname);
// console.log(myVariable);
// console.log(this);
//FUNCTION
// function myFunc() {
//     var myVariable = '2. Hello Halkbank';
//     console.log(myVariable);
//     console.log(this.myVariable);
//     console.log(this);
// }

// myFunc();



// var f = function(greeting){
//     return function(name){
//        console.log(greeting + ' ' + name);
//     };
// };

// var r =f('Merhaba');
// r('Erhan');
//FUNCTION EXPRESSION
// var f = function (name) {
//     console.log('Hello' + name);
// }

(function (name) {
    this.name = "TEST";
    console.log('Hello' +' '+ name);
}('Gani'));