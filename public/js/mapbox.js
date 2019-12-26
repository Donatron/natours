export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZG9uYXRyb24yMSIsImEiOiJjazQ5MGlheW0wMDJjM2ttb3p4dGV1b2Q5In0.LzMmFUHrmwQdFmOGhrkXEA';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/donatron21/ck490t7u000vq1cl53amm0wst',
    scrollZoom: false
    // center: [-118.113491, 34.111745],
    // zoom: 5,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(location => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(location.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30
    })
      .setLngLat(location.coordinates)
      .setHTML(`<p>Day ${location.day}: ${location.description}</p>`)
      .addTo(map);

    // Extend map bounds to include the current location
    bounds.extend(location.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
