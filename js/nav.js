
//*************** RESPONSIVE NAV BAR ***************//

(function ($) {
  // Begin jQuery
  $(function () {
    // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();
      // Close one dropdown when selecting another
      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $("html").click(function () {
      $(".nav-dropdown").hide();
    });
    // Toggle open and close nav styles on click
    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });
    // Hamburger to X toggle
    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  }); // end DOM ready
})(jQuery); // end jQuery


//*************** VISITOR COUNT ***************//
const VISITOR_COUNT_KEY = 'visitor-count';

function getVisitorCount() {
  let count = localStorage.getItem(VISITOR_COUNT_KEY);
  if (!count) {
    count = 0;
  }
  return parseInt(count, 10);
}

function updateVisitorCount() {
  const countElement = document.getElementById('visitor-count');
  const countElementMobile = document.getElementById('visitor-count-mobile');
  const count = getVisitorCount() + 1;
  countElement.textContent = count;
  countElementMobile.textContent = count;
  localStorage.setItem(VISITOR_COUNT_KEY, count.toString());
}

// Update visitor count initially and on page load
updateVisitorCount();
window.addEventListener('load', updateVisitorCount);



// const id = document.querySelectorAll(".nav-dropdown").forEach((el) => {
//   el.addEventListener("click", (e) => {
//     console.log(e.target);
//     return e.target.getAttribute("data-id");
//   });
// });

// export default id;
