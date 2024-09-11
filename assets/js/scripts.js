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
        var modalContent = modal.querySelector(".modal-content");
        modalContent.style.animation = 'slideDown 0.5s ease forwards';
        modal.classList.add("show");
    }
});

// Function to close the modal with slide-out effect
closeButtons.forEach(button => {
    button.onclick = function() {
        var modal = this.closest(".modal");
        var modalContent = modal.querySelector(".modal-content");
        modalContent.style.animation = 'slideLeft 0.5s ease forwards';
        
        // Use setTimeout to allow the slide-left animation to finish before hiding the modal
        setTimeout(() => {
            modal.classList.remove("show");
        }, 500); // Duration of the animation
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    modals.forEach(modal => {
        if (event.target == modal) {
            var modalContent = modal.querySelector(".modal-content");
            modalContent.style.animation = 'slideLeft 0.5s ease forwards';

            setTimeout(() => {
                modal.classList.remove("show");
            }, 500); // Duration of the animation
        }
    });
}