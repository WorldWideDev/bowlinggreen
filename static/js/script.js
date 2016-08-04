$(document).ready(function(){
     $('#logo-container').click(function(){
        $('html,body').animate({scrollTop: $('#welcome').offset().top - $('#welcome').height()}, 'slow');
        return false
    })
    $('.scroll2section1').click(function(){
        $('html,body').animate({scrollTop: $('#section1').offset().top - $('.scroll2section1').height()}, 'slow');
        return false
    })
    $('.scroll2section2').click(function(){
        $('html,body').animate({scrollTop: $('#section2').offset().top - $('.scroll2section2').height()}, 'slow');
        return false
    })
    $('.scroll2section3').click(function(){
        $('html,body').animate({scrollTop: $('#section3').offset().top - $('.scroll2section3').height()}, 'slow');
        return false
    })
     $('.scroll2section4').click(function(){
        $('html,body').animate({scrollTop: $('#section4').offset().top - $('.scroll2section4').height()}, 'slow');
        return false
    })
    $('.slider').slider({full_width: true});
    $('.modal1').hover(
        function(){
            console.log('hovering')
            $(this).append($('<p>1st Floor</p>'))
        }, function(){
            $(this).find('p:last').remove();
        }
    )
    
})