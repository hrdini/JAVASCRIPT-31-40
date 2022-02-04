function coba() {
    a = document.querySelector(".isi");
    a.innerHTML = "BELAJAR EVENTLISTENER";
    console.log("coba eventlistener")
}

//judul.addEventListener("click",coba);

judul.onmouseover = coba;

judul.onmouseover = function () {
    console.log("COBA FUNCTION ANNON");
}