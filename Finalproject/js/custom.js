// function to load header and footer page


// $(document).ready(function() {
//     $('#header').load('./header.html');
//     $('#footer').load('./footer.html');
//   });

// if (!$('#header').html()) {
//     $('#header').load('./header.html');
// }

// if (!$('#footer').html()) {
//     $('#footer').load('./footer.html');
// }

document.addEventListener("DOMContentLoaded", function() {
    var header = document.getElementById("header");
    var footer = document.getElementById("footer");

    if (!header.innerHTML.trim()) {
        var headerRequest = new XMLHttpRequest();
        headerRequest.open("GET", "./header.html", true);
        headerRequest.onload = function() {
            header.innerHTML = headerRequest.responseText;
        };
        headerRequest.send();
    }

    if (!footer.innerHTML.trim()) {
        var footerRequest = new XMLHttpRequest();
        footerRequest.open("GET", "./footer.html", true);
        footerRequest.onload = function() {
            footer.innerHTML = footerRequest.responseText;
        };
        footerRequest.send();
    }
});


// function for menu

function toggleMenu() {
  var ul = document.querySelector('ul');
  ul.style.display = (ul.style.display === 'flex') ? 'none' : 'flex';
}

// function toggleMenu() {
//     $('ul').toggle('flex');
// }

