'use strict';
let maxwidth = 752;

// Affichage du menu Burger avec la nav
$("#menuBurger").click(function(){    
    $("header nav").toggle(1000);
});

function responsive(){
    if($(window).width() > maxwidth)
    {
        $("header nav").css({
            "display": "flex",
            "flex-direction": "row"
        });
        $("header nav a").removeClass("navAMobile");
                
    }
    else{
        $("header nav").css("display", "block");
        $("header nav").hide();
        $("header nav a").addClass("navAMobile");
        

    }
}
responsive()
$(window).resize(function(){
    responsive()
})


// Affichage de l'accordéon
$("#accordeon h4").click(function(){    
    $("#accordeon h4 i").removeClass("fa-minus").addClass("fa-plus"); // On supprime tous les - et on met des +   
    $(this).children("i").toggleClass("fa-minus").toggleClass("fa-plus"); // On permute entre le - et le +
    $("#accordeon p").hide(); // On cache tous les paragraphes p
    $(this).siblings("p").toggle(); // On affiche le paragraphe sur lequel on a cliqué
       
})

// Sélecteur de type d'image
$("#navImage a[data-filter]").click(function(event){ // Evènement clic sur tous les a qui ont un data-filter
    event.preventDefault(); // On annule l'évènement clic de la balise a

    let blocImages = $("#blocImage").height(); // On stocke la hauteur du conteneur de toutes les images
    $("#blocImage").height(blocImages);

    let filter = $(this).data("filter"); // On récupère le data-filter de la balise a

    $(".all").hide().addClass("animationIcone"); // On cache toutes les images qui ont la classe "all"
    $("."+filter).show(); // On affiche les images du data-filter
})

// Changement de couleur du fond
$("#goutte").click(function(){
    $("#listeDeGouttes").toggle();

    $("#listeDeGouttes li").click(function(){
        let theme = $(this).data("theme")
        $("body").removeClass().toggleClass(theme);
    })
})