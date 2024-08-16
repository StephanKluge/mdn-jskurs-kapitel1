// //Einfaches If-statement mit else if und else

// let a = 5; // variable wert 5 zuweisen
// let b = 3; // variable wert 3 zuweisen
 
// if (a<b){//vergleiche variable a mit b
//     console.log("5 ist nicht größer als 3")//wenn a wirklich größer als b dann schreibe in console,
// } else if (a==b){
//     console.log("5 ist gleich 3") //sollte 5 gleich 3 sein, würde else ausgeführt. ist natürlich quatsch ist.
// }else {
//     console.log("5 ist sehr wohl größer als 3, du honk") //natürlich ist 5 größer, also läuft das else
// }

// // Logical operators
// // 1.OR-Operator mit Beispiel

// let c = 5;
// let d = 3;
// let e = 10;
// let f = 15;

// if (c>d || e<f) {
//     console.log('Die OR-Bedingung hat geklappt')
// };
// // Lets get deeper

// let one = 12;
// let two = 4;
// let three = 800;

// if (one == 10 || two == 1 || three == 800){//1. is false, 2. is false, 3. is thruthy
//     console.log('The multiple OR-Statemant give the first thruthy argument back')
// };

// // && AND-Operator

// let weather = 'sunny';
// let time = 'morning';

// if (weather == 'sunny' && time == 'morning') {//Wenn beide bedingungen zu treffen, wird der Code abgespielt
//     console.log('Es ist ein sonniger Morgen, geh raus du Nerd!')
// };
      

// // Das Not-Argument !
// //hier verwenden wir die parameter aus dem vorherigen beispiel let weather und let time
// if (weather !='rainy' && time !='night') {//wir sagen "wenn es nicht ( !=) regnet UND (&&) es nicht (!=) Nacht ist, soll der code abgespielt werden"
//     console.log('Wirklich! Geh mal raus!')
// };


// //Excersice from javascript.info
// //Write an if condition to check that age is between 14 and 90 inclusively.
// //“Inclusively” means that age can reach the edges 14 or 90.
// //Wenn man nun im Code in den Konstanten das Alter verändert, kommt ein jeweiliges anderes Ergebnis raus!
// const MinAge = 14; //Konstante Mindesalter
// const MaxAge = 90;//Konstante Maximalalter

// if (MinAge>=14 && MaxAge <=90){//Wenn Alter Größer/Gleich 14 UND Kleiner/Gleich 90 ist, liegt das alter zwischen 14 und 90
//     console.log('Das alter liegt zwischen 14 und 90')
// };

// //Write an if condition to check that age is NOT between 14 and 90 inclusively.
// //Create two variants: the first one using NOT !, the second one – without it.
// if (!(MinAge>=14 && MaxAge<= 90)){//Wenn alter NICHT (!) Größer/gleich 14 UND kleiner/gleich 90, liegt alter nichz wischen 14 und 90
//     console.log('Das Alter liegt nicht zwischen 14 und 90')
// };
// if (MinAge<14 && MaxAge>90){//Wenn alter kleinerals 14 UND wenn alter größer als 90, dann liegt alter nicht zwischen 14 und 90
//     console.log('Das Alter liegt immer noch nicht zwischen 14 und 90')
// };

// // Write the code which asks for a login with prompt.

// // If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// // The password is checked as follows:

// // If it equals “TheMaster”, then show “Welcome!”,
// // Another string – show “Wrong password”,
// // For an empty string or cancelled input, show “Canceled”


// let userName = prompt("Who's there?") //Erzeugt eine Eingabeaufforderung
// if(userName==="Admin"){ //Wenn Eingabe Admin ist wird nächster Code abgespielt
//     let pass = prompt("Password?", "")//Erzeugt abfrage nach Passwort
//     if (pass==="TheMaster"){//Wenn Passwort TheMaster ist erzeugt alert eine Welcome-nachricht
//         alert("Welcome!")
//     }else if(pass==="" || pass === null){//Wenn Passworteingabe leer ist oder abgebrochen wird (null) erzeugt alert eine Cancelednachricht
//         alert("Canceled")
//     }else {//Wenn irgend ein anderes Passwort eingegeben wird, steht da Wrong Password
//         alert("Wrong Password!")
//     }
// }else if (userName==="" || userName === null){//Wenn userName leer oder abgebrochen erzeugt alert eine CanceledNachricht
//     alert("Canceled")
// }else{//Wenn ein anderer UserName eingegeben wird als Admin, erzeugt alert eine Nachricht, dass man ihn nicht kennt.
//     alert("I don't know You!")
// }


// //Other Excercise

// let begin=prompt("What is the official name of Javascript?", "");
// if(begin==="ECMAScript"){
//     alert("Right!")
// }else{
//     alert("You don't know? ECMAScript!")
// }

//Textadventure Charerstelleung

const charCreate = prompt("Bitte geben Sie den Namen Ihres Charakters ein:", "");//Erzeugt eine Eingabeaufforderung um einem Spielercharacter einen Namen zu geben
const playerName = charCreate;//Speichert die Eingabe des Benutzers in der Variable "playerName" ab. Später kann man den Spielernamen über den Variablennamen abrufen.
console.log("Der Spielername lautet: "+playerName); //Überprüfung ob Namenserstellung und Speicherung funktioniert.