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
    }
  };

})();






// <div class="row">
//   <div class="col-sm-6 col-md-4">
//     <div class="thumbnail">
//       <img src="..." alt="...">
//       <div class="caption">
//         <h3>Thumbnail label</h3>
//         <p>...</p>
//         <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
//       </div>
//     </div>
//   </div>
// </div>
// var carRequest = new XMLHttpRequest();

// function queueInventory(){
// 		  // carLot.loadInventory(carData);
// };

// function loadFailed(){
//   alert("Please refresh the page")
// };

// carRequest.addEventListener("load", queueInventory);
// carRequest.addEventListener("error", loadFailed);