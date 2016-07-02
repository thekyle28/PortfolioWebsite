/**
 * Created by Kyle on 08/01/2016.
 */
function initialise(){
    hideSections();
    scrolling();
    cycleBrumHackImages();
    cycleAwardImages();
    cycleEducationImages();
    cyclerExperienceImages();
    var mainHeight = $("#main").css("height");
    $("#background").css( "height", mainHeight);
    initHeaderFunctionality();
}

function hideSections(){
    $("#educationSection").css("visibility","hidden");
    $("#educationSection").css("float","hidden");

}


function initHeaderFunctionality(){
    console.log(this.id)
    $(".menuSection").click(showData(this));
}

function showData(button){
    alert("success");
    console.log(button)

    var section = button.id;
    console.log(section);
    //Concatenate Section to the end of section then make it visible.
    $(section).css("visibility","visible");
}

function cycleAwardImages(){
    var $active = $('#cyclerAwards .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cyclerAwards img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
        $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
        $next.css('z-index',3).addClass('active');//make the next image the top one
    });}

function cycleBrumHackImages(){
    var $active = $('#cyclerBrumHack .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cyclerBrumHack img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
        $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
        $next.css('z-index',3).addClass('active');//make the next image the top one
    });
}

function cycleEducationImages(){
    var $active = $('#cyclerEducation .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cyclerEducation img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
        $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
        $next.css('z-index',3).addClass('active');//make the next image the top one
    });
}

function cyclerExperienceImages(){
    var $active = $('#cyclerExperience .active');
    var $next = ($active.next().length > 0) ? $active.next() : $('#cyclerEducation img:first');
    $next.css('z-index',2);//move the next image up the pile
    $active.fadeOut(1500,function(){//fade out the top image
        $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
        $next.css('z-index',3).addClass('active');//make the next image the top one
    });
}

$(document).ready(function(){
// run every 7s
    setInterval('cycleBrumHackImages()', 7000);
    setInterval('cycleAwardImages()', 10000);
    setInterval('cycleEducationImages()', 7000);
    setInterval('cyclerExperienceImages()',7000);
})

function scrolling(){
    $(window).scroll(function () {

        var vScroll = $(this).scrollTop();

        $("#profile").css({
            'transform': 'translate(0px, -' + vScroll / 5 + '%)'
        });



    });
}