if ($(".main.contacts").width()) {
  const contacts = $(".contacts");

  let mapBlock = $(contacts).find("#map");

  // function initMap() {
  //   map = new google.maps.Map(mapBlock, {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8,
  //   });
  // }

  console.log("contacts: ", contacts);
}
