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
            <table id="cartTable">
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            <?php
                if(isset($_SESSION["logggedIn"]))
                if(isset($_SESSION["items"])){
                    foreach($_SESSION["items"] as $v){
                        $name = $v[0];
                        $price = $v[1];
                        echo "<tr class=\"item\"><td>$name</td><td>$price</td></tr>";
                    }
                }
            ?>
                </table>
            <div id="choseOption"><a>Checkout</a> or <a href="index.php">Continue Shopping</a></div>
        </div>
        
        <div id="footer">
           Copyright © 2016 FRDE Inc. All rights reserved. 
        </div>
        
        <script src="script.js">
            
        </script>
    </body>

    </html>