

document.addEventListener("DOMContentLoaded", function() {

	 setInterval(updateTime, 1000);
	 document.getElementsByTagName("body")[0].classList.add('theme1');

	 function updateTime() {
	 	var time = document.getElementById("time");
	 	var date = new Date();
	 	var hours = ("0" + date.getHours()).slice(-2);
	 	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	 	var dateElement = document.getElementById("date-element");


	 	time.innerHTML = hours + ':' + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2);
	 	// dateElement.innerHTML = ("0" + date.getDate()).slice(-2) + months[date.getMonth(4)] + date.getFullYear();

	 	dateElement.innerHTML = `${("0" + date.getDate()).slice(-2)} ${months[date.getMonth(4)]} ${date.getFullYear()}`; // adding space between the text easily

	 }

})


	 var theme = "sky";
	 function changeTheme() {
	 	console.log('changeTheme');
	 	
	 	if (theme === "sky") {
	 		theme = "landscape"

	 	} else {
	 		theme = "sky"
	 	}




	 	var bodyElement = document.getElementsByTagName("body")[0]; // takes the firts background 
	 	var birds = document.getElementById("birds");

	 	switch (theme) {

	 		case "landscape" : 	
	 			bodyElement.classList.add('theme2');
	 			birds.style.display = "block";
	 			bodyElement.classList.remove('theme1');
	 			break;
	 		default:
	 			bodyElement.classList.remove('theme2');
	 			birds.style.display = "none"; 
	 			bodyElement.classList.add('theme1');
	 	}
	 };


