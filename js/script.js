var overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});

function cn() {
    window.open("./dashboard.html", "_self")
} 

function pop(){
    overlay.classList.add('active');
    popup.classList.add('active');
}

function down(){
    window.open("./download/app-debug.apk", "download")
}