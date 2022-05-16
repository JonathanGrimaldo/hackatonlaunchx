const URL_SITE  = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?';
const URI_TOKEN = 'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

const setLatMX      = 23.765237;
const setLongMX     = -100.480469;
const setZoomInit   = 6;

var map = L.map('map').setView([setLatMX, setLongMX], setZoomInit);

var tiles = L.tileLayer(URL_SITE+URI_TOKEN, {
    maxZoom: 18,
    minZoom: 2,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' + 'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);


var sanctuaryIcon = L.icon({
    iconUrl: 'http://127.0.0.1:5500/frontend/public/map/icon/fish-marker.png',
    iconSize:     [50, 50], // size of the icon
});

var organizationIcon = L.icon({
    iconUrl: 'http://127.0.0.1:5500/frontend/public/map/icon/institucional.png',
    iconSize:     [50, 50], // size of the icon
});


let buttons =`
<br><br>
<div class="row">
<div class="col-md-6 col-12 text-center">
    <button class="btn btn-primary btn-sm" ><i class="fas fa-hand-holding-usd"></i> Donar</button>
</div>
<div class="col-md-6 col-12 text-center">
    <button class="btn btn-warning btn-sm"><i class="fas fa-calendar-check"></i> Eventos</button>
</div>
</div>
`;

let mapLocations = [
    { lat:'20.1525825', long:'-96.7039931', title:'Fundación Yepez A.C', description:'Nuestra prioridad es la protección y conservación de las tortugas marinas que se encuentran en peligro de extinción, nuestro principal lugar de impacto es la zona norte de Veracruz en el Golfo de México'+buttons, picture:'http://www.tortugasfundacionyepez.com/uploads/5/2/3/9/52391727/whatsapp-image-2021-05-11-at-10-54-51-pm_1_orig.jpeg', category:'1'},
    { lat:'19.354528', long:'-99.167049', title:'México Azul', description:'Nos enfocamos en la conservación de los hábitats marinos, así como en la protección y cuidado de la megafauna marina, principalmente de una de las especies de escualo más desconocida y menos estudiada en el mundo: el tiburón mako.'+buttons, picture:'https://mexicoazul.org/wp-content/uploads/2020/06/i-kxznGdN-X3.jpg', category:'1'},
    { lat:'21.167099', long:'-86.8267605', title:'AMHMAR', description:'su objetivo principal es la protección y conservación de los Mamíferos Marinos bajo cuidado humano para promover la conservación de los océanos a través de la educación'+buttons, picture:'http://www.amhmar.org.mx/assets/images/mision/img-mision.jpg', category:'1'},
    { lat:'19.3207868', long:'-99.1285463', title:'PROMAN', description:'Organizamos y evaluamos el desarrollo de programas de prevención, control y combate de la contaminación del medio Ambiente Marino.'+buttons, picture:'https://digaohm.semar.gob.mx/PROMAM/imagenes_promam/logo_promam.jpg', category:'1'},

    { lat:'15.9397148', long:'-93.8321128', title:'Playa de Puerto Arista, Tonalá – Chiapas', description:'En esta zona se protegen las especies de tortuga golfina, verde, laúd y carey. A partir del mes de agosto y hasta noviembre, se lleva a cabo el Tortufest, un festival que se realiza cada año en Puerto Arista.'+buttons, picture:'https://turulos.files.wordpress.com/2012/10/tortufest-20121.jpg?w=768', category:'2'},
    { lat:'22.2485467', long:'-89.6589565', title:'Arrecife Alacranes', description:'es un área natural protegida en Yucatán, donde se reproducen y desarrollan especies de las que dependen miles de familias así como hábitat de otros animales marinos como tortugas y tiburones'+buttons, picture:'https://www.gob.mx/cms/uploads/image/file/520882/ALACRAN180.jpg', category:'2'},
    { lat:'21.4720414', long:'-86.7910471', title:'Isla Contoy – Quintana Roo', description:'Isla Contoy es considerada el sitio de anidación más importante de las aves marinas en todo el Caribe mexicano. Desde 1961 es un área protegida y en ella abundan las palmeras y la arena blanca. También es zona de anidación de las tortugas marinas.'+buttons, picture:'https://www.turismomexico.es/wp-content/uploads/2017/02/tortuga_contoy-1024x453.jpg', category:'2'},
    { lat:'23.4469028', long:'-110.2637853', title:'Tortugueros Las Playitas A.C', description:'Conservación Ambiental con Enfoque en Tortugas Marinas Todos Santos, Las Playitas y Agua Blanca, BCS, México'+buttons, picture:'http://www.todostortugueros.org/sitebuildercontent/sitebuilderpictures/.pond/HatchlingGreenhouse.jpg.w560h301.jpg', category:'2'},
];


mapLocations.forEach(location => {
    if(location.picture){

        if(location.category == 1){ //Organization

            let marker = L.marker([location.lat, location.long], {icon: organizationIcon}).addTo(map).bindPopup(`<b>${location.title}</b><br><img src="${location.picture}" style="height:200px; width:100%;"><br>${location.description}`);
        }
        else if(location.category == 2){ //Sanctuary
            let marker = L.marker([location.lat, location.long], {icon: sanctuaryIcon}).addTo(map).bindPopup(`<b>${location.title}</b><br><img src="${location.picture}" style="height:200px; width:100%;"><br>${location.description}`);
        }
        else if(location.category == 3){//Event

        }
    }else{
        if(location.category == 1){
            let marker = L.marker([location.lat, location.long], {icon: organizationIcon}).addTo(map).bindPopup(`<b>${location.title}</b><br>${location.description}`);
        }
        else if(location.category == 2){
            let marker = L.marker([location.lat, location.long], {icon: sanctuaryIcon}).addTo(map).bindPopup(`<b>${location.title}</b><br>${location.description}`);
        }
        else if(location.category == 3){

        }
    }
});

