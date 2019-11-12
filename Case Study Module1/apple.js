let UserName = function () {
    this.arrAdmin = [["admin", "admin1", "admin2"], ["123123123", "456456456", "789789789"]];
    this.arrUser = [["thang123", "son456", "long789"], ["123123123", "456456456", "789789789"]];
    this.login = function () {
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        if (username.trim() === '') {
            alert("Please input username.");
        } else if (password.trim() === '') {
            alert("Please input password.");
        } else {
            for (let i = 0; i < this.arrAdmin[0].length; i++) {
                if (username === this.arrAdmin[0][i] && password === this.arrAdmin[1][i]) {
                    alert("Welcome " + this.arrAdmin[0][i] + " login success!");
                    return window.location = "tab2.html";
                }
            }
            for (let i = 0; i < this.arrUser[0].length; i++) {
                if (username === this.arrUser[0][i] && password === this.arrUser[1][i]) {
                    alert("Welcome " + this.arrUser[0][i] + " login success!");
                    return window.location = "tab3.html";
                }
            }
            alert("Username or password is incorect.");
            clearLogin();
        }
    };
};
let AppProducts = function () {
    this.listProducts = [
        ["Huawei Nova 3i", "huawei-nova3i.jpg", "    Giá 5.390.000 đ\n" +
            "    Màn Hình : 6.3 inches, 2340x1080 pixels\n" +
            "    Camera trước : 16M+2M\n" +
            "    Camera sau : 24M+2M\n" +
            "    RAM : 4GB\n" +
            "    Bộ nhớ trong : 128GB\n" +
            "    CPU : HUAWEI Kirin 710, Octa-core, 4*Cortex A73 2.2GHz + 4*Cortex A53 1.7GHz\n" +
            "    GPU : Mali-G51 MP4\n" +
            "    Dung lượng pin : 3340 mAh battery\n" +
            "    Hệ điều hành : Android TM 8.1 + EMUI 8.2\n" +
            "    Thẻ SIM : Nano Sim, 2 Sim\n"],
        ["Apple iPhone 7 Plus", "iphone7plus.jpg", "    GiĂ¡ 13.999.000 đ\n" +
            "    Màn Hình : 1920 x 1080 pixels\n" +
            "    Camera trước : 7.0 MP\n" +
            "    Camera sau : Dual 12.0 MP\n" +
            "    RAM : 3 GB\n" +
            "    Bộ nhớ trong : 32 GB\n" +
            "    CPU : A10, 4 NhĂ¢n, 2.3 GHz\n" +
            "    Dung lượng pin : 11.1 Wh (2900 mAh)\n" +
            "    Thẻ SIM : Nano Sim, 1 Sim, há»— trá»£ 4G\n"],
        ["Apple iPhone X", "iphoneX.jpg", "    GiĂ¡ 22.990.000 đ\n" +
            "    Màn Hình : 2436 x 1125 pixel\n" +
            "    Camera trước : 7.0 MP\n" +
            "    Camera sau : Dual 12.0 MP\n" +
            "    RAM : 3 GB\n" +
            "    Bộ nhớ trong : 64 GB\n" +
            "    CPU : Apple A11 Bionic, 6\n" +
            "    GPU : Apple GPU (three-core graphics)\n" +
            "    Dung lượng pin : 2716 mAh\n" +
            "    Hệ điều hành : iOS 11\n" +
            "    Thẻ SIM : Nano Sim, 1 Sim, há»— trá»£ 4G\n"],
        ["Nokia 5 Plus", "nokia5-plus.jpg", "    GiĂ¡ 3.290.000 đ\n" +
            "    Màn Hình : 5.8 inchs, 720 x 1520 Pixels\n" +
            "    Camera trước : 8.0 MP\n" +
            "    Camera sau : 13.0 + 5.0 MP(Dual Camera)\n" +
            "    RAM : 3 GB\n" +
            "    Bộ nhớ trong : 32 GB\n" +
            "    CPU : MediaTek Helio P60, 8, 2.0 GHz\n" +
            "    GPU : Mali-G72 MP3\n" +
            "    Dung lượng pin : 3060 mAh\n" +
            "    Hệ điều hành : Android 8.1\n" +
            "    Thẻ SIM : Nano SIM, 2 Sim\n"],
        ["OPPO A7", "oppoa7.jpg", "    GiĂ¡ 4.990.000 đ\n" +
            "    Màn Hình : 6.2 inches, 1520 x 720 Pixel\n" +
            "    Camera trước : 16.0 MP\n" +
            "    Camera sau : 13.0 MP + 2.0 MP\n" +
            "    RAM : 4 GB\n" +
            "    Bộ nhớ trong : 64 GB\n" +
            "    CPU : Qualcomm Snapdragon 450, 8, 1.8 Ghz\n" +
            "    GPU : Adreno 506\n" +
            "    Dung lượng pin : 4230 mAh\n" +
            "    Hệ điều hành : ColorOS 5.2 (Android 8.1)\n" +
            "    Thẻ SIM : Nano SIM, 2 Sim\n"],
        ["Samsung Galaxy Note 9", "samsung-galaxy-note9.jpg", "    GiĂ¡ 24.490.000 đ\n" +
            "    Màn Hình : 6.4 inches, 2K+ (1440 x 2960 Pixels)\n" +
            "    Camera trước : 8 MP\n" +
            "    Camera sau : 2 camera 12 MP\n" +
            "    RAM : 8 GB\n" +
            "    Bộ nhớ trong : 512 GB\n" +
            "    CPU : Exynos 9810 8 nhĂ¢n 64 bit, 8 nhĂ¢n, 2.7 GHz + 1.7 GHz\n" +
            "    GPU : Mali-G72 MP18\n" +
            "    Dung lượng pin : 4000 mAh\n" +
            "    Hệ điều hành : Android 8.1 (Oreo)\n" +
            "    Thẻ SIM : Nano Sim, 2 Sim, há»— trá»£ 4G\n"],
        ["Xiaomi Pocophone F1", "xiaomi-pocophone-f1.jpg", "    GiĂ¡ 7.999.000 đ\n" +
            "    Màn Hình : 6.18 inches, 1080 x 2280 Pixels\n" +
            "    Camera trước : 20.0 MP\n" +
            "    Camera sau : Camera kĂ©p 12MP+5MP\n" +
            "    RAM : 6 GB\n" +
            "    Bộ nhớ trong : 64 GB\n" +
            "    CPU : Snapdragon 845, 8, 2.8 GHz\n" +
            "    GPU : Adreno 630\n" +
            "    Dung lượng pin : 4000 mAh\n" +
            "    Hệ điều hành : Android 8\n" +
            "    Thẻ SIM : Nano SIM, 2 Sim\n"],
        ["Xiaomi Redmi Note 7", "xiaomi-redmi-note-7.jpg", "    GiĂ¡ 4.990.000 đ\n" +
            "    Màn Hình : 6.3 inches, 1080 x 2340 Pixels\n" +
            "    Camera trước : 13.0 MP\n" +
            "    Camera sau : 48 MP+ 5 MP\n" +
            "    RAM : 4 GB\n" +
            "    Bộ nhớ trong : 64 GB\n" +
            "    CPU : Snap Dragon 660, 8, 2.2 GHz\n" +
            "    GPU : Adreno 512\n" +
            "    Dung lượng pin : 4000 mAh\n" +
            "    Hệ điều hành : Android 9\n" +
            "    Thẻ SIM : Nano SIM, 2 Sim\n"],
    ];

    this.cart = [];

    this.setLocalStorageListProducts = function () {
        sessionStorage.listProducts = JSON.stringify(this.listProducts);
    };
    this.getLocalStorageListProducts = function () {
        this.listProducts = JSON.parse(sessionStorage.listProducts);
    };

    this.setLocalStorageCart = function () {
        sessionStorage.cart = JSON.stringify(this.cart);
    };
    this.getLocalStorageCart = function () {
        this.cart = JSON.parse(sessionStorage.cart);
    };

    this.addProduct = function () {
        let product = document.getElementById("newProduct").value;
        if (product === "") {
            alert("Vui long nhap vao ten.");
        } else {
            this.listProducts.push([product, ,]);
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();
        }
    };

    this.editProduct = function (i) {
        let temp = prompt("Nhap ten ban muon sua: ");
        if (temp.trim() === "") {
            alert("Vui long nhap vao ten san pham.");
            return;
        }
        this.listProducts[0][i] = temp;
        this.setLocalStorageListProducts();
        return this.displayProductsAdmin();
    };

    this.deleteProduct = function (i) {
        let confirmAnswer = confirm("Do you want delete " + this.listProducts[0][i] + " ?");
        if (confirmAnswer) {
            let arr1 = [];
            let x = 0;
            while (x < this.listProducts.length) {
                if (x == i) {
                    x++;
                    continue;
                } else {
                    arr1.push(this.listProducts[x]);
                    x++;
                }
            }
            this.listProducts = arr1;
            this.setLocalStorageListProducts();
            return this.displayProductsAdmin();
        } else {
            return;
        }
    };

    this.addCart = function (i) {
        let confirmAnswer = confirm("Do you want add " + this.listProducts[i][0] + " to your cart?");
        if (confirmAnswer) {
            this.cart.push(this.listProducts[i]);
            this.setLocalStorageCart();
            alert(this.listProducts[i][0] + " added to your cart. Thank you!");
        } else {
            return;
        }
    };

    this.displayProductsAdmin = function () {
        this.getLocalStorageListProducts();
        let sout = '';
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 50px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 600px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="300" height="300" ></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" value="Edit" onclick="editProduct(' + i + ')"></input></td >';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" value="Delete" onclick="deleteProduct(' + i + ')"></input></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result1").innerHTML = sout;
    };

    this.displayProducts = function () {
        this.getLocalStorageListProducts();
        let sout = "";
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 40px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 600px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="300" height="300" title="' + this.listProducts[i][2] + '"></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result0").innerHTML = sout;
    };

    this.displayProductsUser = function () {
        this.getLocalStorageListProducts();
        let sout = "";
        for (let i = 0; i < this.listProducts.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 40px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 600px"><p id="' + i + '">&nbsp;&nbsp;' + this.listProducts[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.listProducts[i][1] + '" width="300" height="300" title="' + this.listProducts[i][2] + '"></td>';
            sout = sout + '<td style="width: 80px; text-align: center"><input type="button" value="Add to Cart" onclick="addCart(' + i + ')"></td >';
            sout = sout + '</tr>';
        }
        document.getElementById("result2").innerHTML = sout;
    };

    this.displayUserCart = function () {
        this.getLocalStorageCart();
        let sout = "";
        for (let i = 0; i < this.cart.length; i++) {
            sout = sout + '<tr>';
            sout = sout + '<td style="width: 40px; text-align: center"><p>' + (i + 1) + '</p></td>';
            sout = sout + '<td style="width: 600px"><p id="' + i + '">&nbsp;&nbsp;' + this.cart[i][0] + '</p></td>';
            sout = sout + '<td><img src="' + this.cart[i][1] + '" width="300" height="300" title="' + this.cart[i][2] + '"></td>';
            sout = sout + '</tr>';
        }
        document.getElementById("result3").innerHTML = sout;
    };

};

function clearLogin() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
}

function editProduct(i) {
    return pro.editProduct(i);
}

function deleteProduct(i) {
    return pro.deleteProduct(i);
}

function addCart(i) {
    return pro.addCart(i);
}

function repairProduct() {
    return pro.displayProductsAdmin();
}

function userProducts() {
    document.getElementById("user").innerHTML = "Hello User";
    return pro.displayProductsUser();
}

function displayUserCart1() {
    return pro.displayUserCart()
}

function logOut() {
    pro.setLocalStorageListProducts();
    return window.location = "tab1.html"
}

function returnDisplayProductsUser() {
    return window.location = "tab3.html";
}

function viewYourCart() {
    return window.location = "tab4.html";
}
let pro = new AppProducts();

function open() {
    pro.setLocalStorageListProducts();
    pro.displayProducts();
}
let log = new UserName();