"use strict";

//alert("P210");

/*
    Multiline comment
    Multiline comment
    Multiline comment
 */

 let name;
 name = "Parvin";
 let surName = "Pashazade";
 var message = 'Hello';
 //alert(message);

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed ${str}`;
// let phrase2 = `${str} ${str2}`;
// let phrase3 = str +" "+ str2;
// alert(phrase3);

// let counter = 2;
// counter = counter + 5;
// alert(counter);      
// counter +=5;
// alert( counter ); // 3

//alert(5 > 3 ? "boyukdur" : "kicikdir" );

//alert( 'Glow' < 'Glow' );


// let x = 0;
// let i = 10;
// while(i > x){
//     i--;
//     if(i==5){
//         continue;
//     }
//     console.log(i);
// }


// do{
//     console.log("do while");
//     i++;
// } while(false);

// console.log("i = " + i);
// console.log(`i = ${i}`);

// console.log("for loop");
// for(i=1; i < 100; i*=2){
//     console.log(i);
// }




let a = 2 + 1;

if(a == 3){
    alert( 'Too small' );
} else if (a == 4){
    alert( 'Exactly!' );
} else if(a == 5 ){
    alert( 'Too large' );
} else {
    alert( "I don't know such values" );
}

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
    break;
}