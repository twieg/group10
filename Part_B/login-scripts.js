document.addEventListener('DOMContentLoaded', function() {
    var googleLogin = document.getElementById('google-login');
    var facebookLogin = document.getElementById('facebook-login');
    var googleSignup = document.getElementById('google-signup');
    var facebookSignup = document.getElementById('facebook-signup');

    if (googleLogin) {
        googleLogin.addEventListener('click', function() {
            window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
        });
    }

    if (facebookLogin) {
        facebookLogin.addEventListener('click', function() {
            window.location.href = 'https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email,public_profile';
        });
    }

    if (googleSignup) {
        googleSignup.addEventListener('click', function() {
            window.location.href = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=YOUR_GOOGLE_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email%20profile';
        });
    }

    if (facebookSignup) {
        facebookSignup.addEventListener('click', function() {
            window.location.href = 'https://www.facebook.com/v10.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&response_type=code&scope=email,public_profile';
        });
    }
});
