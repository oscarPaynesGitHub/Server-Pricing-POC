

function openOption(evt, serverOption) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(serverOption).style.display = "block";
    evt.currentTarget.className += " active";
  }

var defaultInput = document.getElementById("dell-CTO-rack");

defaultInput.click()

//this doesnt work yet :/
function showConstituents() {
    document.getElementsByClassName("constituents").style.display = "none";
}

//function save() {
//    var newbrokerPrice = document.getElementById("bb-price-1").value;
//    var newMinPrice = document.getElementById("min-price-1").value;
//    var newMaxPrice = document.getElementById("max-price-1").value;
//
//    document.getElementById("bb-price-1").placeholder = newbrokerPrice;
//    document.getElementById("min-price-1").placeholder = newMinPrice;
//    document.getElementById("max-price-1").placeholder = newMaxPrice;
//}

//let newPer640Price = document.getElementById('per640-price').value
let sparePrice = document.getElementById("spare-price").placeholder
let controllerPrice = document.getElementById("controller-price").placeholder


function update() {
  console.log("logged")
  let newPer640Price = document.getElementById('per640-price').value
  document.getElementById("per640-price").placeholder = newPer640Price;

  let sparePrice = document.getElementById("spare-price").placeholder
  document.getElementById("spare-price").placeholder = sparePrice;

  let controllerPrice = document.getElementById("controller-price").placeholder
  document.getElementById("controller-price").placeholder = controllerPrice;
  
  let totalValue = parseInt(newPer640Price) + parseInt(sparePrice) + parseInt(controllerPrice)
  console.log(totalValue)
  document.getElementById("total").placeholder = totalValue;

}

