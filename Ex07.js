let str = prompt("Nhập chuỗi:");
console.log(capitalizeWords(str).join(" "));

function capitalizeWords(str) {
    return str.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1));
}