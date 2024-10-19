const toggleMenu = document.querySelector('.toggle-menu');
const navbarMenu = document.querySelector('.navbar ul');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});


function calcularConsumoAnual() {
    // Obtener valores de los campos
    const frecuencia = document.getElementById("frecuencia").value;
    const cantidad = document.getElementById("cantidad").value;
    const precio = document.getElementById("precio").value;

    // Realizar cálculos
    const consumoAnual = frecuencia * cantidad * precio;

    // Mostrar resultado
    document.getElementById("consumo").textContent = consumoAnual.toFixed(2);
}

function calcularCostoMensual() {
    // Obtener valores de los campos
    const costoUnitario = document.getElementById("costo").value;
    const cantidadNecesaria = document.getElementById("cantidad").value;
    const añosVidaUtil = document.getElementById("años").value;

    // Validar datos (Puedes agregar más validaciones si lo deseas)
    if (isNaN(costoUnitario) || isNaN(cantidadNecesaria) || isNaN(añosVidaUtil)) {
        alert("Por favor, ingresa solo números en todos los campos.");
        return;
    }

    // Realizar el cálculo
    const costoMensual = (costoUnitario * cantidadNecesaria) / (añosVidaUtil * 12);

    // Mostrar el resultado con formato
    const costoMensualFormateado = costoMensual.toLocaleString('es-NI', { minimumFractionDigits: 2 });
    document.getElementById("consumoA").textContent = costoMensual.toFixed(2) + " C$";
}