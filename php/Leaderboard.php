<?php // include file
    include 'common.php';
    ?>
<?php //header
outputHeaderRest("Leaderboard");
    ?>
<?php //navbar
navBar();
?>


<!-- HTML for the leaderboard -->
    <table id="leaderboard" class="leaderboard">
        <tr>
            <th>Position</th>
            <th>Username</th>
            <th>Wins</th>
        </tr>
    </table>

<script> //script for logging the score on leaderboard
    let i = 0;
    let table = document.getElementById("leaderboard")
    Object.keys(localStorage).forEach((key) => {
        i++;
        let obj = JSON.parse(localStorage.getItem(key))
        console.log(obj.userName)
        table.innerHTML +=
        `<tr>
            <td>${i}</td>
            <td>${obj.userName}</td>
            <td>${obj.numberOfWins}</td>
        </tr>`;
    });
</script>


<?php  //footer
    outputFooter();
?>
