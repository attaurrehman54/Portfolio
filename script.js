document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that should fade in
    const faders = document.querySelectorAll('.fade-in');

    // Setup Intersection Observer options
    const appearOptions = {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" 
    };

    // Create the observer
    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once it appears
            }
        });
    }, appearOptions);

    // Apply the observer to all fading elements
    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});