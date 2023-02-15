const display = document.querySelector("#display");

//con esta constante voy a acceder a todos los botones de etiqueta button
const buttons = document.querySelectorAll("button");
//recorro cada boton
buttons.forEach(
    (item)=>{
        item.onclick=()=>{
            //borrar todo
            if(item.id == "clear"){
                display.innerText = "";
            }
            //borrar caracter uno por uno
            else if(item.id == "backspace"){
                let string = display.innerText.toString();
                //                        METODO QUE DEVUELVE LOS CARACTERES D EUNA CADENA ESPECIFICADA
                display.innerText = string.substr(0,string.length -1);
            }
            else if(display.innerText != "" && item.id == "equal"){
                //let cadena = "2+2"
                //eval lo va a tomar como una operacion
                display.innerText= eval(display.innerText);
            }
            else if(display.innerText=="" && item.id == "equal"){
                display.innerText = "Null";
                setTimeout(()=>(display.innerText=""),2000)
            }
            else{
                //PARA QUE TE MUESTRE LOS NUMEROS QUE APRIETES EN EL DISPLAY
                display.innerText += item.id;
            }
        }
    }
)