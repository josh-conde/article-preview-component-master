let btn = document.getElementById('share-btn');
let popup = document.getElementById('share-content');

btn.addEventListener('click', function() {
    popup.classList.toggle('active');
});