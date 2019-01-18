import { setLocalList, getLocalList } from '../utils/localStorage'


function llamarPersonajes(){
    var nexUrl = "https://swapi.co/api/people?format=json"
    var contador = 1
    var listaAux = []
    gestionPersonajes()
    $("#nextBtn").on("click",function(){
        gestionPersonajes()
    })
    function gestionPersonajes(){
        var request = $.ajax({
            url: nexUrl,
            method:"GET"
        })
        request.done(function(data){
            var listaPersonajes = $("#personajes")
            data.results.forEach(i => {
                listaPersonajes.append(`<tr>
                                            <th scope="row">${contador++}</th>
                                            <td class="${contador} nombre">${i.name}</td>
                                            <td>${i.gender}</td>
                                            <td>${i.height}cm</td>
                                            <td>${i.mass}kg</td>
                                            <td>${i.eye_color}</td>
                                            <td><button name="saveBtn" type="button" class="btn btn-primary" id="${contador}">Guardar</button></td>
                                        <tr>`);
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
    function guardarPersonaje(contador){
        var listaPersonajes = getLocalList('Personajes')
        var elementosFiltrados = listaAux.filter(item => item.id == contador)
        listaPersonajes.push(elementosFiltrados[0])
        setLocalList('Personajes', listaPersonajes)
    }
 
}

 
export default llamarPersonajes