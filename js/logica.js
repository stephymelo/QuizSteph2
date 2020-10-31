const inputTarea=document.getElementById('input');
const buttonInput=document.getElementById('button');
const database = firebase.database();
const todo = document.getElementById('todoTareas');




ponerTarea = () => {

    if(inputTarea.value === '' ){
        alert("esta vacio wey");
        return;
    }


    let referencia = database.ref('tarea/tareaNueva').push()
     let nuevaTareita = {
    
        id:referencia.key,
        i : inputTarea.value,
       


    };
    referencia.set(nuevaTareita);
    inputTarea.value = '';
    

}
buttonInput.addEventListener('click',ponerTarea);

//Lectura
database.ref('tarea/tareaNueva').on('value',function(data){
    todo.innerHTML = '';
    data.forEach(
        nuevaTarea => {
            let valor = nuevaTarea.val();
            let publicarTarea = new Tarea(valor);
            todo.appendChild(publicarTarea.render());
        }
    )
});



