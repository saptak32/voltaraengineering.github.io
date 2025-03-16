document.addEventListener("DOMContentLoaded", function () {
    // Auto-sliding hero section
    let slides = document.querySelectorAll(".slide"); // Select all slide images
    let currentIndex = 0;

    function showNextSlide() {
        slides[currentIndex].classList.remove("active"); // Hide current slide
        currentIndex = (currentIndex + 1) % slides.length; // Move to next slide
        slides[currentIndex].classList.add("active"); // Show next slide
    }

    setInterval(showNextSlide, 3000); // Change slide every 3 seconds

    // Smooth scrolling for navigation links
    let navLinks = document.querySelectorAll("a[href^='#']");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor click behavior

            let targetId = this.getAttribute("href").substring(1);
            let targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust offset for better view
                    behavior: "smooth"
                });
            }
        });
    });
});
