"use strict";

const btn = document.querySelector(".btn");
const inputs = document.querySelectorAll(".input-type");
const errorIMGs = document.querySelectorAll(".input-image");
const errorMSGs = document.querySelectorAll(".error-MSG");
const emailInput = document.getElementById("email");

btn.addEventListener("click", function (event) {
  event.preventDefault();

  let allValid = true;

  inputs.forEach((input, index) => {
    if (input.value.trim() === "") {
      errorMSGs[index].classList.remove("hidden");
      errorIMGs[index].style.display = "block";
      input.style.border = "1px solid hsl(0, 100%, 74%)";
      input.placeholder = "";
      allValid = false;
    } else {
      errorMSGs[index].classList.add("hidden");
      errorIMGs[index].style.display = "none";
      input.style.border = "";
    }
  });

  const emailValue = emailInput.value.trim();
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(emailValue)) {
    const emailIndex = Array.from(inputs).indexOf(emailInput);
    errorMSGs[emailIndex].classList.remove("hidden");
    errorIMGs[emailIndex].style.display = "block";
    emailInput.style.border = "1px solid hsl(0, 100%, 74%)";
    emailInput.classList.add("invalid");
    emailInput.placeholder = "email@example/com";
    allValid = false;
  } else {
    emailInput.classList.remove("invalid");
  }

  if (allValid) {
    console.log("Form is valid. Proceeding with form submission.");
  }
});
