var CarLot = (function (oldCarLot) {
	oldCarLot.activateEvents = function (){
		for (var i=0; i<eachCar.length; i++){
			eachCar[i].addEventListener("click", CarLot.reset);
		};
	};
	oldCarLot.inputEvent = function (){
		textBox.focus();
		textBox.value = "";
		textBox.addEventListener("keyup", CarLot.updateInfo);
	};

	return oldCarLot;
})(CarLot || {});