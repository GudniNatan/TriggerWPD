(async function() {
	let xhttp = new XMLHttpRequest();
	let btn = document.getElementById('submitButton');
	let url = document.getElementById('url');
	function sleep(ms) {
  		return new Promise(resolve => {
    		setTimeout(() => {
      			resolve('resolved');
    		}, ms);
  		});
	}

	async function breaker(url) {
		// body...
		await sleep(2000);
		try{
			var i = document.createElement("img");
			i.src = url + Math.floor(Math.random() * 200);
		}
		catch(err){
			console.log(err);
		}
	}
	btn.addEventListener("click", function(event) {
		event.preventDefault();
		let val = url.value;
		url.value = "";
		if (val[val.length - 1] !== '/')
		{
			val += "/foo/bar/";
		}
		else{
			val += "foo/bar/";
		}
		for (var i = 0; i < 20; i++) {
			breaker(val);
		}
	});
})();

