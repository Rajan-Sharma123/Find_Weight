let val = document.getElementById("txt");
let btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  let w = document.getElementsByClassName("planets");
  let ans = 0;
  let arr = [0.37, 0.91, 1, 0.38, 2.34, 1.06, 0.92, 1.12];
  Array.from(w).forEach((element, index) => {
    ans = JSON.parse(val.value) * arr[index];
    element.innerHTML =  Math.trunc(ans);
  });
});
