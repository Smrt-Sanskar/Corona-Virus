
var country = "India";

$.getJSON("https://disease.sh/v3/covid-19/countries", function(data){
    console.log(data);

    document.getElementById("heading").innerHTML = "Corona Virus data of " + country;

    for (var i = 0; i < 214; i++){
        if(data[i].country == country){
            var flag = data[i].countryInfo.flag;
            document.getElementById("flag").src = flag;
            document.getElementById("cases").innerHTML = "Total Cases: " + data[i].cases;
            document.getElementById("recovered").innerHTML = "Recovered: " + data[i].recovered;    
            document.getElementById("deaths").innerHTML = "Deaths: " + data[i].deaths;
        }
    }
});
