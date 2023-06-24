//Set map

function initialize() {
    let mapOptions ={
        //Zoom of map of start 
        zoom:10%;
        //Initial center cordinates on start(NewYork)
        center:new google.maps.LatLng(40.7128, -74.0060),
        //TYpe of map (ROADMAP, SATELLITE, hybrid, terrain)
        mapTypeID: google.maps.MapTypeId.ROADMAP,
        //Minium zoom of map
        minZoom: 2
    };

    //Create a new map instance using provided options
    let map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Create an info windows to display location info
    let infoWindows = new google.maps.InfoWindow();
    //Creare a marker for example: Iran, Zanjan
    let = new google.maps.Marker({
        //Cordinates for Iran, Zanjan
        position: new google.maps.LatLng(36.6769, 48.4963),
        //Attach the marer
        map: map,
        //Tooltip on hover
        title:"Iran, Zanjan"
    });
}

//Initialize the map when windows loading finished
google.maps.event.addDomListener(window, 'load',initialize);