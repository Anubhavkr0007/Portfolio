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

const enquiryTrigger = document.querySelector(".enquiry-trigger");
const contactModal = document.getElementById("contactModal");
const modalClose = document.querySelector(".modal-close");
const modalBackdrop = document.querySelector(".contact-modal-backdrop");
const contactForm = document.getElementById("contactForm");
const contactFormStatus = document.getElementById("contactFormStatus");


if (enquiryTrigger && contactModal) {
    const openModal = () => {
        contactModal.classList.add("is-open");
        contactModal.setAttribute("aria-hidden", "false");
    };

    const closeModal = () => {
        contactModal.classList.remove("is-open");
        contactModal.setAttribute("aria-hidden", "true");
    };

    enquiryTrigger.addEventListener("click", openModal);

    if (modalClose) {
        modalClose.addEventListener("click", closeModal);
    }

    if (modalBackdrop) {
        modalBackdrop.addEventListener("click", closeModal);
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && contactModal.classList.contains("is-open")) {
            closeModal();
        }
    });
}
if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();

        if (!contactForm.reportValidity()) {
            return;
        }

        const formData = new FormData(contactForm);
        const name = String(formData.get("name") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const message = String(formData.get("message") || "").trim();
        const subject = `Portfolio enquiry from ${name}`;
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const mailtoUrl = `mailto:anubhavkumar2607@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoUrl;

        if (contactFormStatus) {
            contactFormStatus.textContent = "Your email app is opening.";
        }
    });
}
