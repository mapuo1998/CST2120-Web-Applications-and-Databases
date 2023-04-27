<?php // header function only for index page
function outputHeaderIndex(){
        echo '<!DOCTYPE html>';
        echo '<head>
            <link rel="stylesheet" href="../css/styles.css">
            <title>Street Craps!</title>
        </head>';
        echo '<!-- index class page has gif as background -->';
        echo '<body class="index-page">';
        echo '<header>';
        echo '<!-- hamburger button -->';
        echo '<a class="hamburger" href="#navbar" aria-label="Open main menu.">
                    <img src="../images/menu-bar.svg" width="20" height="20" aria-hidden="true">
                </a>';
        echo '<!-- navigation bar with logo and options -->';
        echo '<nav id="navbar">';
        
        echo '<!-- close button for hamburger -->';
        echo '<a class="close" href="#" aria-label="Close main menu.">
                        <img src="../images/close-icon.svg" width="20" height="20" aria-hidden="true">
                    </a>';
        echo '</nav>';
        echo '</header>';
    }

function // header function for the rest of the pages with title variable
    outputHeaderRest($title){
        echo '<!DOCTYPE html>';
        echo '<html>';
        echo '<link rel="stylesheet" href="../css/styles.css">';
        echo '<head><title>'. $title .'</title></head>';
        echo '<body>';
    }

function //navigation bar
    navBar(){
        echo '<header>';
        echo '<!-- hamburger button -->';
        echo '<a class="hamburger" href="#navbar" aria-label="Open main menu."> 
        <img src="../images/menu-bar.svg" width="20" height="20" aria-hidden="true">
        </a>';
        echo '<!-- navigation bar with logo and options -->';
        echo '<nav id="navbar">';
        echo '<div class="logo">
                        <a href="../php/index.php"><img src="../images/street-craps-logo-navbar.svg" width="200" height="29.5"
                                fill="none" aria-hidden="true"></a></div>';
        echo '<ul class="icons-top">
                        <li><a href="../php/LogIn.php"><img src="../images/log-in.svg" width="20" height="20"
                                    aria-hidden="true"> Log in </a></li>
                        <li><a href="../php/SignUp.php"><img src="../images/sign-up.svg" width="20" height="20"
                                    aria-hidden="true"> Sign up </a></li>
                        <li><a href="../php/Play.php"><img src="../images/play.svg" width="20" height="20" aria-hidden="true"> Play </a></li>
                        <li><a href="../php/Leaderboard.php"><img src="../images/leaderboard.svg" width="20" height="20"
                                    aria-hidden="true"> Leaderboard</a></li>
                    </ul>';
                    
        echo '<!-- close button for hamburger -->';
        echo '<a class="close" href="#" aria-label="Close main menu.">
                        <img src="../images/close-icon.svg" width="20" height="20" aria-hidden="true">
                    </a>';
        echo '</nav>';
        echo '</header>';            
    }

function // footer function
 outputFooter(){
    echo '<footer>';
    echo '<div class="footer">';
    echo '<p>Street Craps Game 2022 &#169; </p>';
    echo '<li><a href=""><img src="../images/logo-instagram.svg" width="50"
                    height="50" aria-hidden="true"></a></li>
        <li><a href=""><img src="../images/logo-github.svg" width="50" height="50"
                    aria-hidden="true"></a></li>
        <li><a href=""><img src="../images/logo-whatsapp.svg" width="50" height="50"
                    aria-hidden="true"></a></li>
        <li><a href="../php/About.php" class="active"><img src="../images/about.svg" width="50" height="50"
                    aria-hidden="true"></a> </li>';
    echo '</div>';
    echo '</footer>';
    echo '</body>';    
 }

 //Array of pages
 $linkNames = array("Street Craps!", " Log in ", " Sign up ", " Play ", " Leaderboard ");
 //Array of addresses
 $linkAddresses = array("index.php", "SignUp.php", "Play.php", "LogIn.php", "Leaderboard.php");


 switch ($linkNames) {  //switch statement used to navigate through pages
    case "Street Craps!":
        echo '<a href="../php/index.php"><img src="../images/street-craps-logo-navbar.svg" width="200" height="29.5"
        fill="none" aria-hidden="true"></a></div>';
        break;

    case " Log in ":
      echo '<li><a href="../html/LogIn.html"><img src="../images/log-in.svg" width="20" height="20" aria-hidden="true"> Log in </a></li>';
      break;
      
    case " Sign up ":
      echo '<li><a href="../html/SignUp.html"><img src="../images/sign-up.svg" width="20" height="20" aria-hidden="true"> Sign up </a></li>;';
      break;
      
    case " Play ":
      echo '<li><a href="../html/Play.html"><img src="../images/play.svg" width="20" height="20" aria-hidden="true"> Play </a></li>';
      break;
      
    case " Leaderboard":
      echo '<li><a href="../html/Leaderboard.html"><img src="../images/leaderboard.svg" width="20" height="20" aria-hidden="true"> Leaderboard</a></li>';
      break;
      
    default:
      echo '';
      }

