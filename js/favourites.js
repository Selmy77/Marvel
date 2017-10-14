var comic = {
	favourites: function(){
		var url = "http://gateway.marvel.com/v1/public/comics?limit=4&ts=1&apikey=7ff21228660d1a0e82fe28a814b2f411&hash=7d8761499c83cb1a3730c3f359789655"		
		var comic = document.getElementById("comic");
		$.ajax({
			url: url,
			type: "GET",
			success: function(data){
				var string = "";
				string += "<div class='row'>";

				for (var i = 0; i < data.data.results.length; i++) {
					var element =  data.data.results[i];
					//console.log(element.name);

					string += "<div class = 'col-md-3 col-md-3 text-center'>";
					string += "	<a href='"+ element.urls[0].url+"' target='_blank'>";
					string += "		<img src='"+ element.thumbnail.path +"/standard_xlarge."+ element.thumbnail.extension+"'/>";
					string += "	</a>";
					string += "	<h4>" + element.title + "</h4>";
					string += "</div>";

					if((i+1) %1 ==0){
						string += "</div>";
						string += "<div class='row'>";
					}
				}

				comic.innerHTML = string;

			}
		});
	}

};
comic.favourites();
