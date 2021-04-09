

const body = document.getElementsByTagName('body')[0];
//console.log(body);
body.addEventListener('touchstart', function(event) {
    document.getElementById('camera').setAttribute('gps-camera', `simulateLatitude:35.65261 ; simulateLongitude:139.79216;`);
    //alert('touchstart');
}, false);
body.addEventListener('touchend', function(event) {
    document.getElementById('camera').setAttribute('gps-camera', '');
    //alert('touchend');
}, false);

let simulatingCoords = false;
body.addEventListener('click', function(event) {
    simulatingCoords = !simulatingCoords;
    //const camera = document.getElementById('camera');
    //document.getElementById('camera').setAttribute('gps-camera', simulatingCoords ? `simulateLatitude:35.65261 ; simulateLongitude:139.79216;` : '');
    alert("hoge");
    alert(document.querySelector("a-camera").getAttribute('gps-camera').simulateLatitude);
}, false);
