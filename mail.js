const contactform = document.querySelector("#contact_form");
const submitBtn = document.querySelector("#submit_btn");
const nameInput = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const numero = document.querySelector("#numero")
const messageInput = document.querySelector("#message");

const publickey = "8Q_x3X3eQXYujDHcV";
const serviceID = "service_sziv7sp";
const templateID = "template_07av9h3";

// Load the EmailJS library dynamically
const emailjsScript = document.createElement('script');
emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
document.head.appendChild(emailjsScript);

emailjsScript.onload = function () {
  // Initialize the EmailJS library after it's loaded
  emailjs.init(publickey);

  contactform.addEventListener("submit", (e) => {
    e.preventDefault();
    submitBtn.innerText = "Envoi en cours...";
    const inputFields = {
      name: String(nameInput.value),
      subject: String(subject.value),
      email: String(email.value),
      numero:String(numero.value),
      message:String(messageInput.value)

    }
    console.log(nameInput.value,subject.value,email.value,messageInput.value,inputFields);
  
    emailjs.send(serviceID, templateID, inputFields)
      .then(() => {
        submitBtn.innerText = "Envoyé...";
        setTimeout(function() {
            submitBtn.innerText = "Envoyer";
        }, 3000);
        nameInput.value = "";
        subject.value = "";
        numero.value = "";
        email.value = "";
        messageInput.value = "";
      })
      .catch((error) => {
        console.error(error);
      });
  });
};