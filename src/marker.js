const mapbox = require("mapbox-gl");

const iconURLs = {
  hotels: "http://i.imgur.com/D9574Cu.png",
  restaurants: "http://i.imgur.com/cqR6pUI.png",
  activities: "http://i.imgur.com/WbMOfMl.png"
};

const buildMarker = function (type, coords) {

  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  if (type === "hotel") {
    markerDomEl.style.backgroundImage = `url(${iconURLs.hotels})`;
  }
  if (type === "activity") {
    markerDomEl.style.backgroundImage = `url(${iconURLs.activities})`;
  }
  if (type === "restaurant") {
    markerDomEl.style.backgroundImage = `url(${iconURLs.restaurants})`;
  }
  return new mapbox.Marker(markerDomEl).setLngLat(coords);
}


module.exports = buildMarker;



