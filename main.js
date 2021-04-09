
const body = document.getElementsByTagName('body')[0];
console.log(body);
body.addEventListener('touchstart', function(event) {
    alert('touchstart');
    }, false);
body.addEventListener('touchend', function(event) {
    alert('touchend');
    }, false);
body.addEventListener('click', function(event) {
    alert('click');
    }, false);