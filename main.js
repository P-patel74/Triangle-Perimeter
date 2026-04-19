// Triangle Perimeter Assignment

document.getElementById("calculate").addEventListener("click", calculator);

//getting values and showing the output
function calculator() {
  let xA = +document.getElementById("xA").value;
  let yA = +document.getElementById("yA").value;
  let xB = +document.getElementById("xB").value;
  let yB = +document.getElementById("yB").value;
  let xC = +document.getElementById("xC").value;
  let yC = +document.getElementById("yC").value;

  let dif_AB = document.getElementById("outputAB").innerHTML = dist(xA, yA, xB, yB);
  let dif_AC = document.getElementById("outputAC").innerHTML = dist(xA, yA, xC, yC);
  let dif_BC = document.getElementById("outputBC").innerHTML = dist(xB, yB, xC, yC);

  document.getElementById("outputP").innerHTML =
    dif_AB + dif_AC + dif_BC;
}

// math for the calculations
function dist(x1, y1, x2, y2) {
  return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
}
