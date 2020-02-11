


$(function () {
    
    let header = $("#header"),
        welcomeH = $("#welcome").innerHeight(),
        scrollOffset = 0;
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
    
        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        if(scrollOffset >= welcomeH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
    
});

