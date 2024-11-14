// Get elements
const popupButton = document.getElementById("popupButton");
const grammyPopup = document.getElementById("grammyPopup");
const ripPopup = document.getElementById("ripPopup");

// Show Grammy Popup on Button Click
popupButton.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click from propagating to document
    grammyPopup.style.display = "block";
    ripPopup.style.display = "none"; // Hide P Diddy if visible
});

// Show P Diddy Image on Outside Click
document.addEventListener("click", (e) => {
    if (e.target !== popupButton) {
        ripPopup.style.display = "block";
        grammyPopup.style.display = "none"; // Hide Grammy popup if visible
    }
});

// Close popups when clicking outside them
grammyPopup.addEventListener("click", (e) => {
    grammyPopup.style.display = "none";
});

ripPopup.addEventListener("click", (e) => {
    ripPopup.style.display = "none";
});
