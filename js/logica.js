const inputTarea=document.getElementById('input');
const buttonInput=document.getElementById('button');
const database = firebase.database();
const todo = document.getElementById('todoTareas');
const doingTareas = document.getElementById('doingTareas');
const todoE = "todoE";
const doing = "doingE";
const done = "doneE";
let estadoDrag;
let estadoDrag2;
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
        estado : todoE,

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

   
   
    if ( event.target.id == "todoTareas" && estadoDrag2==true) {
            event.target.style.background = "";
            dragged.parentNode.removeChild( dragged );
            event.target.appendChild( dragged );
            estadoDrag=false;
    }


    if ( event.target.id == "doingTareas" ) {
       
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
        estadoDrag=true;
        estadoDrag2=true;
        
   }



    if ( event.target.id == "doneTareas" && estadoDrag==true ) {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
        estadoDrag2=false;
        }

   
  
}, false);






