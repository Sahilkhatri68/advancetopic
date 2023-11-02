const arr = [
  45, 2, 4, 3, 78, 65, 9, 13, 57, 57, 57, 57, 57, 93, 22, 78, 91, 98, 75, 65, 6,
];
// const secondsmallestnumber = arr.sort((a, b) => a - b);
// console.log(secondsmallestnumber);
// console.log("Second smallest : " + secondsmallestnumber[1]);
// const secondhigestnumber = arr.sort((a, b) => b - a);
// console.log("Second highest : " + secondhigestnumber[1]);

// // // code of sum of all emenent of array-------
// function sumofarr() {
//   let sum = 0;
//   for (let e of arr) {
//     sum += e;
//   }
//   return sum;
// }
// const totalsum = sumofarr();
// console.log(totalsum);

// // // code to remove specific element from arr------
// function removespecificelementfromarr(arr, elemenToRemove) {
//   if (arr.includes(elemenToRemove)) {
//     console.log(elemenToRemove + " Removed from array");
//     const newArr = arr.filter((e) => e !== elemenToRemove);
//     return newArr;
//   } else {
//     console.log("Number is not present in array");
//   }
// }
// const newarray = removespecificelementfromarr(arr, 93);
// console.log(newarray);

// // code to merge two obj-------
// function mergeTwoObj(obj1, obj2) {
//   const mergeObj = { ...obj1, ...obj2 };
//   return mergeObj;
// }
// const object1 = { name: "Sahil", age: 22 };
// const object2 = { city: "Mandi" };
// const ResultafterMerge = mergeTwoObj(object1, object2);
// console.log(ResultafterMerge);

// const removedelement = arr.unshift(-19, -20);
// console.log(removedelement);
// const sliceditem = arr.slice(1, 5);
// console.log("sliceditem : " + sliceditem);
// const dataarr = arr.map((i, key) => {
//   return {
//     i: key,
//     value: i,
//   };
// });
// console.log(dataarr);
// console.log("Total length : " + arr.length);
// // const secondlast = arr[arr.length - 3];
// // console.log(secondlast);
// const middleElement = Math.floor(arr.length / 2);
// console.log("middleElement : " + arr[middleElement]);
// // const mids = arr[arr.length - middleElement];
// // console.log("Center : " + mids);
// const midmid = Math.floor(middleElement / 2);
// console.log("MidinsideMid : " + arr[midmid]);
// function outerfun() {
//   const msgfromout = "Hello from out";
//   function innerfun() {
//     console.log(msgfromout);
//   }
//   return innerfun;
// }
// const clos = outerfun();
// clos();
// console.log(
//   "Middle Element at " + middleElement + " Index is " + arr[middleElement]
// );
// const sortedarr = arr.sort((a, b) => b - a);
// // console.log(sortedarr);
// const ascArr = arr.sort((a, b) => a - b);
// // console.log(ascArr);

// const getevenfromarr = arr.filter((i) => i % 2 === 0);
// // console.log(getevenfromarr);
// const str = "Sahil khatri is a programmer";
// // console.log(str);
// // console.log(str.split("").reverse("").join(""));

// // const evennum = arr.filter((arr) => arr % 2 === 0);
// // console.log(evennum);

// // function reverstring(inp) {
// //   return inp.split("").reverse().join("");
// // }

// // let database = db.database("dbname");

// // db.collection("name")
// //   .find("")
// //   .limit(10)
// //   .toArray(function (err, res) {
// //     if (err) throw err;
// //     res.send("");
// //   });

// // coll of doc with key num and match and get doc whose no is 5

// // $qury={
// //     key:"num"
// // }
// // db.collection("name").(
// //   ($qury = {
// //     key: "num",
// //   })
// // ).toArray

// const myArray = [
//   1, 2, 3, 2, 4, 2, 5, 6, 6, 6, 6, 6, 6, 6, 6, 60, 3, 2, 4, 2, 3,
// ];
// // const mappedarr = myArray.map((item, key) => {
// //   return { index: key, value: item };
// // });
// // console.log(mappedarr);
// function findRepeatedNumbers(arr) {
//   const numberCounts = {}; // Use an object to track the counts of each number
//   const repeatedNumbers = [];

//   for (const number of arr) {
//     if (numberCounts[number]) {
//       // If the number has been encountered before, mark it as repeated
//       if (numberCounts[number] === 1) {
//         repeatedNumbers.push(number);
//       }
//       numberCounts[number]++;
//     } else {
//       numberCounts[number] = 1;
//     }
//   }

//   return repeatedNumbers;
// }

// const repeatedNumbers = findRepeatedNumbers(myArray);
// console.log("Repeated numbers:", repeatedNumbers);

// function findAllOccurrences(arr, numberToFind) {
//   const occurrences = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === numberToFind) {
//       occurrences.push(i);
//     }
//   }

//   return occurrences;
// }

// // const myArray = [1, 2, 3, 2, 4, 2, 5];
// const numberToFind = 2;

// const result = findAllOccurrences(myArray, numberToFind);
// console.log(`Indices of ${numberToFind} in the array: ${result}`);

// // // factorial code------
// function factfun(n) {
//   if (n <= 0) {
//     console.log("Enter nu larger than 1");
//     return 1;
//   } else {
//     return n * factfun(n - 1);
//   }
// }

// const n = 5;
// const ans = factfun(n);
// console.log("Factorial is : " + ans);

// function findMaxfromthree(a, b, c) {
//   if (a > b && a > c) {
//     console.log("A is big");
//   } else if (b > a && b > c) {
//     console.log("B is big");
//   } else {
//     console.log("C is big");
//   }
// }
// findMaxfromthree(100, 1023, 22);

// // // code to remove duplicate element from array-----
// function removeduplicatearr() {
//   const uniquearr = [];
//   for (let e of arr) {
//     if (!uniquearr.includes(e)) {
//       uniquearr.push(e);
//     }
//   }
//   return uniquearr;
// }
// const newarr = removeduplicatearr(arr);
// console.log(newarr);

// fibonacci series------
