<?php //include file
    include 'common.php';
    ?>
<?php //header
    outputHeaderRest("Play");
    ?>
<?php //navbar
    navBar();
    ?>


<!-- game canvas with the game inside -->
<canvas id="canvas"></canvas>

<script src="../JS/game.js"></script>


<?php //footer
    outputFooter();
    ?>