var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  

  d3.csv('/static/Harden_3YrAvg.csv',function(response){
      var heatArray =[];
      console.log(response[0]);

      for (var i=0; i < response.length; i++){
        var lon = +response[i].lon;
        var lat = +response[i].lat;
        console.log(heatArray);

        if (lon && lat){
        heatArray.push([lon,lat]);

      }
      L.circle(heatArray[i], {
        color: "red",
        fillColor: "red",
        radius: 50000,
        fillOpacity: (.05*response[i].PlusMinus_3YrAvg)
    }).bindPopup("<h1>"+response[i].Opp_Team+"</h1> <hr>Plus Minus Rating:"+response[i].PlusMinus_3YrAvg+"</h3>").addTo(myMap);
    }





  })

//   // Create an initial map object
// // Set the longitude, latitude, and the starting zoom level
// var myMap = L.map("map").setView([45.52, -122.67], 13);

// // Add a tile layer (the background map image) to our map
// // Use the addTo method to add objects to our map
// L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//   maxZoom: 18,
//   id: "mapbox.streets",
//   accessToken: API_KEY
// }).addTo(myMap);

// // Create a new marker
// L.marker([45.52, -122.67]).addTo(myMap);

// // Create a circle and pass in some initial options
// L.circle([45.52, -122.69], {
//   color: "green",
//   fillColor: "green",
//   fillOpacity: 0.75,
//   radius: 500
// }).addTo(myMap);

// // Create a Polygon and pass in some initial options
// L.polygon([
//   [45.54, -122.68],
//   [45.55, -122.68],
//   [45.55, -122.66]
// ], {
//   color: "yellow",
//   fillColor: "yellow",
//   fillOpacity: 0.75
// }).addTo(myMap);

// // Coordinates for each point to be used in the polyline
// var line = [
//   [45.51, -122.68],
//   [45.50, -122.60],
//   [45.48, -122.70],
//   [45.54, -122.75]
// ];

// // Create a polyline using the line coordinates and pass in some initial options
// L.polyline(line, {
//   color: "red"
// }).addTo(myMap);

// // Create a rectangle and pass in some initial options
// L.rectangle([
//   [45.55, -122.64],
//   [45.54, -122.61]
// ], {
//   color: "black",
//   weight: 3,
//   stroke: true
// }).addTo(myMap);