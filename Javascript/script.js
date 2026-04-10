// console.log("we are going to learn js");
// flname = "tony stark";
// console.log(flname);
// const product = {
//     title : "Ball pen ",
//     rating : 4,
//     offer : 5,
//     price : 720,
// };

// console.log(product);
// const profile = {
//     pname : "shardhakhapra",
//     posts : 195,
//     followers :598+"k",
//     following :4,
//     flnmae : "Shradha khapra",
//     profession : "entreprenuer",
//     experience : "apna college  | Ex-Microsoft,DRDO to educate someone is the hightest previlege",
// };

// console.log(profile);

// let mode ="light";
// let color;

// if(mode==="light"){
//     color ="blue";
// }
// if(mode==="dark"){
//     color="white"
// }
// console.log(color);
// alert("hello web deveopler !");// one time popup
// let fname=prompt("hello !");
// console.log(fname);
// let num = prompt("enter a number:");

// if(num % 5===0){
//     console.log(num ,"is multiple of 5");
// }else{
//      console.log(num ,"is not multiple of 5");
// }

/*let fulname = prompt ("enter you full without space");
username = "@"+ fulname + fulname.length;
console.log(username);*/

// array
/*let array = [23,56,78,89];
console.log(array);
console.log(array.length);
array[2] = 88;*/

// ------------------------------------------------------------

// practice question 1
// let cities = ["delhi" , "pune", "mumbai","punjab"];
/*for(let city of cities){
    console.log(city.toUpperCase());
}*/

// practice question 2

/*let marks = [85,97,44,37,76,60];
console.log(marks);
let sum=0;
for( let val of marks){
    sum=sum+val;
}
let avg = sum / marks.length;
console.log(`avg marks of the class is = ${avg} `);*/

// practice question 3 
/*let item = [250 , 645,300 ,900 ,50];

let i = 0;
for (let val of item){
      console.log(` value at index ${i} = ${val} `);
      let offer = val/10;
      item[i] = item[i] - offer; 
      console.log(`value after offer =${item[i]}`) 
      i++;
}*/

// another way to solve this question

let items=[250 , 645 , 300 , 900 , 50];
 for( let i = 0; i<items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items);
