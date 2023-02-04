const formFields = document.querySelectorAll("[required]");

formFields.forEach((field) => {
    field.addEventListener("blur", () => verificaCampo(field));
    field.addEventListener("invalid", evento => evento.preventDefault());
});

const errorTypes = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "tooShort"
];

const mens = {
    firstName: {
        valueMissing: "First Name cannot be empty",
        tooShort: "First name needs to have more than 2 letter"
    },

    lastName: {
        valueMissing: "Last Name cannot be empty",
        tooShort: "Last name needs to have more than 2 letter"
    },

    email: {
        valueMissing: "Email cannot be empty",
        typeMismatch: "Looks like this is not a valid email."
    },

    password: {
        valueMissing: "Password cannot be empty",
        patternMismatch: "Password must be between 6 and 10 characters, at least and one upper case letter, one lower case letter, and one numeric digit."
    }
};

function verificaCampo(field) {
    let message = "";

    errorTypes.forEach((error) => {
        if(field.validity[error]) {
            message = mens[field.name][error];

            console.log(message)
        }
    });

    const errorMessage = field.parentNode.querySelector(".input-msg-error")
    const inputValidity = field.checkValidity();

    if(!inputValidity) {
        errorMessage.textContent = message;
    
    } else {
        errorMessage.textContent = "";
    }
}
