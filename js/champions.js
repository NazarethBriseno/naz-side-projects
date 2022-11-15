$(document).ready(function() {
    var myItems;

    $.getJSON('stuff/champion.json', function(data) {
        myItems = data.data;
        console.log(myItems);
        for(champion in myItems){
            $('#champions').append(`<div class = "championIcons"><img src ="https://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${champion}.png"></div>`);
        }


    });
});