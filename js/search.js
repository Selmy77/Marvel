var search = {
	showDetails: function(){
		//var web = "https://gateway.marvel.com:443/v1/public/characters?name=Abyss&limit=10&ts=1&apikey=7ff21228660d1a0e82fe28a814b2f411&hash=7d8761499c83cb1a3730c3f359789655";
		//var web ="https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=3&limit=10&ts=1&apikey=7ff21228660d1a0e82fe28a814b2f411&hash=7d8761499c83cb1a3730c3f359789655"
		
		var searching = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=";
		//var why = $('input[name="submit"]'); 
		var name = document.getElementById("hero").value;
		var url = searching + name + "&ts=1&limit=10&apikey=7ff21228660d1a0e82fe28a814b2f411&hash=7d8761499c83cb1a3730c3f359789655";
		//console.log(name);
		//alert(name);
		var marvelContainer = document.getElementById("marvel-container");
		
		$.ajax({
			url: url,
			type: "GET",			
			success: function(data){	
				var string = "";
				string += "<div class='row'>";
					for (var i = 0; i < data.data.results.length; i++) {
						var element =  data.data.results[i];

						console.log();

						string += "<div class = 'col-xs-9 col-md-6'>";
						string += "	<a href='"+ element.urls[0].url+"' target='_blank'>"; //abre la url del heroe en una nueva pestaña
						string += "		<div class = 'col-xs-3 col-md-6'>";
						string += "			<img class='character-image img-responsive' src='"+ element.thumbnail.path +"/standard_xlarge."+ element.thumbnail.extension+"'/>";
						string += "		</div>";
						string += "	</a>";					
						string += "	<h3>" + element.name + "</h3>";					
						string += "	<p>" + element.description + "</p>";
						string += "</div>";

						if((i+1) %2 ==0){
							string += "</div>";
							string += "<div class='row'>";
						}

						console.log(url);
					}
					marvelContainer.innerHTML = string;			

			}
		});
		
	}

};
//search.showDetails();


