import {setLocalList, getLocalList } from '../utils/localStorage'


function guardados(){
    var contador = 1
    var guardarAux = []
        var listaGuardados = getLocalList('Personajes')
        var listaPersonajes = $("#guardados")
        listaGuardados.forEach(i => {
            var sexo = i.gender.replace("female", "Mujer").replace("male", "Hombre")
            listaPersonajes.append(`<tr>
                                        <th scope="col">${contador}</th>
                                        <td class="${contador++} nombre">${i.name}</td>
                                        <td>${sexo}</td>
                                        <td>${i.height} cm</td>
                                        <td>${i.mass} kg</td>
                                        <td>${i.eye_color}</td>
                                        <td><button name="borrarPersonaje1" type="button" class="btn btn-danger" id="${contador}">Borrar</button></td>
                                    <tr>`);
            i = {"id": contador, ... i}
            guardarAux.push(i)            
        });
        $("[name=borrarPersonaje1]").on("click",function(){
            borrarPersonaje($(this).attr("id"))
            $(this).closest( "tr" ).hide()
        })
        console.log(guardarAux);

        function borrarPersonaje(contador){
            var listaFiltrados = getLocalList('Personajes')
           // guardarAux.push(listaFiltrados);
            var guardadosFiltrados = listaFiltrados.filter(item => item.id != contador)
           console.log(guardadosFiltrados)
            setLocalList('Personajes',  guardadosFiltrados)
        }
    }


 
export default guardados