class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
}

const validateForm = () => {
    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();
    const confirmPassword = document.querySelector('input[name="confirmPassword"]').value.trim();

    // Validate username
    if (!isValidUsername(username)) {
        displayError("שם משתמש צריך לכלול לפחות 2 אותיות");
        return null;
    }

    // Validate email
    if (!isValidEmail(email)) {
        displayError("כתובת דואר אלקטרוני לא תקינה, הכנס כתובת אחרת");
        return null;
    }

    // Validate password
    if (!isValidPassword(password)) {
        displayError("סיסמא צריכה להיות בעלת לפחות 8 תווים, כוללת אות גדולה ומספר");
        return null;
    }

    // Confirm password
    if (password !== confirmPassword) {
        displayError("הסיסמאות לא תואמות");
        return null;
    }

    return new User(username, email, password);
};

const displayError = (message) => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = message;
    msg.classList.add('error');
    setTimeout(() => {
        msg.innerHTML = '';
        msg.classList.remove('error');
    }, 5000);
};

const isValidUsername = (username) => {
    return /^[A-Za-zא-ת]{2,}$/.test(username);
};

const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    return passwordRegex.test(password);
};

const handleSubmit = (event) => {
    event.preventDefault();
    const user = validateForm();
    if (user) {
        console.log(user);

        /*Store the user data in local storage*/
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        registeredUsers.push(user);
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
        window.location.href = "login.html";
    }
};

document.getElementById("registrationForm").addEventListener("submit", handleSubmit);
