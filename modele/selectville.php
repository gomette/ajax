<?php


function selectvilleun()
{
    require_once("connexion.php");
    $servername = "localhost";
    $username = "root";
    $password = "";

  
    $region = $_POST['region'];
    
        $conn = new PDO("mysql:host=$servername;dbname=corse", $username, $password);
        $n = $conn->query("SELECT  nomvilles  FROM  villes WHERE iddep =".$region);
       

    $r=$n->fetchall();
    
        for ($i=0; $i < count($r); $i++) { 
            echo "<option>".$r[$i]['nomvilles']."</option>";
        }

        
     

    
}

?>