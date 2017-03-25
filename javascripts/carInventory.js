var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
	  inventoryLoader.open("GET", "/javascripts/inventory.json");
	  inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
		  var data = JSON.parse(this.responseText);
		  inventory = data.cars;
		  populatePage(inventory);
      });
    },
    getInventory: function (){
    	return inventory;
    }
  };

})();
