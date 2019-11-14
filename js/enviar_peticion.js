const btnBuscar = document.getElementById("btnBuscar");

btnBuscar.onclick = function() {
	let consulta = document.getElementById("consulta").value;

	let request = new XMLHttpRequest();
	request.open('POST',"stock");
	request.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	
	request.send(JSON.stringify({"consulta": consulta}));
	request.onload = function(){
        document.getElementById('datos').innerHTML = request.response;
	}
}