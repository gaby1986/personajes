function homeController() {
    var parrafo = $("<p class='text-center'>Ingresaste al Home! Bienvenido!!</p>")
    $("#root").fadeOut(2000, function () {

        $("#root").html(parrafo)
        $("#root").fadeIn(2000)
    })
}

export default homeController

