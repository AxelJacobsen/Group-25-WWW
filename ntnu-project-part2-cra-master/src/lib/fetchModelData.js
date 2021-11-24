const Promise = require('promise');


/**
    * FetchModel - Fetch a model from the web server.
    *     url - string - The URL to issue the GET request.
    * Returns: a Promise that should be filled
    * with the response of the GET request parsed
    * as a JSON object and returned in the property
    * named "data" of an object.
    * If the requests has an error the promise should be
    * rejected with an object contain the properties:
    *    status:  The HTTP response status
    *    statusText:  The statusText from the xhr request
    *
*/
function fetchModel(url) {
	return new Promise(function (resolve, reject) {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		XMLHttpRequest.setRequestHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //???
		xhr.send();

		xhr.onreadystatechange = function () {
			if (this.readyState !== 4) {
				return;
			}
			if (this.status !== 200) {
				reject(xhr.status, xhr.statusText);
			} else {
				resolve({data: JSON.parse(this.responseText)});
			}
		};
	});
}

export default fetchModel;
