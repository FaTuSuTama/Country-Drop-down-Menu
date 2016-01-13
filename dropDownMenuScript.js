var bangCityName = ["Dhaka", "Khulna", "Rajshahi"];  
var indCityName = ["Monipuri", "Telegu", "Bihar"];
var pakCityName = ["Lahor", "Islamabad", "Jambu"];
var countryName = ["Bangladesh", "India", "Pakistan"];

function addNewOption(text){
    var newOpt = document.createElement("option");
    newOpt.text = text;
    var select = document.getElementById("selectCountry");
    select.appendChild(newOpt);    
}
function displayCountryName(){
    for(var i=0; i<countryName.length; i++){
        addNewOption(countryName[i]);         
    }
}

function addNewArea(text){
    var newArea = document.createElement("option");
    var select = document.getElementById("selectCity");
    newArea.text = text;
        select.appendChild(newArea);
}

function displayCityName(){
    var removeCityChild = document.getElementById("selectCity");
        while (removeCityChild.firstChild) {
            removeCityChild.removeChild(removeCityChild.firstChild);
        }
    var selectedValueofCountry = document.getElementById("selectCountry").value ;
    if ( selectedValueofCountry == "Bangladesh"){
            for(var i=0; i<bangCityName.length; i++){
                addNewArea(bangCityName[i]);
       } 
    }else if (selectedValueofCountry == "India"){
            for(var i=0; i<indCityName.length; i++){
                addNewArea(indCityName[i]);

        }
    }else if (selectedValueofCountry == "Pakistan"){
            for(var i=0; i<pakCityName.length; i++){
                addNewArea(pakCityName[i]);
        }
    }else{
            alert("please select the country");
    }
}