const rateLink = document.querySelector(".rate");
const popUp = document.querySelector(".rate_pop-up");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".close");
const submitbtn = document.querySelector(".submit");
const stars = popUp.querySelectorAll(".stars i");
const username = document.querySelector("#name");
const comment = document.querySelector("#comment");
const detailHeader = document.querySelector(".header");
const hh2 = detailHeader.querySelectorAll("h2");
const content = document.querySelectorAll(".content");
const reviewContainer = document.querySelectorAll(".reviews");
console.log(content);

let numStar;

console.log(submitbtn);
const popUpFnc = function (dv, ov, scroll) {
  popUp.style.display = dv;
  overlay.style.display = ov;
  document.body.style.overflow = scroll;
};

rateLink.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
  popUpFnc("block", "block", "hidden");
});

popUp.addEventListener("click", (e) => {
  if (e.target == closebtn) {
    console.log("close");
    popUpFnc("none", "none", "");
  }

  stars.forEach((star, index1) => {
    if (e.target == star) {
      console.log(index1);
      numStar = index1 + 1;
      stars.forEach((star, index2) => {
        index1 >= index2
          ? star.classList.add("active-star")
          : star.classList.remove("active-star");
      });
    }
  });

  if (e.target == submitbtn) {
    const regExpMatch = username.value.match(username.pattern) ? true : false;
    if (!stars[0].classList.contains("active-star")) {
      alert("Please make use of stars");
      return;
    }
    if (
      !username.value ||
      !comment.value ||
      regExpMatch == false ||
      comment.value.length < 4
    ) {
      alert(
        'Invalid Input\nInput fields must not be empty\n"Name" field must have only names and numbers. No special characters or space\n"Review" field must have at least 4 letters'
      );
      return;
    }
    localStorage.setItem(
      "users-review",
      JSON.stringify({
        username: username.value,
        stars: numStar,
        text: comment.value,
      })
    );
    popUpFnc("none", "none", "");
  }
});
console.log(rateLink);

detailHeader.addEventListener("click", (e) => {
  hh2.forEach((el, index) => {
    if (e.target == el) {
      el.classList.add("active_detail");
      content[index].classList.remove("inactive");
    } else {
      el.classList.remove("active_detail");
      content[index].classList.add("inactive");
    }
  });
});
// console.log(localStorage.getItem("users-review")));
