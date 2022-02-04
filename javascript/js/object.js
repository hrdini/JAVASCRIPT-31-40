const objek = {

    nama : "Hardini Febrijati",
    telp : 0812376543,

    buah : ['Nangka', 'Anggur', 'Pisang'], 

    coba : function () {
        return "coba function dalam objek";
    },

    boleh : true,
    "tulis aja" : 12344321,
}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.buah[2]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"]);