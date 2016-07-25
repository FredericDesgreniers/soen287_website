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
        
        var buyBtn = document.createElement("input");
        buyBtn.type = "button";
        buyBtn.value = "Buy now for " + price + "$";

        this.itemEl.appendChild(itemTitle);
        this.itemEl.appendChild(itemImage);
        this.itemEl.appendChild(itemDescription);
        this.itemEl.appendChild(buyBtn);

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



var items = [];
loadItemsFromJson();
updateItemDisplay();
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(function () {
    var date = new Date();
    document.getElementById("time").innerHTML = days[date.getDay()] + ", " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear() + " - " + format2(date.getHours()) + ":" + format2(date.getMinutes()) + ":" + format2(date.getSeconds());
}, 0, 1000);