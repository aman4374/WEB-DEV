$(document).ready(function() {
    $("#dob").datepicker({
        dateFormat: 'mm/dd/yy',
        changeYear: true,
        changeMonth: true,
        yearRange: "-100:+0"
    });
});

function validateForm() {
    var resident = document.forms["aadharForm"]["resident"].value;
    var fullName = document.forms["aadharForm"]["fullName"].value;
    var gender = document.forms["aadharForm"]["gender"].value;
    var dob = document.forms["aadharForm"]["dob"].value;
    var address = document.forms["aadharForm"]["address"].value;
    var fathersName = document.forms["aadharForm"]["fathersName"].value;
    var mothersName = document.forms["aadharForm"]["mothersName"].value;
    var proofType = document.forms["aadharForm"]["proofType"].value;
    var documentId = document.forms["aadharForm"]["documentId"].value;
    var mobileNumber = document.forms["aadharForm"]["mobileNumber"].value;

    if (resident === "") {
        alert("Please select Resident or Non Resident Indian");
        return false;
    }
    if (fullName.length < 5 || fullName.length > 20) {
        alert("Full Name should be between 5 and 20 characters");
        return false;
    }
    if (gender === "") {
        alert("Please select a Gender");
        return false;
    }
    if (!dob.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        alert("Please enter Date of Birth in MM/DD/YYYY format");
        return false;
    }
    if (address.length > 50) {
        alert("Address should not exceed 50 characters");
        return false;
    }
    if (fathersName.length < 5 || fathersName.length > 20) {
        alert("Father's Name should be between 5 and 20 characters");
        return false;
    }
    if (mothersName.length < 5 || mothersName.length > 20) {
        alert("Mother's Name should be between 5 and 20 characters");
        return false;
    }
    if (proofType === "") {
        alert("Please select a Type of Proof Submitted");
        return false;
    }
    if (!documentId.match(/^\d+$/)) {
        alert("Document ID should be numeric");
        return false;
    }
    if (!mobileNumber.match(/^\d{10}$/)) {
        alert("Mobile Number should be numeric and of 10 digits");
        return false;
    }
    return true;
}
