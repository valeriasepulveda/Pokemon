window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};
//Función que contiene una matriz con las coordenadas en donde estará el pokemon
function staticLoadPlaces() {
   return [
       {
           name: 'Magnemite',
           location: {
               lat: 4.753636,
               lng: -74.096541,
           }
       },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;

       //Definición de atributos del modelo 3D - Magnemite
       let model = document.createElement('a-entity');
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
       model.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
       model.setAttribute('rotation', '0 180 0');
       model.setAttribute('animation-mixer', '');
       model.setAttribute('scale', '0.5 0.5 0.5');

       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(model);
   });
}