document.addEventListener('DOMContentLoaded', function() {
    var links = document.getElementsByClassName('nav-link');
    var page = location.pathname.split('/').pop();
    if (!page) {
        page = 'index.html';
    }

    for (var i = 0; i < links.length; i++) {
        var href = links[i].getAttribute('href');
        if (href === page) {
            links[i].classList.add('active');
        } else {
            links[i].classList.remove('active');
        }
    }
});
