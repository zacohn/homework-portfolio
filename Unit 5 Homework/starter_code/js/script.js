//It seems these instructions account for all the pseudocode: Write at least six different lines of pseudocode and display them inline as JavaScript comments
$(document).ready(function(){// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
	
	$("#submit-btn").click(findCity);// - Use `.submit()` or ```$.click``` to figure out when the user clicks the "submit" button
	function findCity(evt){
		//console.log("before prevent");
		evt.preventDefault();// - Prevent a page refresh using the ```evt.preventDefault()``` function
		//console.log("after prevent");
		var city = $("#city-type").val();// - Store user input in ```var city```,Call ```$.val()``` on inputs to get the string value of your user's input
		//console.log(city)
		// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
		if (city=="NYC"||city=="New York"||city=="New York City"){// - Create ```if / else if / else``` conditionals to control the flow of your application
			$("body").attr("class", "nyc");//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg, Get the first element from an attribute name using ```$.attr()```
			//console.log("New York");
		}
		else if (city=="San Francisco"||city=="SF"||city=="Bay Area"){
			$("body").attr("class", "sf");//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
			//console.log("San Fran");
		}
		else if (city=="Los Angeles"||city=="LAX"||city=="LA"){
			$("body").attr("class", "la");//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
			//console.log("LA");
		}
		else if (city=="Austin"||city=="ATX"){
			$("body").attr("class", "austin");//   - "Austin" or "ATX" make the background of the page austin.jpg
			//console.log("Austin");
		}
		else if (city=="Sydney"||city=="SYD"){
			$("body").attr("class", "sydney");//   - "Sydney" or "SYD" make the background of the page sydney.jpg
			//console.log("Sydney");
		}
		else{
			$("body").attr("class","invalid")//
		}
	}



});