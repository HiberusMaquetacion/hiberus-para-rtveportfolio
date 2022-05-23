$(function(event){
    let actual = window.location+'';
    //Se realiza la división de la URL
    let split = actual.split("/");
    //Se obtiene el ultimo valor de la URL
    let id = split[split.length-1];
    id = id.substr(1,length[id]);
    
    event.preventDefault();
    $('section.gallery[id!="'+id+'"]').addClass('hidden');
    $('.filter-work div ul li a[href="#'+id+'"]').addClass('active');
  

    $('ul.filter-sections li a').click(function(event) {
        event.preventDefault();
        $('section.gallery').removeClass('hidden');
        $('.filter-work div ul li a').removeClass('active');
        
        var textoFiltro = $(this).data('ref');
        if (textoFiltro != 'todos') {
           $('section.gallery[id!="'+textoFiltro+'"]').addClass('hidden');           
        }
        $('.filter-work div ul li a[href="#'+textoFiltro+'"]').addClass('active');
    });
});
