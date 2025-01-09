function check() {
    let x = document.getElementById("blood_group").value;
    let result = "";
    
    if (x === "AB+") {
        result = "O-, O+, A-, A+, B-, B+, AB-, AB+";
    } else if (x === "AB-") {
        result = "O-, A-, B-, AB-";
    } else if (x === "A-") {
        result = "O-, A-";
    } else if (x === "A+") {
        result = "O-, O+, A-, A+";
    } else if (x === "B-") {
        result = "O-, B-";
    } else if (x === "B+") {
        result = "O-, O+, B-, B+";
    } else if (x === "O-") {
        result = "O-";
    } else if (x === "O+") {
        result = "O-, O+";
    } else {
        result = "Invalid Blood Group";
    }

    document.getElementById("output").innerHTML = result;
    document.getElementById("compatibleDonors").style.display = "block";
}