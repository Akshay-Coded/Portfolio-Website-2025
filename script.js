$(document).ready(function() {
    // Smooth scrolling for nav links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 56
            }, 800);
        }
    });

    // Change navbar color on scroll
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });

    // Form submission
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For this example, we'll just log the form data
        console.log('Form submitted!');
        console.log('Name:', $('#name').val());
        console.log('Email:', $('#email').val());
        console.log('Message:', $('#message').val());
        
        // Clear the form
        $('#contact-form')[0].reset();
        
        // Show a success message (you can replace this with a more user-friendly notification)
        alert('Thank you for your message. I\'ll get back to you soon!');
    });

    // Scroll animation
    function animateOnScroll() {
        $('.animate-on-scroll').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
        
            if (bottom_of_window > bottom_of_object) {
                $(this).addClass('show');
                $(this).find('.fade-in-up, .scale-in, .slide-in-left, .slide-in-right').css('animation-play-state', 'running');
            }
        });
    }

    // Run animation on page load
    animateOnScroll();

    // Run animation on scroll
    $(window).scroll(function() {
        animateOnScroll();
    });

    // Pause animations initially
    $('.fade-in-up, .scale-in, .slide-in-left, .slide-in-right').css('animation-play-state', 'paused');

    // Add data-text attribute for spooky text effect
   
});

