//script for storing the sign up form
    let sub = document.getElementById("submit");
    sub.addEventListener("click",(e)=>{
        e.preventDefault();
        var userObject = {};
        userObject.firstName = document.getElementById("first-name").value;
        userObject.lastName = document.getElementById("last-name").value;
        userObject.dateOfBirth = document.getElementById("date-of-birth").value;
        userObject.email = document.getElementById("email").value;
        userObject.userName = document.getElementById("username").value;
        userObject.password = document.getElementById("password").value;
        userObject.confirmPassword = document.getElementById("confirm-password").value;

        //storing the users score
        userObject.numberOfWins = "0";
        //store user
        localStorage[userObject.userName] = JSON.stringify(userObject);
        //inform user of result
        document.getElementById("result").innerHTML = "<b>Registration successful.";
        console.log(localStorage);
        console.log(userObject);
        // Setting their values back to empty : 
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("date-of-birth").value = "";
        document.getElementById("email").value = "";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirm-password").value = "";
    })
