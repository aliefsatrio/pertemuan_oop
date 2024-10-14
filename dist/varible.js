"use strict";
let nama = "alief satrio";
console.log("nama: ", nama);
let umur = 19;
console.log("umur: ", umur);
let mahasiswa = true;
console.log("ini mahasiswa: ", mahasiswa);
let matrix;
matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];
console.log(matrix);
let result = 123;
let result1 = "123";
console.log(typeof result);
console.log(typeof result1);
console.log(result);
// generic array
let matrix2;
matrix2 = [
    123,
    123
];
console.log(matrix2);
//arrey daalam arrey
let matrix1;
matrix1 = [
    [1, 2],
    [3, 4],
    [5, 6],
];
console.log(matrix1);
// Object
let person = {
    name: "jhon",
    age: 30
};
console.log("person:", person);
// any
let randomValue = 10;
console.log("random nilai (number): ", randomValue);
randomValue = "Hello";
console.log("random nilai (number): ", randomValue);
randomValue = true;
console.log("random nilai (number): ", randomValue);
// Enum
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
let favouriteColor = Color.red;
console.log(favouriteColor);
// Tuple
let myTuple = [10, "Hallo"];
console.log(myTuple[0]);
console.log(myTuple[1]);
// union
let typeUnion;
typeUnion = 101;
console.log("identifier (number): ", typeUnion);
console.log("identifier (string): ", typeUnion);
console.log("identifier (boolean): ", typeUnion);
