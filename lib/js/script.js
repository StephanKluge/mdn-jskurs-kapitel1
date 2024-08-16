//Einfaches If-statement mit else if und else

let a = 5; // variable wert 5 zuweisen
let b = 3; // variable wert 3 zuweisen
 
if (a<b){//vergleiche variable a mit b
    console.log("5 ist nicht größer als 3")//wenn a wirklich größer als b dann schreibe in console,
} else if (a==b){
    console.log("5 ist gleich 3") //sollte 5 gleich 3 sein, würde else ausgeführt. ist natürlich quatsch ist.
}else {
    console.log("5 ist sehr wohl größer als 3, du honk") //natürlich ist 5 größer, also läuft das else
}

// Logical operators
// 1.OR-Operator mit Beispiel

let c = 5;
let d = 3;
let e = 10;
let f = 15;

if (c>d || e<f) {
    console.log('Die OR-Bedingung hat geklappt')
};
// Lets get deeper

let one = 12;
let two = 4;
let three = 800;

if (one == 10 || two == 1 || three == 800){//1. is false, 2. is false, 3. is thruthy
    console.log('The multiple OR-Statemant give the first thruthy argument back')
};

// && AND-Operator

let weather = 'sunny';
let time = 'morning';

if (weather == 'sunny' && time == 'morning') {//Wenn beide bedingungen zu treffen, wird der Code abgespielt
    console.log('Es ist ein sonniger Morgen, geh raus du Nerd!')
};
        