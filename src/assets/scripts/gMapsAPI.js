import { Loader } from "@googlemaps/js-api-loader";

if ($("#map").width()) {
  const loader = new Loader({
    apiKey: "AIzaSyDH6vqQLGTGXjMIF7KEDy1-ijODaKbDxyQ",
  });
  loader.load().then(() => {
    let map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.94700391527715, lng: 30.36313817538211 },
      zoom: 12,
      styles: [
        {
          featureType: "all",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified",
            },
            {
              hue: "#0083ff",
            },
            {
              lightness: "-25",
            },
            {
              saturation: "60",
            },
            {
              gamma: "1.00",
            },
            {
              invert_lightness: true,
            },
          ],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#073a6c",
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              color: "#073a6c",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              color: "#05315d",
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#396b9d",
            },
            {
              lightness: "2",
            },
            {
              gamma: "1.00",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#4d77a1",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "all",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
        {
          featureType: "transit.line",
          elementType: "labels",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#0a437c",
            },
            {
              gamma: "1.15",
            },
          ],
        },
      ],
    });

    const addMarker = (coordinates) => {
      let marker = new google.maps.Marker({
        position: coordinates,
        map: map,
        icon: "assets/images/icons/pin.svg",
      });
    };

    // Каменноостровский пр., 73–75, оф. 9
    addMarker({ lat: 59.97585905027141, lng: 30.304834817801797 });
    // ул. Чайковского, 50
    addMarker({ lat: 59.94700391527715, lng: 30.36313817538211 });
  });
}
