window.addEventListener("load", inicio, false);

function inicio(){

	var miBoton = document.getElementById("dameUbicacion");

	miBoton.addEventListener("click", obtener, false);
}

function obtener(){

	var configuracion = {
		enableHighAccuracy: true,
		timeout: 10000,
		maximunAge: 50000
	};

	navigator.geolocation.getCurrentPosition(mostrarPosicion, gestionErrores, configuracion);

	// el método watchPosition ejecuta la petición de ubicación cada cierto tiempo, según lo especificado en argumento configuración
	//navigator.geolocation.watchPosition(mostrarPosicion, gestionErrores, configuracion);

}

function mostrarPosicion(eventoPosicion){

	var ubicacion = document.getElementById("ubicacion");

	var latitud = eventoPosicion.coords.latitude;
	var longitud = eventoPosicion.coords.longitude;
	var exactitud = eventoPosicion.coords.accuracy;

	var mapa = "https://www.openstreetmap.org/export/embed.html?bbox="
				+(longitud-0.1)+"%2C"
				+(latitud-0.1)+"%2C"
				+(longitud+0.1)
				+"%2C"
				+(latitud+0.1)
				+"&amp;layer=mapnik&amp;marker="
				+latitud
				+"%2C" 
				+longitud;
	
	ubicacion.innerHTML = "<iframe src='" + mapa + "'></iframe>"
}

function gestionErrores(eventoError){

	//console.log("Ha existido un error, no hay permisos para acceder a ubicacion!!!" + eventoError.code + " " + eventoError.message);

	// tratamiento de errores

	if(eventoError.code == 1){

		alert("Debes permitir acceso a tu ubicación");

	}else if(eventoError.code == 2){

		alert("Ubicación no disponible");

	}else if(eventoError.code == 3){

		alert("Tiempo para determinar ubicación excedido");

	}else{

		alert("Error sin identificar");
		
	}

}