function lanzarDado(){
    return Math.floor(Math.random() *6) + 1;
}

function obtenerResultados(numLanzamientos){
    const resultados = [];

    for(let i = 0; i < numLanzamientos; i++) {
        const dado1 = lanzarDado();
        const dado2 = lanzarDado();
        const  suma = dado1 + dado2;
        
        if (resultados[suma] === undefined) {
            resultados[suma] = 1;
        } else {
            resultados [suma]++;
        }
    }

    return resultados.filter((valor) => valor !==undefined);
}

function main() {
    const numLanzamientos = parseInt(prompt("Ingrese la cantidad de veces que desea lanzar los dados:"));

    if(!isNaN(numLanzamientos) && numLanzamientos > 0){
        const resultados = obtenerResultados(numLanzamientos);
        const tablaResultados = [];

        resultados.forEach((cantidad, suma) => {
            tablaResultados.push({ 'suma': suma, 'cantidad de Apariciones': cantidad });
        });

        console.table(tablaResultados);
    } else{
        console.log("Debe ingresar un número válido y mayor que cero");
    }
}

main();