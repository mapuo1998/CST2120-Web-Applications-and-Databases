<?php //include file
    include 'common.php';
?>
<?php //header  
outputHeaderRest("About"); 
?>
<?php //navbar
navBar();
?>

<!-- HTML of the "about" section of the website -->
<p class="about-text">
    
    This website was created as part of coursework for CST2120 Web Applications and Databases.
</br>
    The rules of the game are simple.
    </br>
    If you roll a 7 or 11 in the first round, you win. If you roll a 2, 3 or 12 in the first round, you lose.
    </br>
    If you roll a 4, 5, 6, 8, 9 or 10, it will be counted as a point, and in order for you to win you have to keep rolling until you get your initial number.
    </br>
    If you get a 7 while rolling for your point, you will lose (rules of first roll stop applying in the rounds that follow).
</p>


<?php //footer
    outputFooter();
    ?>
