# Sing up form
![sign-up-form](https://user-images.githubusercontent.com/97140968/216836029-a0375b3f-f027-41d5-aff0-0b7804180dab.png)
<p align = "center"> Visit the <a href="https://sing-up-form-ctd.vercel.app/">Webpage</a>. </p>

## 📑 Overview
This Sign-up form was developed based on a challenge from the webpage [frontendmentor.io](https://www.frontendmentor.io/home). 

### 🎯 The challenge
Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty
  - The email address or password is not formatted correctly

## 🛠️ Tools
- HTML
- CSS
- JavaScript

## 💡 What I learned
- Using the mobile-first concept of development I could improve my knowledge about media-queries
- Concepts and use of Flexbox properties
- Use CSS pseudo-classes: `:hover`, `:focus`
- Use CSS pseudo-element: `::placeholder`
- Developing validations in the input fields using JavaScript
- Add and remove **HTML .classes** using JavaScript
```JavaScript 
 if(!inputValidity) {
        errorMessage.textContent = message;
        inputError.classList.add("input-box-error")
    } else {
        errorMessage.textContent = "";
        inputError.classList.remove("input-box-error")
    }
```
---
### 🏅 Acknowledgments
- Pedro Marins and Henrique de Andrade challenged me to build and publish this project. 
- Tutors and colleagues from the mentorship "Coquiste sua vaga" - class 23.
