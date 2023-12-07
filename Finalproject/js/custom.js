// function to load header and footer page


$(document).ready(function() {
    $('#header').load('./header.html');
    $('#footer').load('./footer.html');
  });

// function for menu

function toggleMenu() {
  var ul = document.querySelector('ul');
  ul.style.display = (ul.style.display === 'flex') ? 'none' : 'flex';
}