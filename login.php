<?xml version="1.0" encoding="ISO-8859-1"?>
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">

    <head>

        <title>Assignment 2</title>

        <link rel="stylesheet" type="text/css" href="style.css" />
    
        
    </head>

    <body>

        
        <?php
            include 'header.php';
            include 'sideBar.php';
        ?>
        
        <div id="content">
            <form action="processLogin.php" class="authForm" id="login">

                Email Address
                <br />
                <input id="email" name="user" type="text" />
                <br />
                Password
                <br />
                <input id = "password" name="pass" type="password" />
                <br />

                <input class="minBtn" type="submit" value = "login"/>
            </form>
        </div>
        
        <div id="footer">
           Copyright © 2016 FRDE Inc. All rights reserved. 
        </div>
        
        <script src="script.js">
            
        </script>
    </body>

    </html>