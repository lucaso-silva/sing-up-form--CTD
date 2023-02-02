const formCampos = document.querySelectorAll("[required]");

formCampos.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    //campo.addEventListener("invalid", evento => evento.preventDefault());

    console.log(campo.validity);
});

function verificaCampo(campo) {
    let mens = "";

    errorTypes.forEach(erro => {
        if(campo.validity[erro]) {
            mensage = mens[campo.name][erro];

            console.log(mensage)
        }
    })
}

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
    }

    // lastName: {
    //     valueMissing: "",
    //     tooShort: ""
    // },

    // email: {
    //     valueMissing: "",
    //     typeMismatch: ""
    // },

    // password: {
    //     patterMismatch: ""
    // }
};
