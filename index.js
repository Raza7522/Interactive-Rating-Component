const btns = document.querySelectorAll('.ratings .btn');
const btnSubmit = document.querySelector('.btn-submit');
const ratingSelected = document.querySelector('.rating-selected');
const mainCard = document.querySelector('.main-card');
const thankYouCard = document.querySelector('.thank-you-card');


btns.forEach((btn, i) => {
    btn.onclick = function () {
        const currentRating = i + 1;
        ratingSelected.innerText = currentRating;
    }
});

btnSubmit.addEventListener('click', submitRating);

function submitRating() {
    thankYouCard.classList.add('after');
    mainCard.style.display = 'none';
}