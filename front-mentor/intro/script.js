function validateForm() {
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
        }

    if (x == "" || y == "" || z == "" || a == "") {
    return false;
    }
}