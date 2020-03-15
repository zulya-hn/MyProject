$(function () {
    fixedHeaderByScroll();
    animateScroll();
    toggleBurgerListener();
    toggleAccordionListener();
    setNavActiveByScroll();
});

// Menu nav toggle (burger)
function toggleBurgerListener() {
    
    $('#nav_toggle').on('click', function (event) {
        event.preventDefault();
        
        $(this).toggleClass('active');
        $('#nav').toggleClass('active');
        
    });
}

//accordion
function toggleAccordionListener() {
    
    $('[data-collapse]').on('click', function (event) {
        event.preventDefault();
        
        let $this = $(this),
            blockId = $this.data('collapse');
        
        $this.toggleClass('active');
        
    });
}

// Smooth scroll
function animateScroll() {
    
    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();
        
        let $this = $(this),
            blockID = $(this).data('scroll'),
            blockOffset = $(blockID).offset().top - 30;
        
        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);
        
    });
}

function fixedHeaderByScroll() {
    let header = $('#header'),
        welcomeH = $('#welcome').innerHeight() - 30,
        scrollOffset = 0;
    
    // Fixed Header
    checkScroll(scrollOffset);
    
    $(window).on('scroll', function () {
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);
    });
    
    function checkScroll(scrollOffset) {
        if (scrollOffset >= welcomeH) {
            header.addClass('fixed');
        } else {
            header.removeClass('fixed');
        }
    }
}

function setNavActiveByScroll() {
    
    $(window).on('scroll', () => {
        let headerHeight = 49;
        let middleOfScreen = document.documentElement.clientWidth / 2;
        
        let currentSection = document
            .elementFromPoint(middleOfScreen, headerHeight)
            .closest('section[id]');
    
        if (currentSection) {
            let currentSectionName = $(currentSection).attr('id');
            
            $('.nav__link').removeClass('active');
            $(`[data-scroll="#${currentSectionName}"]`).addClass('active');
        }
    });
}