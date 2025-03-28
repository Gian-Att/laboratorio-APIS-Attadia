function operacion(tipo) {
    let num1 = parseInt(document.getElementById('num1').value);
    let num2 = parseInt(document.getElementById('num2').value);
    let resultado;
    
    if (tipo === 'sumar') {
        resultado = num1 + num2;
    } else if (tipo === 'restar') {
        resultado = num1 - num2;
    } else if (tipo === 'multiplicar') {
        resultado = num1 * num2;
    }
    
    document.getElementById('resultado').textContent = resultado;
}