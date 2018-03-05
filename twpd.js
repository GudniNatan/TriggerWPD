(async function() {
	let xhttp = new XMLHttpRequest();
	let btn = document.getElementById('submitButton');
	let url = document.getElementById('url');
	let progress = document.getElementById('progress');
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
	btn.addEventListener("click", async function(event) {
		event.preventDefault();
		let val = url.value;
		url.value = "";
		progress.textContent = "Working...";
		if (val[val.length - 1] !== '/')
		{
			val += "/foo/bar/";
		}
		else{
			val += "foo/bar/";
		}
		for (var i = 0; i < 50; i++) {
			breaker(val);
			await sleep(100);
		}
		progress.textContent = "Done!";
	});
})();

