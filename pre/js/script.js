document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a.btn, .clickable-image, .logo, .nav-links a").forEach(element => {
        element.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (href && (href.includes("privacy.html") || href.includes("terms.html") || href.includes("index.html"))) return;
            e.preventDefault();
            window.location.href = "https://google.com";
        });
    });
});
