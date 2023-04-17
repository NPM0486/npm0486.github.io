function thankForm() {
    var choosed = document.getElementById("choosed");
    var formArt = document.getElementById("form-art");
    var formThanks = document.getElementById("thanks-art");
    var radio = document.getElementsByName("rating");

    for (var i = 0; i < 5; i++) {
        if (radio[i].checked) {
            choosed.innerHTML = radio[i].value;
            break;
        }
    }
    formArt.style.display = "none";
    formThanks.style.display = "flex";
    return false;
}