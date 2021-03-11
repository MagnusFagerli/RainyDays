const contactForm = document.querySelector(".container-form");
const contactName = document.querySelector("#fname");
const fullNameError = document.querySelector("#fullNameError");
const contactSubject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const contactEmail = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const contactButton = document.querySelector(".submitbtn");

function validateForm(event) {
    event.preventDefault();

    if (checkLength(contactName.value, 5) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(subject.value, 10) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    console.log("test");
}

function checkLength(value, length) {
    if (value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEX.test(email);
    return patternMatches;
}

contactForm.addEventListener("submit", validateForm);

function displayError(message = "Unknown error") {
    return `<div class="error">${message}</div>`;
}