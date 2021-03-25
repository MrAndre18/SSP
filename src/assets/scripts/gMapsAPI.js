console.log("api");

if ($("#map")) {
  let mapAPI = document.createElement("script"),
    initMap = document.createElement("script");
  
  // initMap.innerHTML = "function initMap() {" +
  //   "map = new google.maps.Map(document.getElementById('map'), {" +
  //   "center: { lat: -34.397, lng: 150.644 }," +
  //   "zoom: 8," +
  //   "});" +
  //   "}";
  
  mapAPI.src =
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDH6vqQLGTGXjMIF7KEDy1-ijODaKbDxyQ&callback=initMap";
  mapAPI.async = true;

  $("body").append(initMap);
  $("body").append(mapAPI);
}

// function initMap() {
//   map = new google.maps.Map($("#map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
