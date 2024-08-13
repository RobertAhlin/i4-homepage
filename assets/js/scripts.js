// Get all modals
var modals = document.querySelectorAll(".modal");

// Get all links that open a modal
var readMoreLinks = document.querySelectorAll(".read-more-link");

// Get all <span> elements that close the modals
var closeButtons = document.querySelectorAll(".close");

// Function to open the modal
readMoreLinks.forEach(link => {
    link.onclick = function(event) {
        event.preventDefault();
        var modalId = link.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
    }
});

// Function to close the modal
closeButtons.forEach(button => {
    button.onclick = function() {
        var modal = this.closest(".modal");
        modal.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}
