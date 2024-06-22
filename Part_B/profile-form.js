document.addEventListener("DOMContentLoaded", () => {
    const profileForm = document.getElementById("profileForm");

    profileForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const email = document.querySelector('input[name="email"]').value.trim();
        const username = document.querySelector('input[name="username"]').value.trim();
        const firstName = document.querySelector('input[name="firstName"]').value.trim();
        const lastName = document.querySelector('input[name="lastName"]').value.trim();
        const major = document.querySelector('input[name="major"]').value.trim();
        const password = document.querySelector('input[name="password"]').value.trim();

        if (!isValidEmail(email)) {
            displayError("כתובת דואר אלקטרוני לא תקינה, הכנס כתובת אחרת");
            return;
        }
        if (!isValidName(username)) {
            displayError("שם משתמש צריך לכלול לפחות 2 אותיות ");
            return;
        }
        if (!isValidName(firstName)) {
            displayError("שם פרטי צריך לכלול לפחות 2 אותיות ");
            return;
        }
        if (!isValidName(lastName)) {
            displayError("שם משפחה צריך לכלול לפחות 2 אותיות ");
            return;
        }
        if (!isValidPassword(password)) {
            displayError("סיסמא צריכה להיות בעלת לפחות 8 תווים, כוללת אות גדולה ומספר");
            return;
        }

        const updatedUser = {
            email,
            username,
            firstName,
            lastName,
            major,
            password,
            profilePicture: document.querySelector('input[name="profilePicture"]').files[0] ? URL.createObjectURL(document.querySelector('input[name="profilePicture"]').files[0]) : null
        };

        /*שמירת עדכון */
        localStorage.setItem('signedInUser', JSON.stringify(updatedUser));

        alert("Profile updated successfully!");
        profileForm.reset();
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

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidName = (name) => {
    return /^[A-Za-zא-ת]{2,}$/.test(name);
};

const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
};
