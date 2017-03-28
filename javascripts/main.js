var carContainer = document.getElementById("carContainer");
var eachCar = document.getElementsByClassName("thumbnail");
var textBox = document.getElementById("userInput");
var descriptions = document.getElementsByTagName("p");
function populatePage (inventory) {
  var inventoryString = "";
  // Loop over the inventory and populate the page
  for (var i=0; i<inventory.length; i++){
    if (i%3===0){
    inventoryString += `<div class="row">`
    }
  
    inventoryString+=`<div class="col-sm-6 col-md-4">`;
    inventoryString+=`<div class="thumbnail blackBorder" id=${i}>`;
    inventoryString+=`<img src="${inventory[i].url}">`;
    inventoryString+=`<div class="caption">`;
    inventoryString+=`<h3>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</h3>`;
    inventoryString+=`<p>${inventory[i].description}</p>`;
    inventoryString+=`<h5>${inventory[i].price}</h5>`;
    inventoryString+=`</div></div></div>`;
    if (i%3===2){
    inventoryString+=`</div>`;
    }
      
  }

  carContainer.innerHTML = inventoryString;
  // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
