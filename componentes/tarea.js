const database2 = firebase.database();
let fecha;
var fechaSplit=[];






class Tarea{
    constructor(tarealista){
        this.tarealista=tarealista;
       
    }
    

  
   

    render=()=>{
        this.fecha=new Date();
        this.fechaSplit=this.fecha.toString().split(" ");

     
        let component = document.createElement('div');
        component.className="comp";
        component.setAttribute("draggable","true");
        

        let tareaCont = document.createElement('div');
        tareaCont.className="tareaCont"
        
        tareaCont.innerHTML = (
            this.tarealista.i
        );

        let fechaCont = document.createElement('div');
        fechaCont.className="fehcaCont";
        fechaCont.innerHTML=this.fechaSplit[1]+" "+this.fechaSplit[2]+" "+this.fechaSplit[3];


        let deleteBtn = document.createElement('button');
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = "x";

        let moveRight = document.createElement('button');
        moveRight.className = "moveRight";
        moveRight.innerHTML = ">";

        let moveLeft = document.createElement('button');
        moveLeft.className = "moveLeft";
        moveLeft.innerHTML = "<";

        let divButtons=document.createElement('div');
        divButtons.className="divButtons";



               
        if (estadoDrag==true) { 
            console.log("aloo");
        database2.ref('tarea/tareaNueva/'+this.tarealista.id).set(this.tarealista);
          
            
        }  

        
   
        deleteBtn.addEventListener('click', ()=>{
           
            database2.ref('tarea/tareaNueva/'+this.tarealista.id).set(null);
            location.reload();
            });

         
                 


        component.appendChild(fechaCont);
        component.appendChild(tareaCont);
        divButtons.appendChild(deleteBtn);
        divButtons.appendChild(moveLeft);
        divButtons.appendChild(moveRight);
        component.appendChild(divButtons);
     

        return component;

        
    }




   


    
}