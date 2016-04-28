/** Created by IATS on 18.04.16. **/

/* ------------ Selector On First Tab -------------*/

var Country = document.getElementById("Country");
var chooseState = document.getElementById("chooseState");

function toggleState() {
    if(Country.value == "USA"){
        chooseState.style.display = "block";
    }else{
        chooseState.style.display = "none";
    }
};

if(document.addEventListener){
    Country.addEventListener("change", toggleState);
} else{
    Country.attachEvent("click", toggleState);
}

/* ------------ Selector On Second Tab -------------*/


var changeCountry = document.getElementById("changeCountry");
var changeState = document.getElementById("changeState");

function toggleStateSecond() {
    if(changeCountry.value == "USA"){
        changeState.style.display = "block";
    }else{
        changeState.style.display = "none";
    }
};

if(document.addEventListener){
    changeCountry.addEventListener("change", toggleStateSecond);
} else{
    changeCountry.attachEvent("click", toggleStateSecond);
}


/* ---------- Pop-Up Video ---------------*/
$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

