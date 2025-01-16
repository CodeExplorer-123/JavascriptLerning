// const id = document.querySelector("#id");
// id.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   alert("hello");
// });

const x = document.getElementsByClassName("cl");
x[0].addEventListener("mouseover", () => {
  console.log("hello");
});
