<?php

$fName = $_GET["fName"];
$lName = $_GET["lName"];
$email = $_GET["email"];
$pNumber = $_GET["pNumber"];
$password = $_GET["password"];
$cPassword = $_GET["cPassword"];

    if(strlen($fName)>0 && strlen($lName)>0 && strlen($email)>0 && strlen($pNumber)>0 && strlen($password)>0 && strlen($cPassword)>0){
        if($password != $cPassword){
            header('Location: register.php?alert=Passwords do not match!');
            die();
        }else{
            if(strlen($password) <8){
                header('Location: register.php?alert=Password should be at least 8 characters long!');
                die();
            }
            $memberStr = $fName.":".$lName.":".$email.":".$pNumber.":".$password.":\n";
            $memberFile = file_put_contents('members.txt', $memberStr,FILE_APPEND);
            
            header('Location: index.php?alert=registration successfull!');
                die();
            
        }
    }else{
       header('Location: register.php?alert=No field should be left empty!');
                die();
    }
    
?>