// BACK TO TOP BUTTON
window.onscroll = function () {
    const btn = document.getElementById("topBtn");
    if (btn) {
      btn.style.display =
        document.body.scrollTop > 200 || document.documentElement.scrollTop > 200
          ? "block"
          : "none";
    }
  };
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // CONTACT FORM MESSAGE
  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Message sent to BioFusion HQ. We'll reach out soon!");
        form.reset();
      });
    }
  });
  