
const searchCourses = () => {
  const searchValue = document.getElementById('course-search').value.toLowerCase();
  const courses = document.querySelectorAll('.card-container .card');
  
  courses.forEach(card => {
      let courseTitle = card.querySelector('h4').textContent.toLowerCase();
      if(courseTitle.indexOf(searchValue) != -1) {
          card.style.display = 'flex'; // Show matching course card
      } else {
          card.style.display = 'none'; // Hide non-matching course card
      }
  });
};

document.getElementById('course-search').addEventListener('keyup', searchCourses);
