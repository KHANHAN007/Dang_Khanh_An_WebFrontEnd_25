let n = prompt(`Nhập một số nguyên dương`).trim();
    if (n === "" || isNaN(n) || n<=0) {
      console.log("Dữ liệu không hợp lệ! Vui lòng nhập một số hợp lệ.");
    } else {
        n = +n;
        if (isPrime(n))
            console.log("Là số nguyên tố");
        else
            console.log("Không phải là số nguyên tố");
    }
function isPrime(a) {
  if (a < 2) return false;
  if (a === 2) return true;
  if (a % 2 === 0) return false;
  for (let i = 3; i * i <= a; ++i) {
    if (a % i === 0) return false;
  }
  return true;
}
