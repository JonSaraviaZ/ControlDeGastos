let listaNombreGastos = []; //Al poner una variable = [] indicamos que es una lista.
let listaDetalleGastos = [];
let listaValoresGastos = [];//Al poner una variable = [] indicamos que es una lista.

alert("Bienvenido a tu nueva herramienta de control de gastos.\nEsta herramienta te permite calcular los gastos que haz tenido, de acuerdo con la información que ingreses. \nLee bien las instrucciones antes de ingresar.")
alert("En la pantalla verás 3 campos, solo debes indicar el nombre, detalle y el valor de tus gastos.")
alert("Después, presionas el botón Agregar Gasto y verás el lista más el cálculo del total gastado mensualmente en dólares americanos (USD).\nFinalmente, tendrás los botones Modificar y Eliminar para gestionar la información que ingresaste.")
alert("¡Bienvenido/a!")

// Esta función se invoca al momento de que el usuario hace clic en el botón
function clickBoton(){
    let nombreGasto = document.getElementById("nombreGasto").value;
    let detalleGasto = document.getElementById("detalleGasto").value;
    let valorGasto = document.getElementById("valorGasto").value;

    //Verifica si el campo está vacio.
    if(valorGasto.trim() ===""){
        alert("No se ha ingresado ningún valor del gasto o el dato informado no es válido.\nIntenta nuevamente ingresar un número entero o decimal.");
        return;
    }

    valorGasto = Number(valorGasto);

    //Entrega un mensaje de error si el valor es nulo o no es un número
    if(isNaN(valorGasto)){
        alert("Dato erróneo. Debes ingresar solo números enteros o decimales");
        return;
    } else{
        console.log(nombreGasto);
        console.log(detalleGasto);
        console.log(valorGasto);
    
        listaNombreGastos.push(nombreGasto);//método push espera que le pasemos la variable desde donde se agregarán los datos
        listaDetalleGastos.push(detalleGasto);//método push espera que le pasemos la variable desde donde se agregarán los datos
        listaValoresGastos.push(valorGasto);//método push espera que le pasemos la variable desde donde se agregarán los datos
    
        console.log(listaNombreGastos);
        console.log(listaDetalleGastos)
        console.log(listaValoresGastos);
        // alert("Click del usuario");
        actualizarListaGastos();
    }
}

function actualizarListaGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombreGastos.forEach((elemento,posicion) => {
        const detalleElemento = (listaDetalleGastos[posicion]);
        const valorGasto = Number(listaValoresGastos[posicion]);
        // Se muestra el listado de gastos ppr pantalla
        //Además, se crea el botón eliminar que permite borrar el gasto previamente agregado
        htmlLista += `<li class="infoElemento">${elemento} - Detalle: ${detalleElemento} - USD $ ${valorGasto.toFixed(2)}
                    <div class="boton-container">
                    <button class="botonModificar" onclick="modificarGasto(${posicion});">Modificar</button>
                    <button class="botonEliminar" onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </div>
                    </li>`;
        // Calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });
    listaElementos.innerHTML = htmlLista;
    if (totalGastos>=150){
        totalElementos.innerHTML = totalGastos.toFixed(2);
        alert("¡Cuidado!, estás gastando una suma igual o superior a USD$150.\n¡Cuida tu presupuesto!")
    }
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar(){
    document.getElementById("nombreGasto").value = '';
    document.getElementById("detalleGasto").value = '';
    document.getElementById("valorGasto").value  = '';
}

function eliminarGasto(posicion){
    listaNombreGastos.splice(posicion,1);
    listaDetalleGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    alert('Elemento eliminado.')
    actualizarListaGastos();
}

function modificarGasto(posicion){
    alert("Activaste el botón Modificar.\nIngresa los nuevos datos del nombre, detalle y valor de gastos en la pantalla.\nDespués presiona OK/Aceptar para continuar.");
    nuevoNombreGasto=prompt('Ingresa el nombre del gasto: ');
    nuevoDetalleGasto=prompt('Ingresa el detalle del gasto: ');
    nuevoValorGasto=parseInt(prompt('Ingresa el monto del gasto: '));
    if(isNaN(nuevoValorGasto)){
        alert("Dato erróneo. Debes ingresar solo números enteros o decimales");
        return;
    } else{
    listaNombreGastos.splice(posicion,1,nuevoNombreGasto);
    listaDetalleGastos.splice(posicion,1,nuevoDetalleGasto);
    listaValoresGastos.splice(posicion,1,nuevoValorGasto);
    console.log(listaNombreGastos);
    console.log(listaDetalleGastos);
    console.log(listaValoresGastos);
    actualizarListaGastos();
    }
}