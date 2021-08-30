$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
$('#divBusca').one('click', function (e) {
    let teste = $("#divBusca").append("<input type='text' id='txtBusca' placeholder='Buscar...'/>");
    return teste;
});
