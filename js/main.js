
function logIn(){
    var username = document.forms["login"]["username"].value.toLowerCase();
    var password = document.forms["login"]["password"].value;

    if(username == ""){
        alert("Enter the Username");
        return false;
    }

    if(password == ""){
        alert("Enter the Password");
        return false;
    }
    if(username == "admin" && password == "12345"){
        alert("Successfully Logged In");
        return true;
    }
    else{
        alert("Error in Username or Password");
        return false;
    }
}
