import { setLocalList, getLocalList } from '../utils/localStorage'

var nexUrl = "https://swapi.co/api/people?format=json"
var contador = 1
var listaAux = []

function gestionPersonajes(){
    var request = $.ajax({
        url: nexUrl,
        method:"GET"
    })
    request.done(function(data){
        console.log(data.results);
        var listaPersonajes = $("#personajes")
        data.results.forEach(i => {
            listaPersonajes.append(`<div><li class="${contador++} nombre">${i.name}</li><button name="saveBtn" type="button" class="btn btn-primary" id="${contador}">Guardar</button></div>`);
            i = {"id": contador, ... i}
            listaAux.push(i)
        });
        nexUrl = data.next
        $("[name=saveBtn]").on("click",function(){
            guardarPersonaje($(this).attr("id"))
        })
    })

    request.fail(function(error){
        console.log(data.results)
    })
}

function llamarPersonajes(){
    gestionPersonajes()
    $("#nextBtn").on("click",function(){
        gestionPersonajes()
    })
 
}
function guardarPersonaje(contador){
        var listaPersonajes = getLocalList('Personajes')
        var elementosFiltrados = listaAux.filter(item => item.id == contador)
        listaPersonajes.push(elementosFiltrados[0])
        setLocalList('Personajes', listaPersonajes)
}
 
export default llamarPersonajes