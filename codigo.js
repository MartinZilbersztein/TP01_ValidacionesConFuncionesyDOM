const notaMinima = 1, notaMaxima = 10;
const formulario = document.getElementById('formulario');
const notaMatematica = document.getElementById('notaMatematica');
const notaLengua = document.getElementById('notaLengua');
const notaEFSI = document.getElementById('notaEFSI');
const alerta = document.getElementById('alerta');
let notasValidas = false;

function onChange(id){
    let valor = document.getElementById(id);
    const valorNumerico = parseInt(valor.value);
    if (typeof valorNumerico == "number")
    {
        if (valorNumerico < notaMinima || valorNumerico > notaMaxima)
        {
            valor.style.color = "red";
            notasValidas = false;
        }
        else 
        {
            valor.style.color = "black"; 
            notasValidas = true;
        }
    }
    else alerta.innerText = "Los valores deben ser númericos";

}


formulario.addEventListener('submit', function(){
    let notaMatematica = document.getElementById('notaMatematica');
    let notaLengua = document.getElementById('notaLengua');
    let notaEFSI = document.getElementById('notaEFSI');
    event.preventDefault();
    notaMatematica = parseInt(notaMatematica);
    notaLengua = parseInt(notaLengua);
    notaEFSI = parseInt(notaEFSI);
    if (notaMatematica.value == "" || notaLengua.value == "" || notaEFSI.value == "")
        alerta.innerText = "Nota vacía.";
    else 
    {
        alerta.innerText = "";
        if (!notasValidas && (parseInt)(notaMatematica.value.typeOf == "number"))
        {
            alerta.innerText = "Notas no válidas. El valor debe ser un número y estar entre 1 y 10 inclusive."
        }
    }
        
})

