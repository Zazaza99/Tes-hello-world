function validateform() {
    const nama = document.forms["message-form"]["name-input"].value
    const angka = 11

    if (nama == "") {
       document.getElementById("error-name").innerHTML = "Nama tidak boleh kosong!!!"

       return false
    }

    setname(nama)

    return false;
}

function setname(name) {
    document.getElementById("name").innerHTML = name;
    document.getElementById("error-name").innerHTML = "";

}