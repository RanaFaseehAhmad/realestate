const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {

    event.preventDefault();

    // Show an alert message
    alert('Form Submitted Successfully!');
});



document.querySelector('.btn-hero').addEventListener('click', function () {
    document.querySelector('.CardSection').scrollIntoView({
        behavior: 'smooth'
    });
});





const hamburger = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    

});