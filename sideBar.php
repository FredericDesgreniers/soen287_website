<div id="sideMenu">
    
            <ul id="sideList">
                <a href="index.php"><li>HOME</li></a>
                <a href="cart.php"><li>CART</li></a>
                <li>CHECKOUT</li>
                <?php
                session_start();
     
                    if(isset($_SESSION["logggedIn"])){
                        ?>
                            <a href="logout.php"><li>LOGOUT</li></a>
                        <?php
                    }else{
                ?>
                <a href="register.php"><li>REGISTER</li></a>
                <a href="login.php"><li>LOGIN</li></a>
                <?php
                        
                    }
                        ?>
            </ul>
        </div>