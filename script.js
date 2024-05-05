window.onload = function() {
  console.log(process.env.API_KEY);
    document.querySelectorAll('.pronouns').forEach(pronoun => {
      pronoun.addEventListener('click', () => {
        const shark = document.createElement('img');
        shark.src = 'images/sharkLoad.gif' + '?a=' + Math.random(); // Add a random query string
        shark.classList.add('shark', 'swim');
        
        pronoun.appendChild(shark);
        
        setTimeout(() => {
          pronoun.removeChild(shark);
        }, 1000); // time of shark
      });
    });
  }

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("#contact-form");
    const submitBtn = document.querySelector(".submit-btn");
    const nameInput = document.querySelector("#user_name");
    const emailInput = document.querySelector("#user_email");
    const messageInput = document.querySelector("#message");

    // Get needed data from email JS
    const publicKey = "wUxqBGfThxcIdD8te";
    const serviceID = "service_a516f7m";
    const templateID = "template_obka84g";

    // Initialize email JS with public key
    // emailjs.init("user_" + publicKey);
    // emailjs.init(publicKey);

    // Add submit event to the form
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        // emailjs.init(publicKey);
        console.log('Form submitted');

        submitBtn.innerText = "Just A moment...";

        const inputFields = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };

        // emailjs.sendForm('service_a516f7m', 'template_kg2y3ag', form.current, 'wUxqBGfThxcIdD8te')
        emailjs.sendForm('service_a516f7m', 'template_kg2y3ag', contactForm, 'wUxqBGfThxcIdD8te')//(serviceID, templateID, contactForm, inputFields)
            .then(() => {
                submitBtn.innerText = "Message Sent! We'll get back to you ASAP.";
                nameInput.value = "";
                emailInput.value = "";
                messageInput.value = "";
                console.log("sent");
            })
            .catch((error) => {
                console.log(error);
                submitBtn.innerText = "Something went wrong :(";
            });
    });
});

