var carContainer = document.getElementById("carContainer");
var desiredColumns = 3;
function populatePage (inventory) {
  var inventoryString = "";
    // inventoryString = `<div class="row">`
  // Loop over the inventory and populate the page
  // for (var i=0; i<inventory.length; i+desiredColumns){
    debugger;
    console.log(inventory.length);
    // for(var k=0; k<desiredColumns-1; k++){
    //   // index=i+k;
    //   console.log(index);
    //   inventoryString+=`<div class="col-sm-6 col-md-4">`;
    //   inventoryString+=`<div class="thumbnail">`;
    //   inventoryString+=`<img src="${inventory[i+k].url}">`;
    //   inventoryString+=`<div class="caption">`;
    //   inventoryString+=`<h3>${inventory[i+k].year} ${inventory[i+k].make} ${inventory[i+k].model}</h3>`;
    //   inventoryString+=`<p>${inventory[i+k].description}</p>`;
    //   inventoryString+=`<h5>${inventory[i+k].price}</h5>`;
    //   // inventoryString+=`<p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>`
    //   inventoryString+=`</div></div></div>`
    // }
    // inventoryString+=`</div>`
  // }
  // carContainer.innerHTML = inventoryString;
  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory();
