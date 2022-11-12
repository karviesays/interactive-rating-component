const mainContent = document.querySelector("main");
const ratings = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".submit-btn");
const thankYouModal = document.querySelector(".thank-you-modal");
const chosenRating = document.querySelector(".chosenRating");
const message = document.querySelector("#message");

ratings.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    chosenRating.innerHTML = e.target.id;
  });
});

submitBtn.addEventListener("click", function () {
  thankYouModal.classList.remove("hidden");
  mainContent.style.display = "none";
});
