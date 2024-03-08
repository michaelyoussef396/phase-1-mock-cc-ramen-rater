document.addEventListener("DOMContentLoaded", () => {
  const baseUrl = "http://localhost:3000/ramens";

  fetch(baseUrl)
    .then((response) => response.json())
    .then((ramens) => {
      ramens.forEach((ramen) => displayRamenImage(ramen));
      displayRamenDetails(ramens[0]);
    });

  document
    .querySelector("#new-ramen")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const newRamen = {
        name: this.name.value,
        restaurant: this.restaurant.value,
        image: this.image.value,
        rating: this.rating.value,
        comment: this["new-comment"].value,
      };
      displayRamenImage(newRamen);
    });

  document
    .querySelector("#edit-ramen")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const updatedRating = document.querySelector("#new-rating").value;
      const updatedComment = document.querySelector("#new-comment").value;
      updateRamenDetails(updatedRating, updatedComment);
    });

  function displayRamenImage(ramen) {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.dataset.id = ramen.id;
    img.addEventListener("click", () => displayRamenDetails(ramen));
    document.querySelector("#ramen-menu").appendChild(img);
  }

  function displayRamenDetails(ramen) {
    document.querySelector("#ramen-detail img").src = ramen.image;
    document.querySelector("#ramen-detail img").alt = ramen.name;
    document.querySelector("#ramen-detail .name").textContent = ramen.name;
    document.querySelector("#ramen-detail .restaurant").textContent =
      ramen.restaurant;
    document.querySelector("#rating-display").textContent = ramen.rating;
    document.querySelector("#comment-display").textContent = ramen.comment;
    document.querySelector("#ramen-detail").dataset.id = ramen.id;
  }

  function updateRamenDetails(rating, comment) {
    document.querySelector("#rating-display").textContent = rating;
    document.querySelector("#comment-display").textContent = comment;
  }
});
