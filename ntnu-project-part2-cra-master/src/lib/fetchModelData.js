function fetchModel(url) {
	return new Promise(function (resolve, reject) {
		const address = `http://localhost:3001${url}`;

		const xhr = new XMLHttpRequest();
		xhr.responseType = 'text';

		xhr.onreadystatechange = () => {
			if (xhr.readyState !== 4) {
				return;
			}

			if (xhr.status !== 200) {
				reject(new Error({status: 501, statusText: 'Not Implemented'}));
			} else {
				resolve({data: JSON.parse(xhr.responseText)});
			}
		};

		xhr.open('GET', address);
		xhr.send();
	});
}

export default fetchModel;
