let onScreenPress = false;
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
body.addEventListener('click', function(event) {

    alert('ccc');
    }, false);