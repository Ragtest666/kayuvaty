let map;
async function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      
      center: { lat: 20.708069, lng: -105.278262 },
      mapTypeId: "terrain",
    });
    // Define the LatLng coordinates for the polygon's path.
    const KayuvatyCoords = [
      { lat: 20.705791, lng: -105.279112 },
      {lat: 20.707148, lng: -105.277226 },
      { lat: 20.707983, lng: -105.278258 },
      { lat: 20.709680, lng: -105.277270 },
      { lat: 20.710117, lng: -105.278453 },
      { lat: 20.710031, lng: -105.278689 },
      { lat: 20.709362, lng: -105.278447 },
      { lat: 20.709148, lng: -105.279505 },
      { lat: 20.708094, lng: -105.279001 },
      { lat: 20.707683, lng: -105.279183 },
      { lat: 20.707241, lng: -105.278883 },
      { lat: 20.706770, lng: -105.279612 },
      { lat: 20.705791, lng: -105.279112 },
    ];
    // Construct the polygon.
    const bermudaTriangle = new google.maps.Polygon({
      paths: KayuvatyCoords,
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    });
  
    bermudaTriangle.setMap(map);
  }
  
  window.initMap = initMap;