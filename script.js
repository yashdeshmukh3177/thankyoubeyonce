document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("popupButton");
    const grammyPopup = document.getElementById("grammyPopup");
    const ripPopup = document.getElementById("ripPopup");

    // Show Grammy popup when button is clicked
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        grammyPopup.style.display = "block";
        ripPopup.style.display = "none";
    });

    // Show RIP popup when clicking anywhere else
    document.addEventListener("click", (event) => {
        if (event.target !== button) {
            ripPopup.style.display = "block";
            grammyPopup.style.display = "none";
        }
    });

    // Hide popups when clicking outside of them
    [grammyPopup, ripPopup].forEach((popup) => {
        popup.addEventListener("click", (event) => {
            event.stopPropagation();
        });
    });

    document.addEventListener("click", () => {
        grammyPopup.style.display = "none";
        ripPopup.style.display = "none";
    });
});
