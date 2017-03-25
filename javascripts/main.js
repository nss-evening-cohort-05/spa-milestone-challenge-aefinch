var carContainer = document.getElementById("carContainer");
var desiredColumns = 3;
function populatePage (inventory) {
  var inventoryString = "";
  // Loop over the inventory and populate the page
  for (var i=0; i<inventory.length; i++){
    if (i%3===2){
    inventoryString += `<div class="row">`
    // inventoryString+=`</div>`
    }
    // debugger;
    // for(var k=0; k<desiredColumns-1; k++){
    console.log(inventory.length);
    //   // index=i+k;
    //   console.log(index);
      inventoryString+=`<div class="col-sm-6 col-md-4">`;
      inventoryString+=`<div class="thumbnail">`;
      inventoryString+=`<img src="${inventory[i].url}">`;
      inventoryString+=`<div class="caption">`;
      inventoryString+=`<h3>${inventory[i].year} ${inventory[i].make} ${inventory[i].model}</h3>`;
      inventoryString+=`<p>${inventory[i].description}</p>`;
      inventoryString+=`<h5>${inventory[i].price}</h5>`;
    //   // inventoryString+=`<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>`
      inventoryString+=`</div></div></div>`;
    // }
    if (i%3===2){
    inventoryString+=`</div>`;
    }
      
  }

  carContainer.innerHTML = inventoryString;
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
