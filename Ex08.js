function isStrongPassword(password) {
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}
let str = prompt("Nhập chuỗi");
console.log(isStrongPassword(str) ? "true" : "false");