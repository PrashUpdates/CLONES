// PLAN DATA
const planData = {
  mobile: {
    price: "₹149",
    quality: "Fair",
    resolution: "480p",
    devices: "Smartphone, tablet",
    screens: "1",
    downloads: "1"
  },

  basic: {
    price: "₹199",
    quality: "Good",
    resolution: "720p (HD)",
    devices: "TV, computer, mobile phone, tablet",
    screens: "1",
    downloads: "1"
  },

  standard: {
    price: "₹499",
    quality: "Great",
    resolution: "1080p (Full HD)",
    devices: "TV, computer, mobile phone, tablet",
    screens: "2",
    downloads: "2"
  },

  premium: {
    price: "₹649",
    quality: "Best",
    resolution: "4K (Ultra HD) + HDR",
    devices: "TV, computer, mobile phone, tablet",
    screens: "4",
    downloads: "6"
  }
};

// SELECT CARDS
const cards = document.querySelectorAll(".cards");

// CARD CLICK
cards.forEach(card => {

  card.addEventListener("click", () => {

    // REMOVE ACTIVE CLASS
    cards.forEach(c => c.classList.remove("active"));

    // ADD ACTIVE CLASS
    card.classList.add("active");

    // GET SELECTED PLAN
    const plan = card.dataset.plan;
    const data = planData[plan];

    // UPDATE PLAN DETAILS
    document.getElementById("price-value").textContent = data.price;
    document.getElementById("quality-value").textContent = data.quality;
    document.getElementById("resolution-value").textContent = data.resolution;
    document.getElementById("devices-value").textContent = data.devices;
    document.getElementById("screens-value").textContent = data.screens;
    document.getElementById("download-value").textContent = data.downloads;

  });

});