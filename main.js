//Set map

function initialize() {
  let mapOptions = {
    //Zoom of map of start
    zoom: 10,
    //Initial center cordinates on start(NewYork)
    center: new google.maps.LatLng(40.7128, -74.006),
    //Type of map (ROADMAP, SATELLITE, hybrid, terrain)
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    //Minium zoom of map
    minZoom: 2,
  };

  //Create a new map instance using provided options
  let map = new google.maps.Map(document.getElementById("map"), mapOptions);

  //Create an info windows to display location info
  let infoWindows = new google.maps.InfoWindow();
  //Creare a marker for example: Argentina, Buenos Aires
  let marker = new google.maps.Marker({
    position: new google.maps.LatLng(34.61315, 58.37723),
    map: map,
    title: "Argentina, Buenos Aires",
  });

  //Add click event listener for marker
  marker.addDomListener("click", function () {
    infoWindow.setContent(marker.title);
    infoWindows.open(map, marker);
  });

  //Adjust map center when the windows is resized
  google.maps.event.addDomListener(window, "resize", function () {
    map.setCenter(mapOptions.center);
  });
}

//Initialize the map when windows loading finished
google.maps.event.addDomListener(window, "load", initialize);
