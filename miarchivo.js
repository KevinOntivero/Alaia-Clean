/* evento Dom, CLICK */
let boton = document.getElementById("buscar");
boton.addEventListener("click",()=>{
    console.log("Buscar")
})

let confirmacion = confirm("¿Desea realizar una accion?")
    if(confirmacion == true){
        let pregunta = prompt("1) ¿Quiere ver un producto? \n 2) ¿Desea cotizar un precio?")
        if(pregunta == "1"){
            function Productos (nombre, precio){
                this.nombre = nombre;
                this.precio = precio;
            };
            var productos1 = new Productos("Lisoform", 320);
            var productos2 = new Productos("Glade", 250);
            var productos3 = new Productos("Bolsas", 250)
            let producto = prompt("¿Que producto quiere visualizar? \n Lisoform, glade, bolsas, guantes, secadores, escobillones")
            alert("Elegiste: " + producto)
        }
    
        else if(pregunta == "2"){
            let valorTotal = parseInt(prompt("Ingrese valor estimado: ")) ;
            let cuotaPagar = prompt("Ahora escriba las cuotas a pagar (6, 12, 18, 24)");
            while(cuotaPagar != 6 && cuotaPagar != 12 && cuotaPagar != 18 && cuotaPagar != 24){
                cuotaPagar = prompt ("Ingrese un nro de cuotas valido (6, 12, 18, 24)");
            }
            let valorFinal = valorTotal / cuotaPagar;
            alert ("Tus cuotas son: " + cuotaPagar + " cuotas, y el valor de cada cuota sera de: " + valorFinal)
            }

        }else{
            alert("Usted seguira en la pagina")
        }

/* Dom, modificamos un ID */
let cambio = document.getElementById("textOne");
cambio.style.textTransform = "uppercase";

/*  query */
let textQuery = document.querySelector( " .text_main ");
textQuery.style.background = "#000"; 

/* innerHTML */
textOne.innerHTML = ("Ingresar al link para mas productos");




    
