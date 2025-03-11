let str = prompt("Nhập chuỗi");
alert(isPalindrome(str) ? "Chuỗi đối xứng" : "Chuỗi không đối xứng");
function isPalindrome(str) {
  return str === [...str].reverse().join("");
}
