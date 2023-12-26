"use strict";
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const buttonEl = document.querySelector("button");
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return +num1 + +num2;
}
const numResults = [];
const textResults = [];
function printResult(resultObj) {
    console.log("ans" + resultObj.val);
}
buttonEl.addEventListener("click", () => {
    const num1 = num1El.value;
    const num2 = num2El.value;
    const value = add(+num1, +num2);
    numResults.push(value);
    let stringifiedResult = add(num1, num2);
    textResults.push(stringifiedResult);
    printResult({ val: value, time: new Date() });
    console.log(numResults);
    console.log(textResults);
});
const myPromise = new Promise((res, rej) => {
    setTimeout(() => {
        res("hello");
    }, 1000);
});
myPromise
    .then((result) => {
    console.log(result.split("e"));
})
    .catch((err) => {
    console.error(err);
});
