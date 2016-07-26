$(document).ready(function(){
     $('#logo-container').click(function(){
        $('html,body').animate({scrollTop: $('#top').offset().top}, 'slow');
        return false
    })
    $('#scroll2section1').click(function(){
        $('html,body').animate({scrollTop: $('#section1').offset().top}, 'slow');
        return false
    })
    $('#scroll2section2').click(function(){
        $('html,body').animate({scrollTop: $('#section2').offset().top}, 'slow');
        return false
    })
    $('#scroll2section3').click(function(){
        $('html,body').animate({scrollTop: $('#section3').offset().top}, 'slow');
        return false
    })
     $('#scroll2section4').click(function(){
        $('html,body').animate({scrollTop: $('#section4').offset().top}, 'slow');
        return false
    })
})