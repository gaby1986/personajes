import { setLocalList, getLocalList } from '../utils/localStorage'





getLocalList (list);
var list = localStorage.getItem('Personajes')

$(".saveBtn").on("click", function(){
    setLocalList('Personajes', data.results)
    console.log(list);
    
});
