let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];
let cart = [];
let choice;
do {
    choice = +prompt("Chọn chức năng:\n" +
        "1. Xem danh sách sản phẩm\n" +
        "2. Mua sản phẩm\n" +
        "3. Xem giỏ hàng\n" +
        "4. Thanh toán và thoát"
    );
    switch (choice) {
        case 1:
            showProducts();
            break;
        case 2:
            let productName = prompt("Nhập tên sản phẩm muốn mua");
            let index = findProduct(productName);
            if (index === -1) {
                alert("Sản phẩm không có trong của hàng");
            }
            else {
                addToCart(index);
            }
            break;
        case 3:
            showCart();
            break;
        case 4:
            showCart();
            alert("Cảm ơn bạn đã mua hàng! Hẹn gặp lại.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng chọn lại");
    }
} while (choice !== 4);

function showProducts() {
    let str = "Danh sách sản phẩm có sãn\n";
    for (let product of products) {
        str += `${product[0]} - Số lượng: ${product[1]} - Giá: ${product[2]} VND\n`;
    }
    alert(str);
}
function findProduct(name) {
    for (let i = 0; i < products.length; i++) {
        if (products[i][0] === name) return i;
    }
    return -1;
}
function addToCart(index) {
    let product = products[index];
    if (product[1] === 0) {
        alert(`Sản phẩm "${product[0]}" đã hết hàng.`);
        return;
    }
    product[1]--;
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i][0] === product[0]) {
            cart[i][1]++;
            found = true;
            break;
        }
    }
    if (!found === true) {
        cart.push([product[0], 1, product[2]]);
    } alert(`Đã thêm "${product[0]}" vào giỏ hàng.`);
}
function showCart() {
    if (cart.length === 0) {
        alert("Giỏ hàng trống.");
        return;
    }
    let cartContent = "Giỏ hàng của bạn:\n";
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        let cost = cart[i][1] * cart[i][2];
        total += cost;
        cartContent += `${cart[i][0]} - Số lượng: ${cart[i][1]} - Giá: ${cart[i][2]} VND - Thành tiền: ${cost} VND\n`;
    }
    cartContent += `Tổng tiền: ${total} VND`;
    alert(cartContent);
}