window.onload = checkLogin; //Check to see if user is logged in already

function checkLogin(){
    if (sessionStorage.loggedInUser !== undefined) {
        //extract details of logged in user
        let usrObj = JSON.parse(localStorage[sessionStorage.loggedInUser]);

        //say hello to logged in user
        document.getElementById("loginPara").innerHTML = usrObj.userName + " Logged in. ";
    }
    else {
        document.getElementById("login-button").addEventListener("click", login);
    }
}

let cookies = document.cookie;

function login(){
    //get username
    let userName = document.getElementById("userInput").value;

    if (localStorage[userName] === undefined) {
        //inform user that they do not have an account
        document.getElementById("loginFailure").innerHTML = "Username not recognized. Do you have an account?"
        return; // Do nothing else
    }
    else {//user has account
        let usrObj = JSON.parse(localStorage[userName]); //convert to object
        let password = document.getElementById("passwordInput").value;
        if (password === usrObj.password) { //successful login
            document.getElementById("loginPara").innerHTML = usrObj.userName + " Logged in. ";
           
            sessionStorage.loggedInUser = usrObj.userName; 
        }

        else {
            document.getElementById("loginFailure").innerHTML = "Password not correct. Please try again.";
        }
    }

}