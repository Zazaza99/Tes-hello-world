(function () {
    function replaceName() {
        let name = prompt("WHO ARE YOU?");
        console.log(name);
        document.getElementById("nama").innerHTML = name;
        
    }
    replaceName();
    document.getElementById("tombol").addEventListener("click", replaceName);
  })( );

