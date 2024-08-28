document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navButtons = document.getElementById('nav-buttons');

    menuToggle.addEventListener('click', function() {
        navButtons.classList.toggle('show'); // Toggle the 'show' class to display/hide the menu
    });

    window.addEventListener('click', function(event) {
        // Check if the clicked target is not the menu toggle button or its descendants
        if (!event.target.matches('.menu-toggle') && !event.target.closest('#menu-toggle')) {
            if (navButtons.classList.contains('show')) {
                navButtons.classList.remove('show'); // Remove the 'show' class to hide the menu
            }
        }
    });
});
document.querySelector('#button1').style.color = 'rgb(216, 134, 76)';

function colorChange(){
        document.querySelector('#button1').style.color = '';
        document.querySelector('#button2').style.color = '';
        document.querySelector('#button3').style.color = '';
}
document.querySelector('#button1').addEventListener('click', ()=> {
    alert('Home Page');
    // colorChange()
    // document.querySelector('#button1').style.color = 'rgb(216, 134, 76))';
})
document.querySelector('#button2').addEventListener('click', ()=> {
    // colorChange();
    // document.querySelector('#button2').style.color = 'rgb(216, 134, 76))';
    alert('Shop All');
})
document.querySelector('#button3').addEventListener('click', ()=> {
    // colorChange();
    // document.querySelector('#button3').style.color = 'rgb(216, 134, 76))';
    alert('About the Page');
})
document.querySelector('#button4').addEventListener('click', ()=> {
    alert('Contact Us');
    // colorChange();
    // document.querySelector('#button4').style.color = 'rgb(216, 134, 76))';
})
document.querySelector('#button5').addEventListener('click', ()=> {
    alert('Shop More Items')
})
document.querySelector('a').addEventListener('click', ()=> {
    alert('Explore various collections')
})
document.querySelector('.fa-search').addEventListener('click', ()=> {
    alert('Search for Products')
})
document.querySelector('.fa-shopping-cart').addEventListener('click', ()=> {
    alert('View your cart')
})
