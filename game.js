/**
 * Created by evanmeigs1 on 9/28/15.
 */
// JavaScript Document

// create an array of food items for the monster to eat
var foodarr = ["Banana","Apple","Orange","Bubble Gum","Taffy","Cotton Candy"];
var currentfood = "";

// start the game with a function
function rungame() {
   var thefood = getfood();
    setfood(thefood);
}

// randomly select a food to put in the box
function getfood() {
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    return foodarr[randomfood];
}

// put the food in the box
function setfood(food) {
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit() {
    //if the food is good
    if (currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy") {
        document.getElementById("commentbox").innerHTML = "Omnomnomnomnom";
        var thefood = getfood();
        setfood(thefood);
    }
    // if the food is bad
    else {
        document.getElementById("commentbox").innerHTML = "Yuck. I don't want that";
        var thefood2 = getfood();
        setfood(thefood2);
    }

}

function trashit() {
    //if the food is good
    if (currentfood == "Bubble Gum" || currentfood == "Taffy" || currentfood == "Cotton Candy") {
        document.getElementById("commentbox").innerHTML = "Awwwwww.... Don't do that";
        var thefood = getfood();
        setfood(thefood);

    }
    // if the food is bad
    else {
        document.getElementById("commentbox").innerHTML = "Hmmm. Good idea.";
        var thefood2 = getfood();
        setfood(thefood2);
    }

}

