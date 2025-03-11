let users = [];
do {
    let email = prompt("Nhập email muốn thêm hoặc exit để thoát");
    if (email === "exit")
        break;
    if (!valiDateEmail(email)) {
        alert("Email không hợp lệ. Hãy nhập lại.");
        continue;
    }
    let found = false;
    for (let emails of users) {
        if (emails === email) {
            found = true;
            break;
        }
    }
    if (found)
        alert("Tài khoản đã tồn tại");
    else {
        users.push(email);
        alert("Đăng ký thành công");
    }
} while (true)
function valiDateEmail(email) {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|vn)$/.test(email);
} 