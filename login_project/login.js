const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

function dataValidation(){
    // skrypt dla akcji przycisku Submit w formularzu logowania
    loginButton.addEventListener("click", (e) => {
        e.preventDefault();
        const username = loginForm.username.value; // zmienna zawierająca nazwe użytkownika
        const password = loginForm.password.value; // zmienna zawierająca podane hasło

        
        // skrypt sprawdzający poprawność danych logowania
        if (username === "samsep" && password === "root_passwor") {
            alert("You have successfully logged in."); 
            location.reload();
        } else { // wyświetlenie błędu dla nie poprawnych danych logowania
            loginErrorMsg.style.opacity = 1;
        }
    })
}