<?php
require_once("connexion.php");

function selectdep()
{
    $servername = "localhost";
    $username = "root";
    $password = "";
    $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);
    $n = $conn->query('SELECT iddep, nomdep FROM dep');
    $r = $n->fetchall();
    // var_dump($r);
    echo json_encode($r);
    // var_dump($r);
}

selectdep();


