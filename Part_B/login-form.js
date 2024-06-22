document.addEventListener("DOMContentLoaded", () => {
    const signInForm = document.querySelector(".form");

    signInForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value.trim();
        const password = document.querySelector('input[name="password"]').value.trim();

        if (!isValidEmail(email)) {
            displayError("כתובת דואר אלקטרוני לא תקינה, הכנס כתובת אחרת");
            return;
        }

        if (!isValidPassword(password)) {
            displayError("סיסמא צריכה להיות בעלת לפחות 8 תווים, כוללת אות גדולה ומספר");
            return;
        }

        /*הוצאת המשתמש מהדאטה המאוחסן*/
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

        const user = registeredUsers.find(user => user.email === email && user.password === password);

        if (user) {
            localStorage.setItem('signedInUser', JSON.stringify(user));
            window.location.href = "findCoach.html";
        } else {
            displayError("דואר אלקטרוני או סיסמא לא קיימים במערכת");
        }
    });
});

// Function to validate email
const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Function to validate password
const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
};

// Function to display error message
const displayError = (message) => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = message;
    msg.classList.add('error');
    setTimeout(() => {
        msg.innerHTML = '';
        msg.classList.remove('error');
    }, 5000);
};
