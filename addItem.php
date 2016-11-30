<?php
    session_start();
    if(isset($_SESSION["logggedIn"]) && isset($_GET["name"]) && isset($_GET["price"])){
        
        
        if(!isset($_SESSION["items"])){
            $_SESSION["items"] = array();
        }
        
        array_push($_SESSION["items"], array($_GET["name"], $_GET["price"]));
        echo "true";
    }else{
        echo "false";
    }


?>