var fetch = require('node-fetch');

exports.handler = (event, context, callback) => {
    
    var currenthour = new Date().getUTCHours() + 11;
    var currentWeekDay = new Date().getDay();
    if(currenthour > 23){
        currenthour = currenthour - 24;
        currentWeekDay++;
    }
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDay = days[currentWeekDay];
    
    var query = event.string;
     if(query == null){
        query = "";
    }
    else{
        query = '&' + query + "&time=" + currenthour + '&day=' + currentDay;
    }
    
    var api = 'https://data.melbourne.vic.gov.au/resource/mxb8-wn4w.json?$limit=31000' + query;
    console.log(api);
    var data = [];
    var count = 0;
    var countAvg = 0;
    var tosend = 0;
	fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.length);
                data = responseJson;
                console.log(responseJson);
                for(var i = 0; i < data.length; i++){
                    count = count + parseInt(data[i].qv_market_peel_st);
                    countAvg++;
                }
                tosend = parseInt(count / countAvg);
                callback(null, tosend);
    });
    
    
};