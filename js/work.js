$(function(){
    let actual = window.location+'';
    //Se realiza la división de la URL
    let split = actual.split("/");
    //Se obtiene el ultimo valor de la URL
    let id = split[split.length-1];
    id = id.substr(1,length[id]);
    
    $('section.gallery[id!="'+id+'"]').addClass('hidden');
    
    $('ul.filter-sections li a').click(function() {
    var textoFiltro = $(this).text().toLowerCase();
    if(textoFiltro == 'noticias'){   
        document.getElementById("noticias").style.display = "";
        document.getElementById("deportes").style.display = "none";
        document.getElementById("television").style.display = "none";
        document.getElementById("radio").style.display = "none";
        document.getElementById("otros").style.display = "none";
    } else if (textoFiltro == 'deportes') {
        console.log('estoy en deportes');

        document.getElementById("noticias").style.display = "none";
        document.getElementById("deportes").style.display = "";
        document.getElementById("television").style.display = "none";
        document.getElementById("radio").style.display = "none";
        document.getElementById("otros").style.display = "none";

        document.getElementById("titulardeportes").style.display = "none";
        
    } else if (textoFiltro == 'radio') {
        console.log('estoy en radio');
        document.getElementById("noticias").style.display = "none";
        document.getElementById("deportes").style.display = "none";
        document.getElementById("television").style.display = "none";
        document.getElementById("radio").style.display = "";
        document.getElementById("otros").style.display = "none";
   
        document.getElementById("titularradio").style.display = "none";

    } else if (textoFiltro == 'otros') {
        console.log('estoy en otros');
        document.getElementById("noticias").style.display = "none";
        document.getElementById("deportes").style.display = "none";
        document.getElementById("television").style.display = "none";
        document.getElementById("radio").style.display = "none";
        document.getElementById("otros").style.display = "";

        document.getElementById("titularotros").style.display = "none";

    } else if (textoFiltro == 'televisión') {
        console.log('estoy en television');

        document.getElementById("noticias").style.display = "none";
        document.getElementById("deportes").style.display = "none";
        document.getElementById("television").style.display = "";
        document.getElementById("radio").style.display = "none";
        document.getElementById("otros").style.display = "none";

        document.getElementById("titulartele").style.display = "none";


    } else {
        document.getElementById("noticias").style.display = "";
        document.getElementById("deportes").style.display = "";
        document.getElementById("television").style.display = "";
        document.getElementById("radio").style.display = "";
        document.getElementById("otros").style.display = "";

        document.getElementById("titulartele").style.display = "";
        document.getElementById("titularotros").style.display = "";
        document.getElementById("titularradio").style.display = "";
        document.getElementById("titulardeportes").style.display = "";
 
    }
    return false;
    });
});
