const searchIcon = document.getElementById('search-icon');
const searchBar = document.getElementById('search-bar');
const logo = document.getElementById('logo');

searchIcon.addEventListener('click', function() {
  if (window.innerWidth <= 567) { 
    searchBar.style.width = "100%";
    logo.style.display = "none";
    searchBar.style.backgroundColor = "#ffffff";
    searchBar.style.display = "block";
    searchBar.focus();
  }
});

// Handle clicking outside the search bar to collapse and restore the logo
document.addEventListener('click', function(e) {
  if (window.innerWidth <= 579) { 
    if (e.target !== searchIcon && e.target !== searchBar) {
      logo.style.display = "block";
      // searchBar.style.display = "block";
      searchBar.style.width = "10px";
      searchBar.style.backgroundColor = "transparent";
      // searchIcon.style.display = "block";
    }
  }  
});
