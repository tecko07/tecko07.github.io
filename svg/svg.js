document.getElementById('id_logic_version').innerHTML = "Logic = 2019.12.02.1";

window.addEventListener("deviceorientation", on_gyro_data_uab);
window.addEventListener("devicemotion", on_acc_data_uab);

function deseneaza(unghi_x, unghi_y) {
	
	//obtinem context grafic 
	var circle = document.getElementById("id_circle");
	var svg = document.getElementById("id_svg");

	//construim o cale
	context.beginPath();

	var r = circle.getAttribute("r");
	//adaugam un cerc la cale
	var x = unghi_x / 90 * (svg.width / 2 - r) + svg.width / 2; 
	var y = unghi_y / 90 * (svg.height / 2 - r) + svg.height / 2; 
	
	//actualizam pozitia cercului
	circle.setAttribute("cx", x);
	circle.setAttribute("cy", y);
}

function on_gyro_data_uab(e) {
	deseneaza(e.gamma, e.beta);
}

function on_acc_data_uab(e) {
	
	var acc = e.accelerationIncludingGravity;
	
	var rot_x = Math.atan(acc.x / acc.z) * 180 / Math.PI;
	var rot_y = Math.atan(acc.y / acc.z) * 180 / Math.PI;
}