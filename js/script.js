const pswrdField = document.querySelector(".form input[type='password']"),
    toggleIcon = document.querySelector(".form .field i");

toggleIcon.onclick = () => {
    if (pswrdField.type === "password") {
        pswrdField.type = "text";
        toggleIcon.classList.add("active");
    } else {
        pswrdField.type = "password";
        toggleIcon.classList.remove("active");
    }
}


var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function (e) {
    e.preventDefault();
    overlay.classList.remove('active');
    popup.classList.remove('active');
});




function cn() {
    window.open("./dashboard.html", "_self")
} 