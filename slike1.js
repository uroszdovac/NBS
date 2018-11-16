var slikeSelect = document.querySelectorAll('#slikeSelect option');
var sadrzaj = document.querySelector('#sadrzaj');



slikeSelect.forEach(function(option){
    option.addEventListener('click', function() {
        sadrzaj.setAttribute('id', 'sadrzaj1')
    })
})

