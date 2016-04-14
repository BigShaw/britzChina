
$(document).ready(function(){


    $(function(){
        // Call carousel
        $('#myCarousel').carousel({
            interval: 5000,
            pause: "hover",
            wrap:true,
            keyboard:true
        })
    });



    // ==============================days horizontal scroll

    $('#right-button').click(function() {
        event.preventDefault();
        $('#days-container').animate({
            marginLeft: "-=280px"
        }, "fast");
    });

    $('#left-button').click(function() {
        event.preventDefault();
        $('#days-container').animate({
            marginLeft: "+=280px"
        }, "fast");
    });




    // ========================click to appear=======================

    $("#wechat-qrcode-btn").click(function(){
        $("#wechat-qrcode").fadeToggle( "fast", "linear" );
    });


    $(".fade-bg").click(function(){
        $(".quote-wrapper").fadeOut();
    });

    $(".quote-btn").click(function(){
        $(".quote-wrapper").fadeOut();
    });

    $(".quote-btn").click(function(){
        $(".quote-wrapper").fadeIn();
    });


    // ========================click to show video=======================


    $("#watch-video").click(function(){
        $("#watch-video").hide();
        $(".watch-video-wrapper").addClass('open');
        //alert("I am an alert box!");
        setTimeout(function(){ 
            $(".video-opened").fadeIn(500);
        }, 500);
    });

    $("#close-video").click(function(){
        $(".video-opened").fadeOut();
        setTimeout(function(){ 
            $(".watch-video-wrapper").removeClass('open');
        }, 300);
        setTimeout(function(){ 
            $("#watch-video").fadeIn();
        }, 500);

    });




    // ========================click to collapes the route details penal=======================




    $("#collapes-route-details").click(function(){
        $(".show-when-penal-collapes").show();
        $("article.paragraph-boxes, .btn-section").fadeOut(400);
        setTimeout(function(){ 
            $(".article-content-wrapper").addClass('collapes');
            $(".date-selector").fadeOut(400);
            $(".open-collapes-btn").show();//this one is for .open-cllapes-btn.alone
        }, 400);
        setTimeout(function(){ 
            $(".date-selector-container").addClass('open-collapes-btn-transform-from-date-selector');   
            $(".see-route-details").fadeIn(400);
            $("#collapes-route-details").fadeOut(400);
            $("#toggle-blur").removeClass('blur');
        }, 800);
    });

    $(".see-route-details").click(function(){
        $(".article-content-wrapper").removeClass('collapes');
        setTimeout(function(){ 

            $("article.paragraph-boxes, .btn-section").fadeIn(400);
            $(".show-when-penal-collapes").hide();
            $(".see-route-details").fadeOut(200);
        }, 400);
        setTimeout(function(){ 
            $(".date-selector").fadeIn(500);
            $(".date-selector-container").removeClass('open-collapes-btn-transform-from-date-selector');
            $("#collapes-route-details").fadeIn(400);
        }, 500);
    });


    //this one is for .open-cllapes-btn.alone
    $(".alone").click(function(){
        $("#toggle-blur").addClass('blur');
        $(".open-collapes-btn").removeClass('bounceInDonw'); 
        $(".open-collapes-btn").addClass('bounceOutUp'); 
        setTimeout(function(){ 
            $(".open-collapes-btn").hide();
            $(".article-content-wrapper").removeClass('collapes');
        }, 600);

        setTimeout(function(){ 
            $("article.paragraph-boxes, .btn-section").fadeIn(400);
            $(".show-when-penal-collapes").hide();
            $("#collapes-route-details").fadeIn(400);
            $(".open-collapes-btn").addClass('bounceInDonw'); 
            $(".open-collapes-btn").removeClass('bounceOutUp'); 
        }, 800);
    });





    //==============================================delay page loading for transition==================


    $('#to-route-home-page').click (function (e) {
        e.preventDefault(); //will stop the link href to call the blog page
        $(".camper-list-title p").fadeOut(200);
        $('.list-sub-title').css({'left': '27%','top': '0%','width': '260px','height': '260px','border': '8px solid white'});

        setTimeout(function () {
            window.location.href = "../route/route-home.html";
        }, 500);
    });

    $('#to-branch-location-page').click (function (e) {
        e.preventDefault(); //will stop the link href to call the blog page
        $(".camper-list-title p").fadeOut(200);
        $('.list-sub-title').css({'left': '27%','top': '0%','width': '260px','height': '260px','border': '8px solid white'});
        setTimeout(function () {
            window.location.href = "../route/branch-location.html";
        }, 500);
    });




    $('.article-title-on-list').each(function(){
        var theTitleLength = $(this).text().length;
        console.log(theTitleLength);
        if (theTitleLength >= 14) {
            $(this).css('font-size', '1.7rem');
        } else {
            $(this).css('font-size', '2rem');
        };
    });






    // ============================share-btn

    $("[data-toggle='toggle']").click(function() {
        var selector = $(this).data("target");
        $(selector).toggleClass('in');
        $(".share-btn").toggleClass('on');
    });










    //=================================float above the FOOTER


    $(document).scroll(function() {
        checkOffset();
    });


    function checkOffset() {
        var theHeight = $('#footer').offset().top - $('.bottom-right-floating').height() - 20;

        if($('.bottom-right-floating').offset().top + $('.bottom-right-floating').height() 
           >= theHeight){
            $('.bottom-right-floating').css('position', 'absolute');
            $('.bottom-right-floating').css({'top' : theHeight + 'px'});
        }
        if($(document).scrollTop() + window.innerHeight < $('#footer').offset().top){
            $('.bottom-right-floating').css('position', 'fixed'); // restore when you scroll up
            $('.bottom-right-floating').css('top', '');
        }
    }




    // =========================flexslider

    $(window).load(function() {
        // The slider being synced must be initialized first
        $('#carousel').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            itemWidth: 88,
            itemMargin: 20,
            asNavFor: '#slider'
        });

        $('#slider').flexslider({
            animation: "slide",
            controlNav: false,
            animationLoop: false,
            slideshow: false,
            sync: "#carousel"
        });
    });



    // ==============================scrollIt


    if( $(".main-body").hasClass("home-vertical-scroll") ){
        var scrollItTopOffset = 0;
    }

    else{
        var scrollItTopOffset = -160;
    };



    $(function(){
        $.scrollIt({
            upKey: 38,             // key code to navigate to the next section
            downKey: 40,           // key code to navigate to the previous section
            easing: 'linear',      // the easing function for animation
            scrollTime: 600,       // how long (in ms) the animation takes
            activeClass: 'active-day', // class given to the active nav element
            onPageChange: null,    // function(pageIndex) that is called when page is changed
            topOffset: scrollItTopOffset           // offste (in px) for fixed top navigation
        });
    });






    // =================================tabs


    $('#specificationsTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })


    $('#extrasTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })







    // ===============================scroll then appear=================================



    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 100) {
            $('.filter-bg').fadeIn();
            $('.breadcrumbs-bg').fadeIn();
        } else {
            $('.filter-bg').fadeOut();
            $('.breadcrumbs-bg').fadeOut();
        }

    });


    // ==============================activate video for IE
    document.createElement('video');


    var vid = document.getElementById("bgvid");
    var pauseButton = document.getElementById("vidpause");
    function vidFade() {
        vid.classList.add("stopfade");
    }
    vid.addEventListener('ended', function() {
        // only functional if "loop" is removed
        vid.pause();
        // to capture IE10
        vidFade();
    });
    pauseButton.addEventListener("click", function() {
        vid.classList.toggle("stopfade");
        if (vid.paused) {
            vid.play();
            pauseButton.innerHTML = "<i class='fa fa-pause'>" + "</i>";
        } else {
            vid.pause();
            pauseButton.innerHTML = "<i class='fa fa-play'>" + "</i>";
        }
    })



});
