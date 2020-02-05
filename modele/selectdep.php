<?php

function selectdep()
{
    require_once("connexion.php");
    $servername = "localhost";
    $username = "root";
    $password = "";
    $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);
    $n = $conn->query('SELECT * FROM dep');

    $r = $n->fetchall();
    echo json_encode($r);
}

selectdep();