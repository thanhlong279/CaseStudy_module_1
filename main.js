let production1 = new Product("150", "Iphone", "Apple", "15 promax", "new", "999", "10", "10");
let arr = [production1];
// tạo 1 đối tượng manage nhận 1 mảng các thuộc tính của sản phẩm
let manage = new Production_Management(arr);
function addProduct() {
    let code = document.getElementById("code").value;
    let fullName = document.getElementById("fullName").value;
    let producer = document.getElementById("made").value;
    let model = document.getElementById("model").value;
    let status = document.getElementById("status").value;
    let price = document.getElementById("price").value;
    let promotion = document.getElementById("promotion").value;
    let inventory = document.getElementById("inventory").value;
    if (code === "" || fullName === "" || producer === "" || model === "" || status === "" || price === "" || promotion === "" || inventory === "") {
        alert("Vui lòng điền đầy đủ thông tin vào tất cả các ô input.");
        return;
    }
    // kiểm tra mã sản phẩm ko trùng lặp, và là số nguyên dương
    if (!Number.isInteger(parseInt(code)) || parseInt(code) <= 0) {
        alert("Vui lòng nhập một số nguyên lớn hơn 0 cho mã sản phẩm");
        return;
    }
    for (let i = 0; i < manage.productions.length; i++) {
        if (manage.productions[i].code === code) {
            alert("Mã sản phẩm đã tồn tại. Vui lòng nhập mã sản phẩm khác.");
            return;
        }
    }
    // tạo 1 đối tượng mới với các thông tin đc lấy từ các thẻ HTML và gọi các hàm để thêm vào danh sách
    let production = new Product(code, fullName, producer, model, status, price, promotion, inventory);
    manage.addProduction(production);
    manage.showList();
    clear();

}
// Hàm định dạng giá trị với dấu phân cách hàng nghìn
function formatPriceInput(input) {
        // Lấy giá trị hiện tại của ô input
    let value = input.value.replace(/\./g, '');
    if (isNaN(value) || value < 0) {
        alert("Vui lòng nhập giá bán là 1 số.");
        input.value = '';
        return input.value;
    }
    let newArr = [];
    for (let i = 0; i < value.length; i++) {
        newArr.push(value[i]);
        if ((i + 1) % 3 === 0 && i !== value.length - 1) {
            newArr.push('.');
        }
    }
    let newString = newArr.join('');
    return newString;
}
// Kiểm tra promotionInput là số và nằm ngoài khoảng từ 0 đến 100
function checkPromotionInput() {
    let promotionInput = document.getElementById("promotion").value;
    if (isNaN(promotionInput) || promotionInput < 0 || promotionInput > 100) {
        alert("Vui lòng nhập một số trong khoảng từ 0 đến 100 cho promotion.");
        document.getElementById("promotion").value = "";
    }
}
// Kiểm tra nếu inventoryInput là số và lớn hơn 0
function checkInventoryInput() {
    let inventoryInput = document.getElementById("inventory").value;
    if (isNaN(inventoryInput) || inventoryInput < 0 || !Number.isInteger(parseInt(inventoryInput))) {
        alert("Vui lòng nhập một số nguyên lớn hơn 0 cho inventory.");
        document.getElementById("inventory").value = "";
    }
}
function clear(){
    document.getElementById("code").value='';
    document.getElementById("fullName").value='';
    document.getElementById("made").value='';
    document.getElementById("model").value='';
    document.getElementById("status").value='';
    document.getElementById("price").value='';
    document.getElementById("promotion").value='';
    document.getElementById("inventory").value='';
}
function  deleteProduction(code){
    let confirmDelete = confirm("Bạn có muốn xóa sản phẩm này khỏi danh sách ko?");
    if (confirmDelete) {
        manage.delete(code);
        manage.showList();
    }
}
 let productionCode = 0;
function editProduction(code){
    let production = manage.findProductionByCode(code);
    document.getElementById("code").value = production.code;
    document.getElementById("fullName").value= production.fullName;
    document.getElementById("made").value= production.producer;
    document.getElementById("model").value = production.model;
    document.getElementById("status").value=production.status;
    document.getElementById("price").value=production.price;
    document.getElementById("promotion").value=production.promotion;
    document.getElementById("inventory").value=production.inventory;
    productionCode = code;
    manage.delete(code);
    manage.showList();
}
function updateProduct(){
    let code = document.getElementById("code").value;
    let fullName = document.getElementById("fullName").value;
    let producer = document.getElementById("made").value;
    let model = document.getElementById("model").value;
    let status = document.getElementById("status").value;
    let price = document.getElementById("price").value;
    let promotion = document.getElementById("promotion").value;
    let inventory = document.getElementById("inventory").value;
    let production = manage.findProductionByCode(productionCode);
    manage.edit(code, fullName, producer, model, status, price, promotion, inventory);
    manage.showList();
    clear();
}
manage.showList();
