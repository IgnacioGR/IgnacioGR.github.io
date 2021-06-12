document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      $("p, span").addClass("dark-primary");
      $(".colored-section").addClass("dark-primary-bck");
      $(".big-button, .scroll-up").addClass("dark-secondary-bck");
    } else {
      $("p, span").removeClass("dark-primary");
      $(".colored-section").removeClass("dark-primary-bck");
      $(".big-button, .scroll-up").removeClass("dark-secondary-bck");
    }
  });
});
