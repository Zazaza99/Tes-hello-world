function validateform() {
    const nama = document.forms["message-form"]["name-input"].value

    if (nama == "") {
       document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!!!"

       return false
    }

    document.getElementById("name").innerHTML = nama;
    document.getElementById("error-name").innerHTML = "";

    return false;
}

function setname(name) {
    const nama = document.forms["message-form"]["name-input"].value

    document.getElementById("name").innerHTML = nama;
    document.getElementById("error-name").innerHTML = "";
}