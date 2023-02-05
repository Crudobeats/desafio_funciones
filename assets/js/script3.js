// Script existente//

//   function pintar() {
//     ele = document.getElementById("ele1");
//     ele.style.backgroundColor = "yellow";
//   };

//   ele = document.getElementById("ele1");
//   ele.addEventListener("click", pintar);

// ----------------------------------------------- //

//Código modificado//

function pintar(ele, color = "green") {
  ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
  pintar(ele, "yellow");
});
