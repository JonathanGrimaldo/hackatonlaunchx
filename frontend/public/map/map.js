const URL_SITE  = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?';
const URI_TOKEN = 'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

const setLatMX      = 23.765237;
const setLongMX     = -102.128906;
const setZoomInit   = 6;

var map = L.map('map').setView([setLatMX, setLongMX], setZoomInit);

var tiles = L.tileLayer(URL_SITE+URI_TOKEN, {
    maxZoom: 17,
    minZoom:3,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);



var greenIcon = L.icon({
    iconUrl: 'http://127.0.0.1:5500/frontend/public/map/icons/marker-blue.png',
    shadowUrl: 'http://127.0.0.1:5500/frontend/public/map/icons/marker-blue.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var redIcon = L.icon({
    iconUrl: 'http://127.0.0.1:5500/frontend/public/map/icons/marker-blue.png',
    shadowUrl: 'http://127.0.0.1:5500/frontend/public/map/icons/marker-blue.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([23.765237, -102.128906], {icon: greenIcon}).addTo(map);
L.marker([27.765237, -102.128906], {icon: redIcon}).addTo(map);

let buttons = `
<div class="row text-center">
    <div class="col-md-6">
        <button class="btn btn-primary btn-sm">Donar</button>
    </div>
    <div class="col-md-6">
        <button class="btn btn-warning btn-sm">Proximos eventos</button>
    </div>
</div>
`;

let mapLocations = [
    /* { lat:'23.765237', long:'-462.480469', title:'Fundación Yepez A.C ', description:'Es una organización sin fines de lucro, dedicada a la preservación del equilibrio ecológico y a la protección de las tortugas marinas desde 1967', picture:'https://www.anipedia.net/imagenes/pez-payaso.jpg', category:'1'},
    { lat:'22.165237', long:'-462.480469', title:'México Azul ', description:'México Azul te ofrece una oportunidad para hacer el bien y construir un México mejor a través del cuidado de nuestra principal fuente de vida', picture:'https://mundodebuceo.edmundolozada.com/wp-content/uploads/2021/03/Buceo-en-azul.jpg', category:'1'},
    { lat:'20.165237', long:'-462.480469', title:'MAMHMAR ', description:'La Asociación Mexicana de Hábitats para la Interacción y Protección de Mamíferos Marinos, A.C., (AMHMAR)', picture:'', category:'1'} */
    { lat:'21.181851', long:'-86.827698', title:'MAMHMAR ', description:'La Asociación Mexicana de Hábitats para la Interacción y Protección de Mamíferos Marinos, A.C., (AMHMAR)<br><br>'+buttons, picture:'', category:'1'}
];


mapLocations.forEach(location => {
    if(location.picture){
        let marker = L.marker([location.lat, location.long], {alt: 'kyev'}).addTo(map).bindPopup(`<b>${location.title}</b><br><img src="${location.picture}" style="height:200px; width:100%;"><br>${location.description}`);
    }else{
        let marker = L.marker([location.lat, location.long], {alt: 'kyev'}).addTo(map).bindPopup(`<b>${location.title}</b><br>${location.description}`);
    }
});

