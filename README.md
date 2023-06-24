# Calculator

This is a simple Google Maps web application built with HTML, CSS, and JavaScript. It allows users to add a marker to the map, which displays an info window when clicked. This feature provides additional information about a specific location on the map. <br>
![Calculator Screenshot](/img/Maps.png)

## Features

- When the map loads, a marker is placed on the map at a predefined location, in this case, "Argentina, Zanjan.Buenos Aires
The marker is represented by an icon and appears as a visual indicator on the map.
- When a user clicks on the marker, an info window pops up, displaying the location name, in this case, "Argentina, Buenos Aires."
- The info window provides additional details or context about the location.
- The info window is styled and positioned to be visually appealing and user-friendly.
- The info window remains open until the user clicks outside of it or clicks on the marker again.

## Demo

You can try out Google Maps by visiting the [live demo](https://amazingooglemaps.netlify.app/).

## Getting Started

To run the calculator locally, follow these steps:

1. Clone the repository: `git clonehttps://github.com/Malibu54/Google-Maps.git`
2. Open the project folder.
3. Open the `index.html` file in a web browser.

## Usage

// Create a marker for a specific location <br>
const marker = new google.maps.Marker({
    position: new google.maps.LatLng(36.6769, 48.4963),
    map: map,
    title: "Iran, Zanjan"
});

// Add click event listener to the marker<br>
marker.addListener("click", function() {
    infoWindow.setContent(marker.title);
    infoWindow.open(map, marker);
});




## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

