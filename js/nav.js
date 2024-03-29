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
const VISITOR_COUNT_KEY = "visitor-count";

function getVisitorCount() {
  let count = localStorage.getItem(VISITOR_COUNT_KEY);
  if (!count) {
    count = 0;
  }
  return parseInt(count, 10);
}

function updateVisitorCount() {
  const countElement = document.getElementById("visitor-count");
  const countElementMobile = document.getElementById("visitor-count-mobile");
  const count = getVisitorCount() + 1;
  countElement.textContent = count;
  countElementMobile.textContent = count;
  localStorage.setItem(VISITOR_COUNT_KEY, count.toString());
}

// Update visitor count initially and on page load
updateVisitorCount();
window.addEventListener("load", updateVisitorCount);

//*************** NAVIGATION ***************//
let defaultPage = "html/default.html";
let contentFile;

window.addEventListener("DOMContentLoaded", (event) => {
  // Desktop View Nav Bar
  document.querySelectorAll(".menu-options ul li a").forEach((el, index) => {
    el.addEventListener("click", function (e) {
      if (index >= 10 && index <= 14) {
        return;
      }
      event.preventDefault();
      contentFile = "html/" + e.target.id + ".html";
      fetch(contentFile)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          document.getElementById("body").innerHTML = data;
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
          fetch(defaultPage)
            .then((response) => response.text())
            .then((data) => {
              document.getElementById("body").innerHTML = data;
            })
            .catch((error) => {
              console.error("Error fetching default page:", error);
            });
        });
    });
  });

  // Mobile View Nav Bar
  document.querySelectorAll(".nav-dropdown li a").forEach((el, index) => {
    el.addEventListener("click", function (e) {
      if (index >= 9 && index <= 13) {
        return;
      }
      event.preventDefault();
      contentFile =
        "html/" + e.target.id.slice(0, e.target.id.length - 2) + ".html";
        console.log(contentFile);
        
      fetch(contentFile)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.text();
        })
        .then((data) => {
          document.getElementById("body").innerHTML = data;
        })
        .catch((error) => {
          console.error("Error fetching content:", error);
          fetch(defaultPage)
            .then((response) => response.text())
            .then((data) => {
              document.getElementById("body").innerHTML = data;
            })
            .catch((error) => {
              console.error("Error fetching default page:", error);
            });
        });
    });
  });
});
