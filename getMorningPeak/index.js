var fetch = require('node-fetch');

exports.handler = (event, context, callback) => {
    var query = event.string;
     if(query == null){
        query = "";
    }
    else{
      query = '&' + query + "&$where=year > 2016" + ' AND time > 6 AND time < 13';
    }
    var api = 'https://data.melbourne.vic.gov.au/resource/mxb8-wn4w.json?$limit=31000' + query;
    console.log(api);
    var data = [];
    var mon = 0;
    var tue = 0;
    var wed = 0;
    var thur = 0;
    var fri = 0;
    var sat = 0;
    var sun = 0;
    var monAvg = 0;
    var tueAvg = 0;
    var wedAvg = 0;
    var thurAvg = 0;
    var friAvg = 0;
    var satAvg = 0;
    var sunAvg = 0;
    var tosend = [];
	fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.length);
                data = responseJson;
                for(var i = 0; i < data.length; i++){
                    switch(data[i].day){
                        case 'Monday':
                            mon = mon + parseInt(data[i].qv_market_peel_st);
                            monAvg = monAvg + 1;
                            break;
                        case 'Tuesday':
                            tue = tue + parseInt(data[i].qv_market_peel_st);
                            tueAvg = tueAvg + 1;
                            break;
                        case 'Wednesday':
                            wed = wed + parseInt(data[i].qv_market_peel_st);
                            wedAvg = wedAvg + 1;
                            break;
                        case 'Thursday':
                            thur = thur + parseInt(data[i].qv_market_peel_st);
                            thurAvg = thurAvg + 1;
                            break;
                        case 'Friday':
                            fri = fri + parseInt(data[i].qv_market_peel_st);
                            friAvg = friAvg + 1;
                            break;
                        case 'Saturday':
                            sat = sat + parseInt(data[i].qv_market_peel_st);
                            satAvg = satAvg + 1;
                            break;
                        case 'Sunday':
                            sun = sun + parseInt(data[i].qv_market_peel_st);
                            sunAvg = sunAvg + 1;
                            break;
                    }
                }
                tosend.push(parseInt(mon/monAvg));
                tosend.push(parseInt(tue/tueAvg));
                tosend.push(parseInt(wed/wedAvg));
                tosend.push(parseInt(thur/thurAvg));
                tosend.push(parseInt(fri/friAvg));
                tosend.push(parseInt(sat/satAvg));
                tosend.push(parseInt(sun/sunAvg));
                callback(null, tosend);
    });
    
    
};