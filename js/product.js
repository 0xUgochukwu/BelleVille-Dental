"use strict";

function createArray(collection) {
  return new Array(...collection);
}
const menu =
  screen.width < 1000
    ? createArray(document.querySelectorAll(".nav-dropdown")).pop()
    : createArray(document.querySelectorAll(".menu-options")).pop();

menu.addEventListener("click", (e) => {
  if (e.target.matches("a")) {
    const html = `
  <section id="products_section">
  <h2 class="product_category">Products</h2>
  <div class="container">
    <div class="display_options">
      <div id="category" class="select-dropdown_options">
        <label>Category of Product:</label><br />
        <div class="select_wrapper">
          <input
            class="select-dropdown"
            type="text"
            readonly="true"
            data-target="active_page"
          />
          <i class="bi bi-caret-down-fill caret"></i>
        </div>
        <!-- prettier-ignore -->
        <ul class="options_list">
              <li
                class="option-1"
                tabindex="0"
                data-id="allProducts"
              >All Products
              </li>
              <li class="option-2" tabindex="0" data-id="CKT">Crest Kids Toothpaste
              </li>
              <li class="option-3" tabindex="0" data-id="OBP">Oral-B Products
              </li>
              <li class="option-4" tabindex="0" data-id="PC">Premium Crest</li>
              <li class="option-5" tabindex="0" data-id="PFP">Products for Proffessionals
              </li>
            </ul>
      </div>

      <div id="sort_query" class="select-dropdown_options">
        <label>Sort by:</label><br />
        <div class="select_wrapper">
          <input
            class="select-dropdown"
            type="text"
            readonly="true"
            data-target="active_page"
          />
          <i class="bi bi-caret-down-fill caret"></i>
        </div>
        <!-- prettier-ignore -->
        <ul class="options_list">
              <li class="option-1 active_page" data-id="AZ" tabindex="0">Name (A - Z)
              </li>
              <li class="option-2" data-id="ZA" tabindex="0">Name (Z - A)</li>
              <li class="option-3" data-id="HL" tabindex="0">Price (High to Low)
              </li>
              <li class="option-4" data-id="LH" tabindex="0">Price (Low to High)
              </li>
            </ul>
      </div>

      <div id="display_type">
        <label>Layout:</label><br />
        <div class="List">
          <i class="bi bi-list-task"></i>
        </div>
        <div class="Grid">
          <i class="bi bi-grid-fill"></i>
        </div>
      </div>
    </div>

    <div class="product_items_container"></div>
  </div>
</section>
`;
    document.getElementById("body").innerHTML = "";
    document.getElementById("body").insertAdjacentHTML("beforeend", html);
    let id = e.target.getAttribute("data-id");

    const header = document.querySelector(".product_category");
    const options = document.getElementsByClassName("select-dropdown_options");
    const option = createArray(options);

    const category = options[0];

    category.querySelector(`li[data-id=${id}]`).classList.add("active_page");

    let activeList = category.querySelector(".active_page");
    console.log(activeList);

    const sort = document.getElementById("sort_query");

    let activeSort = sort.querySelector(".active_page");
    console.log(activeSort);
    const dropdown_caret = document.getElementsByClassName("caret");
    const lists = document.getElementsByClassName("options_list");
    const productsContainer = document.querySelector(
      ".product_items_container"
    );

    const list = createArray(lists);
    const carets = createArray(dropdown_caret);

    const PFP = [
      {
        src: "./images/Proffessional_1.JPG",
        product_desc:
          "Crest+Oral-B iO Transformational Gum Health Electric Toothbrush System",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "55000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Proffessional_2.jpg",
        product_desc:
          "Crest + Oral-B iO Electric Toothbrush System - Professional Trial Unit",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "60000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Proffessional_3.png",
        product_desc:
          "Professional Exclusive Crest 3DWhitestrips Supreme with LED Light",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "25000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Proffessional_4.JPG",
        product_desc:
          "Professional Exclusive Crest Whitening Emulsions with LED Light",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "30000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
    ];

    const PC = [
      {
        src: "./images/Premium.JPG",
        product_desc:
          "Crest+Oral-B iO Transformational Gum Health Electric Toothbrush System",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "50000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Premium_2.JPG",
        product_desc:
          "Crest + Oral-B iO Electric Toothbrush System - Professional Trial Unit",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "9500",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Premium_3.jPG",
        product_desc:
          "Professional Exclusive Crest 3DWhitestrips Supreme with LED Light",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "30000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Premium_4.JPG",
        product_desc:
          "Professional Exclusive Crest Whitening Emulsions with LED Light",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "23000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
    ];

    const OBP = [
      {
        src: "./images/Oral_b_1.jpeg",
        product_desc:
          "Oral-B Vitality Pro 300 Floss Action Electric Toothbrush",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "17000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Oral_b_2.jpeg",
        product_desc: "Oral-B Water Flosser Advanced - Professional Trial Unit",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "15000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Oral_b_3.jpeg",
        product_desc: "Oral-B Kids 3+ Battery Toothbrush Disney Princess",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "12000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/Oral_b_4.jpeg",
        product_desc: "Oral-B Kids 3+ Battery Toothbrush Spiderman",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "12000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
    ];

    const CKT = [
      {
        src: "./images/crest_kids.jpeg",
        product_desc: "Crest Kids Enamel Cavity Protection Toothpaste 0.85oz",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "4000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/crest_kids_2.jpg",
        product_desc: "Crest Kids Sparkle Cavity Protection Toothpaste 0.85oz",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "5500",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/crest_kids_3.jpg",
        product_desc: "Crest Braces Care Cavity Defense Toothpaste 4.1oz",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "5000",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
      {
        src: "./images/crest_kids_4.jpg",
        product_desc: "Crest Kids Enamel Cavity Protection Toothpaste 4.1oz",
        average_stars: "0.0",
        number_of_reviews: "(0)",
        price: "3500",
        product_details:
          "Offering patients the opportunity to conveniently purchase Oral-B electric toothbrushes and other Crest® + Oral-B® home care products directly from your practice will improve their oral health while simultaneously increasing practice production",
        reviews: [
          {
            username: "jrp437",
            stars: 4,
            text: " 30 years working as a Licensed Periodontal Hygienist. Dental Hygienist. I have personally used electric toothbrushes since 1980.BUY this AMAZING iOS series. I promise if used correctly, this rush gives a clean like you went to the Dentaloffice fora professional job!",
          },
          {
            username: "Cqman",
            stars: 4,
            text: " I'm a dental hygienist and can attest this is the BEST electric TB. The timer is super helpful and my mouth has never felt as clean after use. It's super sleek too!",
          },
        ],
      },
    ];

    const allProducts = [...CKT, ...OBP, ...PC, ...PFP];

    const sorts = {
      AZ: "a.product_desc - b.product_desc",
      ZA: " b.product_desc -a.product_desc",
      LH: "a.price - b.price",
      HL: "b.price - a.price",
    };

    function sortPageProduct(arr, sort_query) {
      let sortArr;
      if (sort_query == "AZ" || sort_query == "ZA") {
        sortArr = eval(arr).sort((a, b) => {
          let fa = a.product_desc.toLowerCase(),
            fb = b.product_desc.toLowerCase();

          if (fa < fb) {
            return -1;
          }
          if (fa > fb) {
            return 1;
          }
          return 0;
        });
      }

      if (sort_query == "ZA") {
        sortArr.reverse();
      }
      sortArr = eval(arr).sort((a, b) => eval(sorts[sort_query]));
      pageProduct(sortArr);
    }

    function pageProduct(arr) {
      productsContainer.innerHTML = "";
      let html;
      arr.forEach((el) => {
        html = `<div class="product_item">
            <div>
              <img src= ${el.src} alt="" />
            </div>
            <div class="text">
              <a href="" class="product_desc"
                >${el.product_desc}</a
              >
              <div class="ratings">
                <div class="stars">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </div>
                <p class="average_stars">${el.average_stars}</p>
                <p class="number_of_reviews">${el.number_of_reviews}</p>
                </div>
                <p class="price"> &#8358 ${el.price}</p>
              <a href="">Rate this product</a>
            </div>
          </div>`;
        productsContainer.insertAdjacentHTML("beforeend", html);
      });
    }

    function renderPage() {
      header.textContent = activeList.innerHTML;

      sort.querySelector("input").value = activeSort.innerText;
      category.querySelector("input").value = activeList.innerText;
      option.forEach((el) => {
        if (
          el
            .querySelector("ul")
            .lastElementChild.classList.contains("active_page")
        ) {
          el.querySelector(
            "ul"
          ).lastElementChild.previousElementSibling.style.borderRadius =
            "inherit";
        } else {
          el.querySelector(
            "ul"
          ).lastElementChild.previousElementSibling.style.borderRadius = "";
        }
      });

      sortPageProduct(
        activeList.getAttribute("data-id"),
        activeSort.getAttribute("data-id")
      );
    }
    renderPage();

    list.forEach((el, index) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        console.log(e.target);
        el.querySelector(".active_page").classList.remove("active_page");
        e.target.classList.add("active_page");
        el.style.display = "";
        el.previousElementSibling
          .querySelector("i")
          .classList.remove("bi-caret-up-fill");
        el.previousElementSibling
          .querySelector("i")
          .classList.add("bi-caret-down-fill");
        index == 0 ? (activeList = e.target) : (activeSort = e.target);
        renderPage();
      });
    });

    carets.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.target.parentElement.nextElementSibling.style.display =
          e.target.parentElement.nextElementSibling.style.display == ""
            ? "block"
            : "";
        e.target.classList.toggle("bi-caret-down-fill");
        e.target.classList.toggle("bi-caret-up-fill");

        e.target.parentElement.firstElementChild.style.borderRadius =
          e.target.parentElement.nextElementSibling.style.display == "block"
            ? ".5rem .5rem 0 0"
            : "";
      });
    });

    document.querySelectorAll(".product_item").forEach((el, index) =>
      el.addEventListener("click", (e) => {
        const item = eval(activeList.getAttribute("data-id"))[index];
        if (e.target.matches("a")) {
          e.preventDefault();
        }

        const star = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };

        const count = function (obj) {
          obj.reviews.forEach((el) => {
            console.log(el);

            ++star[el["stars"]];
          });
        };
        console.log(count(item));
        console.log(item);

        console.log(star);

        for (const key in star) {
          let sum = 0;
          if (star[key] > 0) {
            sum += key * star[key];
            console.log(sum);
          }
          item["average_stars"] = Math.round(sum / item.reviews.length);
        }

        document.getElementById("body").innerHTML = "";
        const html = `<section id="product_overview">
  <div class="">
    <div class="product_items_overview">
      <div class="product_item-ov">
        <div>
          <img src="${item.src}" alt="" />
        </div>
        <div class="text-ov">
          <a class="product_desc-ov">${item.product_desc}</a>
          <div class="ratings">
            <div class="stars">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p class="average_stars">${item.average_stars || ""}</p>
            <p class="number_of_reviews">(${item.reviews.length})</p>
          </div>
          <p class="price">${item.price}</p>
          <a class="rate" href="">Rate this product</a>
        </div>
      </div>
    </div>

    <div id="overview">
      <div class="header">
        <h2 class="active_detail">Overview</h2>
        <h2>Review</h2>
      </div>
      <div class="content overview-content">
        <h2>Product Details</h2>
        <p class="details">${item.product_details}</p>
      </div>
      <div class="content review-content inactive">
        <h2><b>Ratings & Reviews</b></h2>
        <div class="rate-stats">
          <div class="rate-stats-ov">
            <div class="stat stat-5">
              <p>5</p>
              <i class="bi bi-star-fill"></i> <span></span>
              <p class="individuals">${star[5] || ""}</p>
            </div>
            <div class="stat stat-4">
              <p>4</p>
              <i class="bi bi-star-fill"></i> <span></span>
              <p class="individuals">${star[4] || ""}</p>
            </div>
            <div class="stat stat-3">
              <p>3</p>
              <i class="bi bi-star-fill"></i> <span></span>
              <p class="individuals">${star[3] || ""}</p>
            </div>
            <div class="stat stat-2">
              <p>2</p>
              <i class="bi bi-star-fill"></i> <span></span>
              <p class="individuals">${star[2] || ""}</p>
            </div>
            <div class="stat stat-1">
              <p>1</p>
              <i class="bi bi-star-fill"></i> <span></span>
              <p class="individuals">${star[1] || ""}</p>
            </div>
          </div>

          <div class="avg-rating">
            <p>Average Rating</p>
            <div class="stars-ov">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <p style="display: inline; margin-left: 1.5rem">
              ${item.average_stars || ""}
            </p>
          </div>
        </div>

        <div class="review-query">
          <p class="view">${item.reviews.length} Reviews</p>
        </div>

        <div class="reviews" data-count="${item.reviews.length}">
        </div>
      </div>
    </div>
  </div>
  <div class="rate_pop-up">
    <i class="bi bi-x-circle-fill close"></i>
    <div class="main-rate">
      <h3>Rate Product</h3>
      <div class="stars">
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
        <i class="bi bi-star-fill"></i>
      </div>
    </div>
    <div class="review">
      <div>
        <label for="name">Name (*)</label>
        <br />
        <input
          required
          maxlength="10"
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Z0-9]*$"
        />
      </div>
      <div>
        <label for="review">Review (*)</label>
        <br />
        <textarea
          name="review"
          id="comment"
          cols=""
          rows="3"
          placeholder="Enter your comment here..."
          wrap="hard"
          maxlength="400"
          required
        ></textarea>
      </div>
      <button type="submit" class="submit">Submit</button>
      <p>(*) Required Field</p>
    </div>
  </div>
</section>

        `;
        document.getElementById("body").insertAdjacentHTML("beforeend", html);

        item.reviews.forEach((el) => {
          let i = 0;
          const renhtml = `<div class="a-review">
            <div class="star-name">
              <div class="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <p class="name">${el.username} </p>
            </div>
            <p class="review-text"> ${el.text}</p>
          </div>`;
          document
            .querySelector(".reviews")
            .insertAdjacentHTML("beforeend", renhtml);
        });

        const starsFnc = function(){

        }

        for (const key in star) {
          if (star[key] > 0) {
            const percentage = () => {
              return `${(star[key] / item.reviews.length) * 100}%`;
            };
            const stat = document.querySelector(`.stat-${key}`);
            const statBfr = window.getComputedStyle(stat, "::before");

            stat.style.setProperty("--statWidth", percentage());
            console.log(statBfr.width);
          }
        }

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
            const regExpMatch = username.value.match(username.pattern)
              ? true
              : false;
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
            item.review.push({
              username: username.value,
              stars: numStar,
              text: comment.value,
            });

            // localStorage.setItem(
            //   "users-review",
            //   JSON.stringify({
            //     username: username.value,
            //     stars: numStar,
            //     text: comment.value,
            //   })
            // );
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
      })
    );
  }
});
