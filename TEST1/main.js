//5)
function part2() {
  const request = new XMLHttpRequest();
  request.open("GET", "keys.json");
  request.setRequestHeader("Content-type", "application/json");
  request.send();

  request.onload = () => {
    const { key1, key2, key3 } = JSON.parse(request.response);
    console.log(
      "key1:" + " " + key1 + ",",
      "key2:" + " " + key2 + ",",
      "key3:" + " " + key3 + ","
    );
  };
}

part2();

//1)
const regExp = /^\d+$/;

const containsOnlyDigits = (str) => {
  return regExp.test(str);
};

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false

// 2)
// function startTimer() {
//   setInterval(() => {
//     console.log("Прошла секунда");
//   }, 1000);
// }

// startTimer();

//3)

// const count = () => {
//   let i = 1;
//   const interval = setInterval(() => {
//     console.log(i);
//     if (i >= 10) {
//       clearInterval(interval);
//     }
//     i++;
//   }, 1000);
// };

// count();

//4)

const block = document.querySelector(".block");
block.onclick = (event) => {
  if (event.target.classList.contains("red")) {
    event.target.classList.remove("red");
  } else {
    event.target.classList.add("red");
  }
};
