<?php //include file
    include 'common.php';
    ?>
<?php //header
outputHeaderRest("LogIn");
?>
<?php //navbar
navBar();
?>
<!-- HTML for Log in screen -->
    <div id="loginPara" class="log-in" method="POST">
        <h1>Login</h1>
        <form method="POST" onsubmit="return false">
        
        </br>
        
            <div  class="user-login">

                <label>Username:<input id="userInput" class="user-login1" type="text" ></label>
            </div>
            </br>
            <div class="pwd-login">

                <label>Password: <input id="passwordInput" class="pwd-login1" type="password" ></label>
            </div>
            </br>
            <div class="pwd-login"><a href="#"> Forgot Password? </a> </div>

            </br>

            <div><button id="login-button" class="login-button"> Log in </button> </div>

            </br>

            <div>Not a member yet?<a href="../html/SignUp.html">Sign up!</a></div>

            <p id="loginFailure" style="color:red;"> </p>
</form>
    </div>

<script src="../JS/login.js"> </script>


<?php //footer
    outputFooter();
    ?>