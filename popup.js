// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const likeButton = document.getElementById("likeButton");

    // Add click event listener to the Like button
    likeButton.addEventListener("click", function() {
        // Toggle the 'liked' class on click
        likeButton.classList.toggle("liked");
    });
});

// Function to show course link popup
function showCourseLink() {
    document.getElementById("popup").style.display = "block"; // Show the popup
    document.getElementById("overlay").style.display = "block"; // Show the overlay
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none"; // Hide the popup
    document.getElementById("overlay").style.display = "none"; // Hide the overlay
}

// Function to copy the link to clipboard
function copyToClipboard() {
    const courseLink = document.getElementById("courseLink").innerText; // Get the link text
    navigator.clipboard.writeText(courseLink) // Copy to clipboard
        .then(() => {
            alert("Link copied to clipboard!"); // Confirmation message
        })
        .catch(err => {
            console.error("Failed to copy: ", err); // Error handling
        });
}
