window.dataLayer = window.dataLayer || [];

document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("pricing.html")) {
        window.dataLayer.push({
            event: "pricing_view"
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const cta = document.getElementById("cta-main");

    if (cta) {
        cta.addEventListener("click", function () {
            window.dataLayer.push({
                event: "cta_click"
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    if (form) {
        form.addEventListener("submit", function () {
            window.dataLayer.push({
                event: "form_submit"
            });
        });
    }
});

let scrollFired = false;

window.addEventListener("scroll", function () {
    if (scrollFired) return;

    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    const scrollPercent = (scrollTop + windowHeight) / docHeight;

    if (scrollPercent >= 0.75) {
        window.dataLayer.push({
            event: "scroll_75"
        });

        scrollFired = true;
    }
});