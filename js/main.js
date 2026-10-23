"use strict";

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("animate-section");
        observer.observe(section);
    });

    document
        .querySelectorAll(".skill-card, .project-card, .timeline-card, .certificate-card")
        .forEach(card => {
            card.classList.add("animate-card");
            observer.observe(card);
        });
}
