var slikeSelect = document.querySelectorAll('#slikeSelect option');
var kalendar = document.querySelector('#kalendar');
var kalendarAs = document.querySelectorAll('#kalendar a');
var sadrzaj = document.querySelector('#sadrzaj');



slikeSelect.forEach(function(option){
    option.addEventListener('click', function() {
        kalendar.setAttribute('id', 'kalendar1')
    })
})

kalendarAs.forEach(function(a){
    a.addEventListener('click', function(){
        sadrzaj.setAttribute('id', 'sadrzaj1')
    })
})






