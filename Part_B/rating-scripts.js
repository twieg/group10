document.addEventListener('DOMContentLoaded', function() {
    /*דירוג כוכבים */
    let selectedRating = 0;
    const stars = document.querySelectorAll('.rating-input img');
    stars.forEach((star, index) => {
        star.addEventListener('mouseover', function() {
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('hover');
            }
        });
        star.addEventListener('mouseout', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });
        star.addEventListener('click', function() {
            stars.forEach(s => s.classList.remove('active'));
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add('active');
            }
            selectedRating = index + 1;
            console.log(`Selected rating: ${selectedRating}`);
        });
    });

    /*הוספת תגובה חדשה */
    const newCommentForm = document.getElementById("new-comment-form");

    newCommentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const author = document.querySelector('input[name="author"]').value.trim();
        const comment = document.querySelector('textarea[name="comment"]').value.trim();

        if (!author || !comment || selectedRating === 0) {
            displayError("אנא מלאו את כל השדות הנדרשים ובחרו דירוג.");
            return;
        }

        const newComment = document.createElement("li");
        newComment.classList.add("comment");
        newComment.innerHTML = `
            <div class="comment-header">
                <span class="comment-author">${author}</span>
                <span class="comment-date">${new Date().toLocaleString()}</span>
                <span class="comment-rating">
                    ${'<img src="images/full-star.png">'.repeat(selectedRating)}
                    ${'<img src="images/empty-star.png">'.repeat(5 - selectedRating)}
                </span>
            </div>
            <p>${comment}</p>
        `;

        document.getElementById("comment-list").appendChild(newComment);

        newCommentForm.reset();
        stars.forEach(s => s.classList.remove('active'));
        selectedRating = 0;
    });
});

const displayError = (message) => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = message;
    msg.classList.add('error');
    setTimeout(() => {
        msg.innerHTML = '';
        msg.classList.remove('error');
    }, 5000);
};
