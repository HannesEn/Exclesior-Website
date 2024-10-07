document.addEventListener("DOMContentLoaded", () => {
  // Initialize ScrollReveal
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "20px",
    duration: 1000,
    delay: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: true,
  });

  // Apply reveal effects to different elements
  sr.reveal(".logo-container", { distance: "50px", origin: "top" });
  sr.reveal(".mission-content h1", { delay: 300 });
  sr.reveal(".mission-quote", { delay: 500 });
  sr.reveal(".mission-image", { origin: "right", delay: 700 });
  sr.reveal("#contact", { delay: 300 });
  sr.reveal("footer", { delay: 300 });
});
