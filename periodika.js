


var periodikaSelect = document.querySelectorAll('.selectPeriodika option');
var kalendar = document.querySelector('.inner-wrap div#kalendar');
var prikazi = document.querySelector('#prikazi');
var sadrzaj = document.querySelector('#sadrzaj');


periodikaSelect.forEach(function (option) {
    option.addEventListener('click', function () {
        kalendar.setAttribute('id', 'kalendar1');
    })
})

prikazi.addEventListener('click', function () {
    sadrzaj.setAttribute('id', 'sadrzaj1')
})




