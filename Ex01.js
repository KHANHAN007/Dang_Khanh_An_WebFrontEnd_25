function findMinNumber(a) {
    if (a.length === 0) return "Mảng rỗng";
    let min = a[0];
    for (let num of a) {
        if (num < min)
            min = num;
    }
    return min;
}
let a = [];
let n = +prompt(`Nhập số phần tử`);
for (let i = 0; i < n; ++i){
    a.push(+prompt(`Nhập phần tử thứ ${i + 1}`));
}
console.log(findMinNumber(a));