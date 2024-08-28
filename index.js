document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".dropbtn").addEventListener("click", function(e) {
        e.preventDefault();
        var dropdown = this.nextElementSibling;
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    });
});

