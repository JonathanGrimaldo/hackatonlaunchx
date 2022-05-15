const URL_SITE  = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?';
const URI_TOKEN = 'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

const setLatMX      = 23.765237;
const setLongMX     = -462.480469;
const setZoomInit   = 6;

var map = L.map('map').setView([setLatMX, setLongMX], setZoomInit);

var tiles = L.tileLayer(URL_SITE+URI_TOKEN, {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

let mapLocations = [
    { lat:'23.765237', long:'-462.480469', title:'Fundación Yepez A.C ', description:'Es una organización sin fines de lucro, dedicada a la preservación del equilibrio ecológico y a la protección de las tortugas marinas desde 1967', picture:'https://www.anipedia.net/imagenes/pez-payaso.jpg', category:'1'},
    { lat:'22.165237', long:'-462.480469', title:'México Azul ', description:'México Azul te ofrece una oportunidad para hacer el bien y construir un México mejor a través del cuidado de nuestra principal fuente de vida', picture:'https://mundodebuceo.edmundolozada.com/wp-content/uploads/2021/03/Buceo-en-azul.jpg', category:'1'},
    { lat:'20.165237', long:'-462.480469', title:'MAMHMAR ', description:'La Asociación Mexicana de Hábitats para la Interacción y Protección de Mamíferos Marinos, A.C., (AMHMAR)', picture:'', category:'1'}
];


mapLocations.forEach(location => {
    if(location.picture){
        let marker = L.marker([location.lat, location.long], {alt: 'kyev'}).addTo(map).bindPopup(`<b>${location.title}</b><br><img src="${location.picture}" style="height:200px; width:100%;"><br>${location.description}`);
    }else{
        let marker = L.marker([location.lat, location.long], {alt: 'kyev'}).addTo(map).bindPopup(`<b>${location.title}</b><br>${location.description}`);
    }
});

