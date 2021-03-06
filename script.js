var itemsJson = [
    {
        "title": "Black Coat"
        , "description": "A warm black coat for the coldest winters!"
        , "img": "blackCoat.jpg"
        , price: 149.99
    },

    {
        "title": "Red Coat"
        , "description": "This red coat will take care of you during the hard months of winter as you brave the cold."
        , "img": "redCoat.jpg"
        , price: 112.21
    },

    {
        "title": "Wool Shirt"
        , "description": "A nice wool shirt to keep you warm."
        , "img": "shirt1.jpg"
        , price: 69.99
    },


    {
        "title": "Red Jacket"
        , "description": "A perfect jacket to go skiing with!"
        , "img": "ski_red.jpg"
        , price: 199.99
    },

    {
        "title": "Orange Jacket"
        , "description": "This orange jacket will protect you during outdoor sports."
        , "img": "ski_orange.jpg"
        , price: 199.99
    }

    ]


var Item = class {
    constructor(title, description, img, price) {
        this.title = title;
        this.description = description;
        this.img = img;
        this.price = price;
        this.itemEl = document.createElement("div");
        this.itemEl.classList.add("item");
        var itemTitle = document.createElement("h1");
        itemTitle.innerHTML = (this.title);
        var itemDescription = document.createElement("div");
        itemDescription.classList.add("description");
        itemDescription.innerHTML = (this.description)

        var itemImage = document.createElement("img");
        itemImage.classList.add("image");
        itemImage.src = this.img;
        
        var itemPrice = document.createElement("div");
        itemPrice.classList.add("price");
        itemPrice.innerHTML = this.price + "$";
        
        
        var cartBtn = document.createElement("input");
        cartBtn.type = "button";
        cartBtn.value = "Add to cart";
        cartBtn.classList.add("minBtn");
        cartBtn.classList.add("idle");
        
        cartBtn.onclick = function(){
           
              var request = new XMLHttpRequest();
request.open('GET', 'addItem.php?name='+title+"&price="+price);
            cartBtn.classList.add("processing");
            request.onreadystatechange = function () {
 
  if (request.readyState === 4) {
      cartBtn.classList.remove("processing");
      if(request.responseText.trim() === "true"){
          cartBtn.classList.add("success");
          setTimeout(function(){
              cartBtn.classList.remove("success");
          },2000);
      }else{
          cartBtn.classList.remove("processing");
          cartBtn.classList.add("faillure");
          setTimeout(function(){
              cartBtn.classList.remove("faillure");
              
          },2000);
      }
  }

  }

            
request.send(null);
        };
        
        
        
        this.itemEl.appendChild(itemTitle);
        this.itemEl.appendChild(itemImage);
        this.itemEl.appendChild(itemDescription);
        this.itemEl.appendChild(itemPrice);
        this.itemEl.appendChild(cartBtn);

    }
}

function loadItemsFromJson() {
    for (var i = 0; i < itemsJson.length; i++) {
        var itemJson = itemsJson[i];

        var itemEl = new Item(itemJson.title, itemJson.description, itemJson.img, itemJson.price);
        items.push(itemEl);
    }
}

function updateItemDisplay() {
    var itemsContainer = document.getElementById("items");
    if(itemsContainer!=null){
          

            for (item of items) {
                itemsContainer.appendChild(item.itemEl);
            }
            
        }
    }

function format2(num) {
    if (num < 10) {
        return "0" + num;
    } else {
        return "" + num;
    }
}

function processRegistration(){
    var errStr = "";
    var firstName,lastName,email,phoneNumber,password,cPassword;
    try{
        firstName = getVerifiedInput("First Name","firstName",/[A-z]*/);
    }catch(e){
        errStr+=e+"\n";
    }
    try{
        lastName = getVerifiedInput("Last Name","lastName",/[A-z]*/);
    }catch(e){
        errStr+=e+"\n";
    }
    try{
        email = getVerifiedInput("Email Address","email",/\w+\@((?!_)\w)+\.(com)/);
    }catch(e){
        errStr+=e+"\n";
    }
    try{
        phoneNumber = getVerifiedInput("Phone Number","phoneNumber" ,/[0-9]{3}\-[0-9]{3}\-[0-9]{4}/);
    }catch(e){
        errStr+=e+"\n";
    }
    try{
        password = getVerifiedInput("Password","password" ,/.*/);
    }catch(e){
        errStr+=e+"\n";
    }
    try{
        cPassword = getVerifiedInput("Password Confirmation","cPassword" ,/.*/);
    }catch(e){
        errStr+=e+"\n";
    }
    if(password != cPassword){
        errStr += "Passwords don't match!";
    }
    if(errStr != ""){

        document.getElementById("tempHeader").innerHTML = "<div class=\"alert\">"+errStr+"</div>";
        document.getElementById("tempHeader").classList.remove("hidden");
        hideTempHeader();
    }
    else
        window.location.href = ("registerCheck.php?fName="+firstName+"&lName="+lastName+"&email="+email+"&pNumber="+phoneNumber+"&password="+password+"&cPassword="+cPassword);
    
}

function getVerifiedInput(name, id, regex){
    var input = document.getElementById(id);
    if(input.value == ""){
        throw "Please enter a value for "+name+". ";
    }else{
        var result = regex.exec(input.value);
        if(result == null || result[0]==""){
            throw name+" not valid.";
        }
    }
    return input.value;
}

function hideTempHeader(){
    setTimeout(function(){
    document.getElementById("tempHeader").classList.add("hidden");
},500);
}

var items = [];
loadItemsFromJson();
updateItemDisplay();
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(function () {
    var date = new Date();
    document.getElementById("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " - " + format2(date.getHours()) + ":" + format2(date.getMinutes()) + ":" + format2(date.getSeconds());

}, 0, 1000);

hideTempHeader();

