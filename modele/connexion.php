<?php

function connexion()
{

    $servername = "localhost";
    $username = "root";
    $password = "";
    try {
        $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);

        return $conn;
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
}
