// Get all the cards
const cards = document.querySelectorAll('.card');

// Loop through each card and add a click event listener
cards.forEach(card => {
  card.addEventListener('click', () => {
    // Get the ID of the clicked card
    const cardId = card.getAttribute('id');
    
    // Use an if-else statement to direct the user to a different page depending on which card they click
    if (cardId === 'card1') {
      window.location.href = 'course1.html';
    } else if (cardId === 'card2') {
      window.location.href = 'course2.html';
    } else if (cardId === 'card3') {
      window.location.href = 'course3.html';
    } else if (cardId === 'card4') {
      window.location.href = 'course4.html';
    } else if (cardId === 'card5') {
      window.location.href = 'course5.html';
    } else if (cardId === 'card6') {
      window.location.href = 'course6.html';
    }
    
    
  });
});