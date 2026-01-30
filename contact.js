const form = document.querySelector("#contact-form");
const userinputname = document.querySelector("#userinput-name");
const userinputphone = document.querySelector("#userinput-phone");

const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");


form.addEventListener("submit", (event) => {
    event.preventDefault();

    let regrexname = /^(?=.*[A-Za-z])[A-Za-z ]+$/;
    let regrexphone = /^[0-9]{10}$/;

    let valid = true;

    if (!regrexname.test(userinputname.value.trim())) {
        nameError.textContent = "Enter a valid name";
        valid = false;
    } else {
        nameError.textContent = "";
    }
    
    if (!regrexphone.test(userinputphone.value.trim())) {
        phoneError.textContent = "Enter a valid 10-digit phone number";
        valid = false;
    } else {
        phoneError.textContent = "";
    }
    
    if (valid) {
    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    setTimeout(() => {
      form.innerHTML = `
        <p id="success-message" style="font-weight: bold;font-size: 18px;">
          ✅ Form submitted successfully
        </p>
      `;
    }, 2000);
  }
});

