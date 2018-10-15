var fetch = require('node-fetch');

exports.handler = (event, context, callback) => {
    var query = event.string;
     if(query == null){
        query = "";
    }
    else{
        query = '&' + query + "&year=2017";
    }
    var api = 'https://data.melbourne.vic.gov.au/resource/mxb8-wn4w.json?$limit=31000' + query;
    console.log(api);
    var data= [];
    var jan = 0;
    var feb = 0;
    var mar = 0;
    var apr = 0;
    var may = 0;
    var jun = 0;
    var jul = 0;
    var aug = 0;
    var sep = 0;
    var oct = 0;
    var nov = 0;
    var dec = 0;
    var total = 0;
    var test = [];
    
	fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson.length);
                data = responseJson;
            for(var i = 0; i < data.length; i++){
               switch(data[i].month){
                    case 'January':
                        jan = jan + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'February':
                        feb = feb + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'March':
                        mar = mar + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'April':
                        apr = apr + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'May':
                        may = may + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'June':
                        jun = jun + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'July':
                        jul = jul + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'August':
                        aug = aug + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'September':
                        sep = sep + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'October':
                        oct = oct + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'November':
                        nov = nov + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;
                    case 'December':
                        dec = dec + parseInt(data[i].qv_market_peel_st);
                        total = total + parseInt(data[i].qv_market_peel_st);
                        break;   
                }
               
            }
            test.push(jan);
            test.push(feb);
            test.push(mar);
            test.push(apr);
            test.push(may);
            test.push(jun);
            test.push(jul);
            test.push(aug);
            test.push(sep);
            test.push(oct);
            test.push(nov);
            test.push(dec);
            callback(null, test);
            });
};