const num1El = document.getElementById("num1") as HTMLInputElement;
const num2El = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button")!;

type NumOrString = number | string;
interface ResultObj {
  val: number;
  time: Date;
}

function add(num1: NumOrString, num2: NumOrString) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  }
  return +num1 + +num2;
}

const numResults: number[] = [];
const textResults: Array<string> = [];
function printResult(resultObj: ResultObj) {
  console.log("ans" + resultObj.val);
}

buttonEl.addEventListener("click", () => {
  const num1 = num1El.value;
  const num2 = num2El.value;
  const value = add(+num1, +num2);
  numResults.push(value as number);
  let stringifiedResult = add(num1, num2);
  textResults.push(stringifiedResult as string);
  printResult({ val: value as number, time: new Date() });
  console.log(numResults);
  console.log(textResults);
});

const myPromise = new Promise<string>((res, rej) => {
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
