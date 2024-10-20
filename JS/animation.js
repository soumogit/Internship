document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
  
    // IntersectionObserver to trigger animation when cards come into and out of view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const card = entry.target;
  
        if (entry.isIntersecting) {
          // When the card enters the viewport, apply the appear animation
          card.classList.add('animate-appear');
          card.classList.remove('animate-disappear');
        } else {
          // When the card leaves the viewport, apply the disappear animation
          card.classList.remove('animate-appear');
          card.classList.add('animate-disappear');
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the card is visible
    });
  
    // Observe each card
    cards.forEach(card => {
      observer.observe(card);
    });
  });
  