function calculateTip() {
    var bill = document.getElementById("billamt").value;
    var service = document.getElementById("serviceQual").value;
    var people = document.getElementById("peopleamt").value;

    if (bill === "" || service == 0) {
        alert("Please enter the bill amount and service quality!");
    }

    if (people === "" || people < 1) {
        people = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }

    //calculator 

    var total = (bill * service) / people;
    total = total.toFixed(2);

    if (total > 0) {
        document.getElementById("totalTip").style.display = "block";
        document.getElementById("tip").innerHTML = total;
        document.getElementById("reset").style.display = "block";
    }

}

// reset button 
function resetButton() {
    document.getElementById("reset").style.display = "none";
    document.getElementById("totalTip").style.display = "none";
    document.getElementById("serviceQual").selectedIndex = "0";
    document.getElementById("clearform1").reset();
    document.getElementById("clearform2").reset();
}



