let tblmenu = [
    {
        idmenu:1, 
        idkategori:1, 
        menu:"Nangka Madu", 
        gambar:"nangka.jpg", 
        harga:150000
    },
    {
        idmenu:2, 
        idkategori:1, 
        menu:"Anggur Moon Drops", 
        gambar:"anggur.jpg", 
        harga:200000
    },
    {
        idmenu:3, 
        idkategori:2, 
        menu:"Nasi Pecel", 
        gambar:"pecel.jpg", 
        harga:10000},
    {
        idmenu:4, 
        idkategori:2, 
        menu:"Angkringan", 
        gambar:"angkringan.jpg", 
        harga:1000
    },
    {
        idmenu:5, 
        idkategori:3, 
        menu:"Es Teh",
        gambar:"esteh.jpg", 
        harga:5000
    },
    {
        idmenu:6, 
        idkategori:3, 
        menu:"Es Jeruk", 
        gambar:"esjeruk.jpg", 
        harga:7000
    },
];

let tampil = tblmenu.map(function (kolom) {
    return `<div class="product-content">
        <div class="image">
            <img src="/images/${kolom.gambar}" alt="">
        </div>
        <div class="title">
            <h3>${kolom.menu}</h3>
        </div>
            <div class="harga">
                <h3>Rp. ${kolom.harga}</h3>
            </div>

            <div class="btn-beli">
            <button data-idmenu="${kolom.idmenu}">Beli</button>
        </div>
    </div>`;
});

let isi = document.querySelector(".produk");
isi.innerHTML = tampil;

let btnbeli = document.querySelectorAll(".btn-beli > button");

let cart = [];

for (let index = 0; index < btnbeli.length; index++) {
    btnbeli[index].onclick = function () {
        // console.log(btnbeli[index].dataset["idmenu"]);
        //cart.push(btnbeli[index].dataset["idmenu"]);

            tblmenu.filter(function (a) {
                if (a.idmenu==btnbeli[index].dataset["idmenu"]) {
                    cart.push(a);
                    console.log(cart);
                }
            })

    };   
}

//console.log(cart);

