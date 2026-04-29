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
                event: "cta_click",
                variant: localStorage.getItem("ab_variant")
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signup-form");

    if (form) {
        form.addEventListener("submit", function () {
            alert("Dziękujemy za przesłanie zgłoszenia!")
            window.dataLayer.push({
                event: "form_submit",
                variant: localStorage.getItem("ab_variant")
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

document.addEventListener("DOMContentLoaded", function () {
    const ctaLink = document.getElementById("nav-pricing");

    if (!ctaLink) return;

    let variant = localStorage.getItem("ab_variant");

    if (!variant) {
        variant = Math.random() < 0.5 ? "A" : "B";
        localStorage.setItem("ab_variant", variant);
    }

    if (variant === "A") {
        ctaLink.textContent = "Dowiedz się więcej o żabach!";
    } else {
        ctaLink.textContent = "KLIKNIJ TUTAJ, aby pomóc żabom!";
        const button = document.getElementById("cta-main");
        if (button) {
            button.classList.add("variant-b");
        }
    }

    window.dataLayer.push({
        event: "ab_impression",
        variant: variant
    });
});