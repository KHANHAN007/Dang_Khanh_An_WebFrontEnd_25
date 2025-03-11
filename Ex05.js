let a = [];
let n;
do {
  n = +prompt("Nhập số lượng phần tử của mảng");
  if (!Number.isInteger(n) || n <= 0)
    console.log("Dữ liệu không hợp lệ! Vui lòng nhập một số nguyên dương.");
} while (!Number.isInteger(n) || n <= 0);
let count = 0;
for (let i = 0; i < n; ++i) {
  a.push(prompt(`Nhập phần tử thứ ${i + 1}`));
  count = a.reduce((total, num) => total + (num > 0 && Number.isInteger(num) ? 1 : 0), 0);
}

console.log(count);