<?php

require_once("connexion.php");



function selectville()
{
     if(isset($_POST['id']))
     {

         $id = $_POST['id'];
        
     }

    $servername = "localhost";
    $username = "root";
    $password = "";
    $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);
    $n = $conn->query("SELECT nomvilles FROM villes INNER JOIN dep ON dep.iddep = villes.iddep WHERE dep.iddep = $id" );
    $r = $n->fetchall();
    echo json_encode($r);
}

selectville();

?>