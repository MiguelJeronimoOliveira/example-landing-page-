$(document).ready(function() {
    $('#mobilebtn').on('click', function() {
        $('#mobileMenu').toggleClass('active');
        $('#mobilebtn').find('i').toggleClass('fa-x');
    });
});

ScrollReveal().reveal('#cta', {
    origin: 'left',
    duration: 1000,
    distance: '20%',
})

ScrollReveal().reveal('#maisInformacoes', {
    origin: 'left',
    duration: 1000,
    distance: '20%',
})

ScrollReveal().reveal('#mensagemDepoimentos', {
    origin: 'Right',
    duration: 1000,
    distance: '20%',
})
