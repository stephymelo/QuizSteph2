const inputTarea=document.getElementById('input');
const buttonInput=document.getElementById('button');
const database = firebase.database();
const todo = document.getElementById('todoTareas');
const doingTareas = document.getElementById('doingTareas');

var dragged;


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






document.addEventListener("dragstart", function( event ) {
   
    dragged = event.target;
  
}, false);

document.addEventListener("dragover", function( event ) {
    event.preventDefault();
}, false);

document.addEventListener("drop", function( event ) {
        
    event.preventDefault();
    
    if ( event.target.id == "doingTareas") {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );

   }

   
    if ( event.target.id == "todoTareas" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
        todo.removeChild(dragged);      

    }

    if ( event.target.id == "doneTareas" ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
         
    }
    
   



  
}, false);




/*
document.addEventListener("dragenter", function( event ) {
    // highlight potential drop target when the draggable element enters it
    if ( event.target.className == "doingTareas" ) {
        event.target.style.background = "purple";
    }

}, false);

document.addEventListener("dragend", function( event ) {
    // reset the transparency
    event.target.style.opacity = "";
}, false);


document.addEventListener("dragleave", function( event ) {
    if ( event.target.id == "doingTareas" ) {
        event.target.style.background = "";
      
    }

}, false);*/




