class Production_Management {
    constructor(arr) {
        this.productions = arr;
    }
    // hiển thị danh sách sản phẩm trong 1 bảng HTML
    showList(){
        let table = '';
        for (let i = 0; i < this.productions.length; i++) {
            table += '<tr>';
            table += '<td>MSP';
            table += this.productions[i].code;
            table += '</td>';

            table += '<td>';
            table += this.productions[i].fullName;
            table += '</td>';

            table += '<td>';
            table += this.productions[i].producer;
            table += '</td>';

            table += '<td>';
            table += this.productions[i].model;
            table += '</td>';

            table += '<td>';
            table += this.productions[i].status;
            table += '</td>';

            table += '<td>';
            table += this.productions[i].price;
            table += ' USD</td>';

            table += '<td>';
            table += this.productions[i].promotion;
            table += ' %</td>';

            table += '<td>';
            table += this.productions[i].inventory;
            table += ' SP</td>';

            table += '<td>' +
                '<button style="background-color: red; color: white "  type="button" onclick="deleteProduction('+i+')">Delete</button> ' +
                ' <button style="background-color: orange ; color: white" type="button" onclick="editProduction('+i+')">Edit</button>' +
                '</td>';
            table += '</tr>';
        }
        document.getElementById('list-Product').innerHTML = table;
    }
    // thêm 1 sản phẩm mới vào bảng
    addProduction(production){
        this.productions.push(production);
    }
    // xóa 1 sản phẩm dựa vào 1 mã sản phẩm
    delete(code){
        this.productions.splice(code,1);
    }
    // tìm kiếm 1 sản phẩm trong mảng dựa trên mã sản phẩm
    findProductionByCode(code){
        return this.productions[code];
    }

    // sửa đổi thông tin của 1 sản phẩm dựa trên mã sản phẩm
    edit(product, code, lastName, producer, model, status, price, promotion, inventory){
        product.edit(code, lastName, producer, model, status, price, promotion, inventory);
    }
}
