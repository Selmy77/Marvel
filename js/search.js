var search = {
	render: function(){
		var web = "https://gateway.marvel.com:443/v1/public/characters?name=Abyss&limit=10&ts=1&apikey=7ff21228660d1a0e82fe28a814b2f411&hash=7d8761499c83cb1a3730c3f359789655";
		/*
		var searching = "http://gateway.marvel.com/v1/public/characters?name=";*/
		var name = document.getElementById("hero").value;/*
		var url = searching + name + "&ts=1&apikey=7ff21228660d1a0e82fe28a814b2f411&hash=7d8761499c83cb1a3730c3f359789655";*/
		console.log(name);
		/*
		$.ajax({
			url: web,
			type: "GET",
			success: function(data){
				for (var i = 0; i < data.data.results.length; i++) {
					var element =  data.data.results[i];
					console.log(element.name);
				}

			}
		});*/
		
	}
};
search.render();