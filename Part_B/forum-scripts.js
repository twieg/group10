document.addEventListener("DOMContentLoaded", () => {
    /*פונקציה להוספת שאלה חדשה בפורום*/
    const questionForm = document.getElementById("new-comment-form");
    const forumList = document.getElementById("forum-list");

    if (questionForm && forumList) {
        questionForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const author = document.getElementById("author").value.trim();
            const comment = document.getElementById("comment").value.trim();

            if (author && comment) {
                const questionDate = new Date().toLocaleString('he-IL', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                });

                const newQuestion = document.createElement("li");
                newQuestion.innerHTML = `
                    <div class="topic">
                        <div class="topic-header">
                            <a href="discussion.html">${comment}</a>
                            <div class="topic-stats">
                                <span>0 תגובות</span> | <span>0 צפיות</span>
                            </div>
                        </div>
                        <div class="topic-footer">
                            <span>נכתב על ידי ${author}</span> | <span>${questionDate}</span>
                        </div>
                    </div>
                `;

                forumList.appendChild(newQuestion);
                questionForm.reset();
            }
        });
    }

    /*פונקציה להוספת תגובה חדשה בדיון*/
    const commentForm = document.getElementById("new-comment-form");
    const commentList = document.getElementById("comment-list");

    if (commentForm && commentList) {
        commentForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const author = document.getElementById("author").value.trim();
            const comment = document.getElementById("comment").value.trim();

            if (author && comment) {
                const commentDate = new Date().toLocaleString('he-IL', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit'
                });

                const newComment = document.createElement("li");
                newComment.classList.add("comment");
                newComment.innerHTML = `
                    <div class="comment-header">
                        <span class="comment-author">${author}</span>
                        <span class="comment-date">${commentDate}</span>
                    </div>
                    <p class="comment-text">${comment}</p>
                `;

                commentList.appendChild(newComment);
                commentForm.reset();
            }
        });
    }
});
