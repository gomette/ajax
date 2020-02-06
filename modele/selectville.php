<?php

require_once("connexion.php");

function selectville()
{
     if(isset($_POST['dep']))
     {

         $id = $_POST['dep'];
     }

    var_dump($id);
    $servername = "localhost";
    $username = "root";
    $password = "";
    $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);
    $n = $conn->query("SELECT nomvilles FROM villes INNER JOIN dep ON dep.iddep = villes.iddep WHERE dep.iddep = $id" );
var_dump($n);
    $r = $n->fetchall();
    echo json_encode($r);
}

selectville();

        
     

    


?>