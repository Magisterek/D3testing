<?php
$host = null; $db_user = null; $db_pass = null; $db_name = null; //makes so that intellij doesn't scream about undefined variables, delete later
require_once "database_login.php";
$connection = @new mysqli($host, $db_user, $db_pass, $db_name);
if($connection->connect_errno) {
    echo "Error: ".$connection->connect_errno;
}
else {
    $connection->set_charset("utf8");
    $sql_query = "SELECT name, votes FROM election_results_first_round";
    if($result = @$connection->query($sql_query)) {
        if(!$result->num_rows) {
            echo "No results!";
        }
        else {
            $json = json_encode($result->fetch_all(MYSQLI_ASSOC));
        }
    }
    else {

    }
    $connection->close();
}
?>
<!DOCTYPE html>
<html lang="pl">
    <head>
        <title>Nasz wspólny projekt</title>
        <meta charset="utf-8">
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <?php
            echo "<script> var data = $json;</script>\n";
        ?>
        <script src="d3.js"></script>
        <script src="script.js" defer></script>
    </head>
    <body>
    </body>
</html>