function showPassword() {
    var passwords = document.getElementsByClassName("pass");
    for (var i = 0; i < passwords.length; i++) {
        if (passwords[i].type === "password") {
            passwords[i].type = "text";
        } else {
            passwords[i].type = "password";
        }
    }
    var npassIcon = document.getElementById("npassopen");
    var cpassIcon = document.getElementById("cpassopen");

    if (passwords[0].type === "text") {
        npassIcon.classList.remove("fa-eye-slash");
        npassIcon.classList.add("fa-eye");
        cpassIcon.classList.remove("fa-eye-slash");
        cpassIcon.classList.add("fa-eye");
    } else {
        npassIcon.classList.remove("fa-eye");
        npassIcon.classList.add("fa-eye-slash");
        cpassIcon.classList.remove("fa-eye");
        cpassIcon.classList.add("fa-eye-slash");
    }
}
// Attach event listener to the form
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    // Validate the form
    if (validateForm()) {
        displayRegisteredDetails();
    }
});

// Function to validate the form
function validateForm() {
    let isValid = true;
    const fname = document.getElementById("fname").value.trim();
    document.getElementById("fnameError").textContent = fname ? "" : "First Name is required.";
    isValid = isValid && !!fname;

    const lname = document.getElementById("lname").value.trim();
    document.getElementById("lnameError").textContent = lname ? "" : "Last Name is required.";
    isValid = isValid && !!lname;

    const dob = document.getElementById("DOB").value;
    document.getElementById("dobError").textContent = dob ? "" : "Date of Birth is required.";
    isValid = isValid && !!dob;

    const gender = document.querySelector('input[name="gender"]:checked');
    document.getElementById("genderError").textContent = gender ? "" : "Gender is required.";
    isValid = isValid && !!gender;


    const studentID = document.getElementById("id").value.trim();
    document.getElementById("idError").textContent = studentID && !isNaN(studentID) ? "" : "Student ID must be a valid number.";
    isValid = isValid && !!studentID && !isNaN(studentID);

    const department = document.getElementById("department").value.trim();
    document.getElementById("departmentError").textContent = department ? "" : "Department is required.";
    isValid = isValid && !!department;

   
    const npass = document.getElementById("npass").value.trim();
    const cpass = document.getElementById("cpass").value.trim();
    document.getElementById("npassError").textContent = npass ? "" : "Password is required.";
    document.getElementById("cpassError").textContent = npass === cpass ? "" : "Passwords do not match.";
    isValid = isValid && !!npass && npass === cpass;

    const email = document.getElementById("mail").value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    document.getElementById("emailError").textContent = email && emailPattern.test(email) ? "" : "Invalid email format.";
    isValid = isValid && !!email && emailPattern.test(email);

    const address = document.getElementById("address").value.trim();
    document.getElementById("addressError").textContent = address ? "" : "Address is required.";
    isValid = isValid && !!address;

    
    const declare = document.getElementById("declare").checked;
    document.getElementById("declareError").textContent = declare ? "" : "You must declare the information.";
    isValid = isValid && declare;

    return isValid;
}

// Function to display the registered details
function displayRegisteredDetails() {
    const details = `
        First Name: ${document.getElementById("fname").value}<br>
        Last Name: ${document.getElementById("lname").value}<br>
        Date of Birth: ${document.getElementById("DOB").value}<br>
        Gender: ${document.querySelector('input[name="gender"]:checked').value}<br>
        Student ID: ${document.getElementById("id").value}<br>
        Department: ${document.getElementById("department").value}<br>
        Email: ${document.getElementById("mail").value}<br>
        Address: ${document.getElementById("address").value}
    `;

    document.getElementById("details").innerHTML = details;
    document.getElementById("registeredDetails").style.display = "block";
}
