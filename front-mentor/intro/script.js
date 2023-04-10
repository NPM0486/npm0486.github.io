function validateForm() {
    var check = 0;
    var x = document.forms["trial"]["first-name"].value;
        if (x == "") {
            document.getElementById("first-name").classList.add("error");
            document.getElementById("fnameId").innerHTML = "First Name cannot be empty";
            document.getElementById("fnameImg").style.display = "block";
        }

        if (x != "") {
            document.getElementById("first-name").classList.remove("error");
            document.getElementById("fnameId").innerHTML = "";
            document.getElementById("fnameImg").style.display = "none";
            check += 1;
        }

    var y = document.forms["trial"]["last-name"].value;
        if (y == "") {
        document.getElementById("last-name").classList.add("error");
        document.getElementById("lnameId").innerHTML = "Last Name cannot be empty";
        document.getElementById("lnameImg").style.display = "block";
        }
    
        if (y != "") {
        document.getElementById("last-name").classList.remove("error");
        document.getElementById("lnameId").innerHTML = "";
        document.getElementById("lnameImg").style.display = "none";
        check += 1;
        }

    var z = document.forms["trial"]["email"].value;
        if (z == "") {
        document.getElementById("email").classList.add("error");
        document.getElementById("emailId").innerHTML = "Looks like this is not an email";
        document.getElementById("emailImg").style.display = "block";
        }

        if (z != "") {
        document.getElementById("email").classList.remove("error");
        document.getElementById("emailId").innerHTML = "";
        document.getElementById("emailImg").style.display = "none";
        check += 1;
        }

        if ( z.indexOf("@") == -1 || z.indexOf(".") == -1 ) {
        document.getElementById("email").classList.add("error");
        document.getElementById("emailId").innerHTML = "Looks like this is not an email";
        document.getElementById("emailImg").style.display = "block";
        check -= 1;
        }

    var a = document.forms["trial"]["password"].value;
        if (a == "") {
        document.getElementById("password").classList.add("error");
        document.getElementById("passwordId").innerHTML = "Password cannot be empty";
        document.getElementById("passwordImg").style.display = "block";
        }

        if (a != "") {
        document.getElementById("password").classList.remove("error");
        document.getElementById("passwordId").innerHTML = "";
        document.getElementById("passwordImg").style.display = "none";
        check += 1;
        if (a.length < 8 || a.length > 32 || a.indexOf(" ") != -1) {
            document.getElementById("password").classList.add("error");
            document.getElementById("passwordId").innerHTML = "Password must be: min 8 characters, max 32 characters, no spaces";
            document.getElementById("passwordImg").style.display = "block";
            check -= 1;
            }
        }

    if (check != 4) {
        return false;
    }

    if (check == 4) {
        alert("Thank you for submitting your form!");
        window.location.reload();
        return false;
    }
}