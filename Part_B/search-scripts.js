document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    function handleSearch() {
        const query = searchInput.value.trim();
        if (query === 'פרופסור סנייפ') {
            window.location.href = 'lecturer.html'; // הכתובת לדף של פרופסור סנייפ
        } else if (query === 'ריפוי בכשפים ושיקויים רפואיים') {
            window.location.href = 'course.html'; // הכתובת לדף הקורס
        } else {
            alert('.לא קיים מרצה/קורס בשם זה במערכת. אנא נסה שנית');
        }
    }
});
