<?php


function selectville()
{
    require_once("connexion.php");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);
    $n = $conn->query('SELECT * FROM villes');

    $r = $n->fetchall();
    echo json_encode($r);
}

selectville();

        
     

    


?>