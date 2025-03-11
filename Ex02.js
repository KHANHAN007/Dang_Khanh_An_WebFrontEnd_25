function sum(a, b) {
    return a + b;
}
let a = prompt("Nhập số thứ nhất");
let b = prompt("Nhập số thứ hai");
a = a.trim() === "" ? NaN : +a;
b = b.trim() === "" ? NaN : +b;
if (
  !Number.isFinite(a) ||
  !Number.isFinite(b) ||
  !Number.isInteger(a) ||
  !Number.isInteger(b)
)
  console.log("Dữ liệu không hợp lệ");
else console.log(sum(a, b));