const database2 = firebase.database();


class Tarea{
    constructor(tarealista){
        this.tarealista=tarealista;
    }
    

    render=()=>{
        var hora = Data.now() 
        let component = document.createElement('div');
        component.className="comp";
        

        let tareaCont = document.createElement('div');
        tareaCont.className="tareaCont"
        tareaCont.innerHTML = (
            this.tarealista.i
        );
        let deleteBtn = document.createElement('button');
        deleteBtn.className = "deleteBtn";
        deleteBtn.innerHTML = "X";

      

       
       

        component.appendChild(tareaCont);
        component.appendChild(deleteBtn);

        deleteBtn.addEventListener('click', ()=>{
            database2.ref('tarea/tareaNueva/'+this.tarealista.id).set(null);
            
        });

        return component;
    }


    
}