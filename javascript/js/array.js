let coba = function () {
    return "Coba Function";
};

let buah = [
    "Nangka", 
    "Anggur", 
    "Pisang", 
    10, 
    coba(),
    (tes = ()=> "Hasil return arrow function"),
    function nama() {
        return "hrdini";
    },
];

console.log(buah);

console.log(buah[0]);

for(let i in buah) {
    console.log(buah[i]);
}

console.log(buah[5]());

console.log(buah[6]());