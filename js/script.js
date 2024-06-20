const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".input");
const textAlerts = document.querySelectorAll(".text-alert");
const alerts = document.querySelectorAll("#alert");

document.addEventListener("DOMContentLoaded", () => {
    // Adiciona um ouvinte de evento 'input' para cada input
    inputs.forEach((input) => {
        input.addEventListener("input", () => {
            const textAlert = input.nextElementSibling.nextElementSibling; // Next element after img
            const alert = input.nextElementSibling; // Next element is img
            input.style.borderColor = ""; // Remove a cor da borda

            // Oculta as imagens e textos de alerta
            alert.style.display = "none";
            textAlert.style.display = "none";
        });
    });

    // Adiciona um ouvinte de evento 'submit' para o formulário
    form.addEventListener("submit", (event) => {
        let valid = true;

        // Validação dos inputs
        inputs.forEach((input, index) => {
            const textAlert = input.nextElementSibling.nextElementSibling; // Next element after img
            const alert = input.nextElementSibling; // Next element is img
            if (input.value.trim() === "") {
                alert.style.display = "block";
                textAlert.style.display = "block";
                input.style.borderColor = "var(--Red)";
                input.setAttribute("placeholder", ""); // Clear the placeholder
                valid = false;
                if(input.id === "email"){
                    input.setAttribute("placeholder", "email@example/com");
                    const emailInput = document.getElementById("email");
                    emailInput.classList.add("placeholder-red");
                }
            } else {
                alert.style.display = "none";
                textAlert.style.display = "none";
                // Optionally, restore the placeholder text if needed
                if (input.id === "fname") {
                    input.setAttribute("placeholder", "First Name");
                } else if (input.id === "lname") {
                    input.setAttribute("placeholder", "Last Name");
                } else if (input.id === "email") {
                    if (!input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                        alert.style.display = "block";
                        textAlert.style.display = "block";
                        input.style.borderColor = "var(--Red)";
                        input.setAttribute("placeholder", ""); // Clear the placeholder
                        valid = false;
                    }
                } else if (input.id === "password") {
                    input.setAttribute("placeholder", "Password");
                }
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });
});
