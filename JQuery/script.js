$(document).ready(function(){
    $("p#num").click(function () {
        $(this).hide();
    });
});

$(document).ready(function(){
    $("button#clkhre").click(function() {
        $("#first").hide();
    });
});

$(document).ready(function() {
    $("button#dblclk").dblclick(function() {
        $(".test").hide();
    });
});

// $(document).ready(function() {
//     $("button").click(function() {
//         $(this).hide();
//     });
// });

$(document).ready(function() {
    $("input").focus(function() {
        $(this).css("background-color", "#cccccc")
    });
    $("input").blur(function() {
        $(this).css("background-color", "#ffffff");
    });
});

$(document).ready(function() {
    $("button#btn1").click(function() {
        $("p#num1").toggle();
    });
});
 
$(document).ready(function() {
    $("button#hide").click(function() {
        $("div#visible h2").hide();
    });
    $("button#show").click(function() {
        $("div#visible h2").show();
    })
});

//Same For fadeIn() And fadeOut()
$(document).ready(function() {
    $("button.fade-in-out").click(function() {
        $("div.one").fadeToggle();
        $("div.two").fadeToggle("slow");
        $("div.three").fadeToggle(2000);
    });
});

//Same For slideUp() And slideDown()
$(document).ready(function() {
    $("div.container h1").click(function() {
        $("div.container h3#panel").slideToggle("slow");
    });
});

$(document).ready(function() {
    $("button#btn").click(function() {
        $("div.container div div#anim1").animate({
            //height : 'toggle'
            left : '+=50px',
            opacity : '0.4',
            width : '+=50px',
            height : '+=50px'
        });
    });
});


$(document).ready(function() {
    $("button#anim2").click(function() {
        var div = $("div#anim2");
        div.animate({left : '100px'}, "slow");
        div.animate({fontsize : '3em'}, "slow");
    });
});