// Task1
// 4 reqemli eded verilib. Bu ededin eveline 7 reqemini , axirinada 8 reqemini artir. Example1: 3333= 733338
// let number = 340;
// if (number / 1000 > 1 && number / 1000 < 10) {
//     let newNum = "7" + number + "8";
//     console.log(newNum);
// }else{
//     console.log("eded 4 reqemli deyil");
// }

// Task2
//  1-1000 qeder ederlerin icerisinden ele ededleri cap et ki, reqemleri cemi 3-e bolunsun
// for (let i = 1; i < 1000; i++) {
//   let number = i;
//   let sum = 0;
//   while (number > 0) {
//     sum += number % 10;
//     number = (number - (number % 10)) / 10;
//   }
//   if (sum % 3 === 0) {
//     console.log(i);
//   }
// }

//Task3
//  2 dene eded verilib. I eded 4 reqemli II eded 7 reqemlidir. I ededin 4%-ni tap. Sonra II ededin 9% ni tap.
//  Sonra Cavalari toplayib 10 %ni tap.
// let num1 = 1234;
// let num2 = 1235547;
// if (num1 / 1000 >= 1 && num1 / 1000 < 10) {
//   if (num2 / 1000000 > 1 && num2 / 1000000 < 10) {
//    let sum=  (num1 * 0.04 + num2 * 0.09) * 0.1;
//    console.log(sum);
//   } else {
//     console.log("II eded 7 reqemli deyil");
//   }
// } else {
//   console.log("I eded 4 reqemli deyil");
// }

//Task4
// Qapi var hundurluk ve eni verilib.Elimizde skaf var uzunlugu hundurluyu ve eni verilib.Bu skaf qapidan kecermi?
// let qapiEn = 200;
// let qapiH = 300;
// let skafUz = 120;
// let skafH = 300;
// let skafEn = 150;
// if (qapiEn > skafUz && qapiH > skafH) {
//   console.log("kecer");
// } else if (qapiEn > skafH && qapiH > skafUz) {
//   console.log("kecer");
// } else if (qapiEn > skafEn && qapiH > skafUz) {
//   console.log("kecer");
// } else if (qapiEn > skafUz && qapiH > skafEn) {
//   console.log("kecer");
// } else if (qapiEn > skafEn && qapiH > skafH) {
//   console.log("kecer");
// } else if (qapiEn > skafH && qapiH > skafEn) {
//   console.log("kecer");
// } else {
//   console.log("kecmez");
// }

//Task5 SWITCH operatoru ile yoxla.
// Verilmish ededdin sonuncu reqemi
// 1 olarsa-"I gun" sozunu
// 2 olarsa-"II gun" sozunu
//         ...
// 7 olarsa-"VII gun" sozunu yaz

// let number = 63;
// let lastNum = number % 10;
// switch (lastNum) {
//   case 1:
//     console.log("I gun");
//     break;
//   case 2:
//     console.log("II gun");
//     break;
//   case 3:
//     console.log("III gun");
//     break;
//   case 4:
//     console.log("IV gun");
//     break;
//   case 5:
//     console.log("V gun");
//     break;
//   case 6:
//     console.log("VI gun");
//     break;
//   case 7:
//     console.log("VII gun");
//     break;

//   default:
//     console.log("Bele gun yoxdur");
//     break;
// }

//Task6 IF operatoru ile yoxla.6 dene eded verilib. Bu ededlerden hansi en boyukdur.
// let numbers = [1, 5, 3, 8, 2, 7];
// let num1=1, num2=8,num3=3,num4=4,num5=5,num6=6;
// let maxNum = num1;
// if (num2 > maxNum) maxNum = num2;
// if (num3 > maxNum) maxNum = num3;
// if (num4 > maxNum) maxNum = num4;
// if (num5 > maxNum) maxNum = num5;
// if (num6 > maxNum) maxNum = num6;

// console.log("Ən böyük ədəd: " + maxNum);
