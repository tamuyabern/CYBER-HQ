<<<<<<< HEAD
// marketplace.js
document.addEventListener("DOMContentLoaded", () => {

  const listingsContainer = document.getElementById("listings");

  function renderListing(item) {
    const div = document.createElement("div");
    div.className = "listing";

    const imageURL = item.image ? item.image : "";

    div.innerHTML = `
      <h3>${item.data.item}</h3>
      <p>${item.data.description}</p>
      <strong>Price: ${item.data.price}</strong>
      <em>Contact: ${item.data.contact}</em>
      ${imageURL ? `<img src="${imageURL}" alt="${item.data.item}">` : ""}
    `;

    listingsContainer.appendChild(div);
  }

  async function loadListings() {
    try {
      const res = await fetch("/.netlify/functions/listings");
      if (!res.ok) throw new Error("Failed to fetch listings");

      const data = await res.json();

      listingsContainer.innerHTML = ""; // clear old listings

      if (!data.length) {
        listingsContainer.innerHTML = "<p>No items posted yet.</p>";
        return;
      }

      data.forEach(renderListing);

    } catch (err) {
      console.error("Error loading listings:", err);
      listingsContainer.innerHTML = "<p>Unable to load listings at the moment.</p>";
    }
  }

  // Load listings on page load
  loadListings();

});
=======
// marketplace.js
document.addEventListener("DOMContentLoaded", () => {

  const listingsContainer = document.getElementById("listings");

  function renderListing(item) {
    const div = document.createElement("div");
    div.className = "listing";

    const imageURL = item.image ? item.image : "";

    div.innerHTML = `
      <h3>${item.data.item}</h3>
      <p>${item.data.description}</p>
      <strong>Price: ${item.data.price}</strong>
      <em>Contact: ${item.data.contact}</em>
      ${imageURL ? `<img src="${imageURL}" alt="${item.data.item}">` : ""}
    `;

    listingsContainer.appendChild(div);
  }

  async function loadListings() {
    try {
      const res = await fetch("/.netlify/functions/listings");
      if (!res.ok) throw new Error("Failed to fetch listings");

      const data = await res.json();

      listingsContainer.innerHTML = ""; // clear old listings

      if (!data.length) {
        listingsContainer.innerHTML = "<p>No items posted yet.</p>";
        return;
      }

      data.forEach(renderListing);

    } catch (err) {
      console.error("Error loading listings:", err);
      listingsContainer.innerHTML = "<p>Unable to load listings at the moment.</p>";
    }
  }

  // Load listings on page load
  loadListings();

});
>>>>>>> f52bf5085d384bb0110a3c36d8657fbed505b151
