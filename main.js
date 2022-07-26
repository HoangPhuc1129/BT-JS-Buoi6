//Bài 1
function bai1() {
  //input
  //output
  let sum = 0;
  //xử lí
  let soHang = 1;
  while (sum + soHang < 10000) {
    sum += soHang;
    soHang++;
  }
  document.getElementById("bai1").value =
    "Số nguyên dương nhỏ nhất là : " + soHang;
}

//Bài 2
function tinh() {
  //input
  let tagSoX = +document.getElementById("soX").value;
  let tagSoN = +document.getElementById("soN").value;
  //output
  let ketQua = 0;
  let soHang = 1;
  //xử lí
  while (soHang <= tagSoN) {
    ketQua += Math.pow(tagSoX, soHang);
    soHang++;
  }
  document.getElementById("kQ").style.display = "block";
  document.getElementById("kQ").innerHTML = "Kết quả là : " + ketQua;
}

//Bài 3
function tinhToan() {
  //input
  let number = +document.getElementById("iSo").value;
  //output
  let tagKetQua = 1;
  //xử lí
  for (let i = 1; i <= number; i++) {
    tagKetQua *= i;
  }
  document.getElementById("ketQua3").style.display = "block";
  document.getElementById("ketQua3").innerHTML = "Giai thừa : " + tagKetQua;
}

//Bài 4
function taoDiv() {
  //input
  let iSo1 = 10;
  //output
  let output = "";
  //xử lí
  let sohang2 = 1;
  while (sohang2 <= iSo1) {
    let div1 = `<div class="alert alert-danger"> div lẻ ` + sohang2 + ` </div>`;
    let div2 =
      `<div class="alert alert-primary"> div chẵn ` + sohang2 + ` </div>`;
    if (sohang2 % 2 === 0) {
      output += div2;
    } else {
      output += div1;
    }
    sohang2++;
  }
  document.getElementById("ketQua4").innerHTML = output;
}
