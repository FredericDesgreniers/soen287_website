<?php

if(!(isset($_GET["user"]) && strlen($_GET["user"])>0) || !(isset($_GET["pass"]) && strlen($_GET["user"])>0)){
    header("Location:login.php?alert=All fields must be filled in!");
    die();
}
$members = fopen("members.txt", "r");
if ($members) {
    while (($line = fgets($members)) !== false) {
        
        if(strlen($line)>0){
            $args = explode(':',$line);
     
            if($_GET["user"] == $args[2] && $_GET["pass"] == $args[4]){
                session_start();
                $_SESSION["logggedIn"] = $_GET["user"];
                header("Location: index.php?alert=Login succesfull!");
                die();
            }
          
        }
    }
    header("Location:login.php?alert=User/Pass is incorrect");
    

    fclose($members);
} else {
    // error opening the file.
} 

?>