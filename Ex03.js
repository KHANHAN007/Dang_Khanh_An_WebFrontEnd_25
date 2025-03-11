function findEvenNumber(a) {
  let evenNumbers = a.filter((num) => num % 2 === 0);
  console.log(
    evenNumbers.length > 0 ? evenNumbers.join(" ") : "Không có số chẵn"
  );
}
let a = [];
let n;
do {
  n = +prompt("Nhập số phần tử:");
  if (!Number.isInteger(n) || n <= 0) {
    console.log("Dữ liệu không hợp lệ! Vui lòng nhập một số nguyên dương.");
  }
} while (!Number.isInteger(n) || n <= 0);
for (let i = 0; i < n; ++i) {
  let value;
  do {
    value = prompt(`Nhập phần tử thứ ${i + 1}:`).trim();
    if (value === "" || isNaN(value)) {
      console.log("Dữ liệu không hợp lệ! Vui lòng nhập một số hợp lệ.");
    } else {
      value = +value;
      break;
    }
  } while (true);
  a.push(value);
}

findEvenNumber(a);
