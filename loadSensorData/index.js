var fetch = require('node-fetch');

exports.handler = (event, context, callback) => {
	fetch('https://data.melbourne.vic.gov.au/resource/xbm5-bb4n.json')
    .then((response) => response.json())
    .then((responseJson) => {
       callback(null, responseJson);
    });
  
};