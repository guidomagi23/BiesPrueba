document.getElementById('titulo').style.backgroundColor= "#7a1b0c";
document.getElementById('pgEstacionamiento').style.backgroundColor= "#7a1b0c";

function mostrarPorc(){
	var porDar = $('#lbPorcentajeDar');
    porDar.val("hola ");
}

$('#btCerrarSesion').click(cerrarSesion);
function cerrarSesion(){
    window.location.href='../vista/login.html';
}

$('#btAtras').click(atras);
function atras(){
    window.location.href='../vista/login.html';
}

$('#btDar').click(Dar);
function Dar(){
    window.location.href='../vista/detalle_estacionamiento.html';
    alert("Te has estacionado en DAR");
}

$('#btSanJeronimo').click(SanJeronimo);
function SanJeronimo(){
    window.location.href='../vista/detalle_estacionamiento.html';
    alert("Te has estacionado en San Jeronimo");
}

$('#btTucuman').click(Tucuman);
function Tucuman(){
    window.location.href='../vista/detalle_estacionamiento.html';
    alert("Te has estacionado en Tucuman");
}

$('#btIrse').click(Irse);
function Irse(){
    alert("Has abandonado el estacionamiento");
    window.location.href='../vista/login.html'
}
