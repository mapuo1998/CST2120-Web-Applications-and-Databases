<?php //include file
    include 'common.php';   
    ?>
<?php //header
outputHeaderRest("SignUp");
    ?>
<?php //navbar
navBar();
    ?>

<!-- HTML for Sign up/create account form-->
    <form class="signup" method="POST">

        <h1>Create account</h1>
        </br>

        <div> <label class="lab" for="first-name">First Name: </label>
            <input class="int" type="text" placeholder="First name" id="first-name"/>
            <label class="lab1" for="last-name">Last Name: </label>
            <input class="int1" type="text" placeholder="Last name" id="last-name"/>
        </div>
        </br>
        <div> <label class="lab">Date of Birth </label>
            <input type="date" class="int" name="Date of birth" id="date-of-birth">
        </div>

        <div> <label class="lab">Email: </label>
            <input type="text" class="int" placeholder="Email address" id="email">
            <label class="lab1">Username: </label>
            <input type="text" class="int1" placeholder="Username" id="username">
        </div>
        </br>
        <div> <label class="lab">Password: </label>
            <input type="password" class="int" placeholder="Password" id="password">
            <label class="lab1">Confirm Password: </label>
            <input type="password" class="int1" placeholder="Confirm Password" id="confirm-password">
        </div>

        </br>

        <button class="submit-button" type="submit" name="Submit" id="submit"> Submit </button>
        <p id="result"> </p> 
    </form>


   
    <script src="../JS/signup.js"></script>


<?php //footer
    outputFooter();
    ?>
    