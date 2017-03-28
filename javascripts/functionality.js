var CarLot = (function (oldCarLot) {
	oldCarLot.reset = function (){
		var selected = event.target.parentNode;
		if (selected.classList.contains("caption")){
			selected = selected.parentNode;
		}
		for (var i=0; i<eachCar.length; i++){
			if (i!=selected.id){
				eachCar[i].classList.remove("highlight");
				eachCar[i].classList.add("blackBorder");
			} else {
				selected.classList.remove("blackBorder");
				selected.classList.add("highlight");
				CarLot.inputEvent();
			}
		}
	};
	oldCarLot.updateInfo = function(){
		if(event.keyCode===13){
			for (var m=0; m<eachCar.length; m++){
				eachCar[m].classList.remove("highlight");
				eachCar[m].classList.add("blackBorder");
			}; 
			textBox.value = "";
		}
		else {
			for (var n=0; n<eachCar.length; n++){
				if (eachCar[n].classList.contains("highlight")){
				var textIn = textBox.value;
				descriptions[n].innerHTML=textIn;
				};
			};
		};
	};

	return oldCarLot;
})(CarLot || {});