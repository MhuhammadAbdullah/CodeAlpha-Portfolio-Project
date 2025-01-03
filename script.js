let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

const changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    // Animate current word out
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });

    // Animate next word in
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// CIRCLE SKILL///////////////////////////////////////

// const circles = document.querySelectorAll(".circle");
// circles.forEach(elem => {
//     var dots = elem.getAttribute("data-dots");
//     var marked = elem.getAttribute("data-percent");
//     var percent = Math.floor(dots * marked / 100);
//     var points = "";
//     var rotate = 360 / dots;


//     for (let i = 0; i < dots; i++) {

//         points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML = points;

//     const pointsMarked = elem.querySelectorAll('.points');
//     for (let i = 0; i < percent; i++) {
//         pointsMarked[i].classList.add('marked');
//     }
// });



const circles = document.querySelectorAll(".circle");

function refreshCircles() {
    circles.forEach(elem => {
        var dots = elem.getAttribute("data-dots");
        var marked = elem.getAttribute("data-percent");
        var percent = Math.floor(dots * marked / 100);
        var points = "";
        var rotate = 360 / dots;

        // Generate points for the circle
        for (let i = 0; i < dots; i++) {
            points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
        }
        elem.innerHTML = points;

        const pointsMarked = elem.querySelectorAll('.points');
        // Mark the points based on percentage
        for (let i = 0; i < percent; i++) {
            pointsMarked[i].classList.add('marked');
        }
    });
}

// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Add scroll event listener to refresh skill circles on scroll
window.addEventListener("scroll", function () {
    const skillSection = document.querySelector(".skill-right");

    if (isInViewport(skillSection)) {
        refreshCircles();
    }
});

// Optionally, trigger refresh when the page loads (if already in view)
window.addEventListener("load", function () {
    const skillSection = document.querySelector(".skill-right");
    if (isInViewport(skillSection)) {
        refreshCircles();
    }
});


// SKILL LEFT////////////////////////////////////////////////////


// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const percentage = parseFloat(bar.querySelector('.info p:last-child').innerText);
        const barSpan = bar.querySelector('span');

        // Animate the width of the skill bar
        barSpan.style.width = 0; // reset the width before the animation starts

        // When the skill-bar comes into view, animate it
        if (isInViewport(bar)) {
            barSpan.style.transition = `width 2s ease-in-out`; // set transition for animation
            barSpan.style.width = `${percentage}%`;
        }
    });
}

// Add scroll event listener to trigger the animation when skill-bars come into view
window.addEventListener('scroll', animateSkillBars);

// Optionally, trigger animation when the page loads (if the section is already in view)
window.addEventListener('load', animateSkillBars);






// MIS IT UP PORTFOLIO SECTION////////////////////////////////////////////

var mixer = mixitup('.portfolio-gallery')


// ACTIVE MENU////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) { }
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);


// STICKY NAVBAR////////////////////////////////////////////

const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 50);
});


// TOGGLE ICON NAVBAR////////////////////////////////////////////


let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist"); // Ensure correct selector

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // Rotate menu icon
    navlist.classList.toggle("open"); // Show/hide navlist
};

window.onscroll = () => {
    menuIcon.classList.remove("bx-x"); // Remove rotation on scroll
    navlist.classList.remove("open"); // Hide navlist on scroll
};


// PARALLAX ////////////////////////////////////////////

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-items');
        } else {
            entry.target.classList.remove('show-items');
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));


const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));


const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));





// CONTACT FORM///////////////////////////////////////////////////////

// document.getElementById("sendMessageButton").addEventListener("click", function () {
//     const form = document.getElementById("contactForm");

//     // Collect form data
//     const formData = {
//         name: form.name.value,
//         email: form.email.value,
//         address: form.address.value,
//         phone: form.phone.value,
//         message: form.message.value,
//     };

//     // Send email using EmailJS
//     emailjs
//         .send("service_ja7zjyr", "template_uoergdo", formData)
//         .then((response) => {
//             console.log("SUCCESS!", response.status, response.text);
//             document.getElementById("responseMessage").innerText =
//                 "Your message has been sent successfully!";
//             form.reset(); // Reset form fields after successful submission
//         })
//         .catch((error) => {
//             console.error("FAILED...", error);
//             document.getElementById("responseMessage").innerText =
//                 "Failed to send your message. Please try again.";
//         });
// });






// document.getElementById("sendMessageButton").addEventListener("click", function () {
//     const form = document.getElementById("contactForm");

//     // Collect form data
//     const formData = {
//         name: form.name.value,
//         email: form.email.value,
//         address: form.address.value,
//         phone: form.phone.value,
//         message: form.message.value,
//     };

//     // Send email using EmailJS
//     emailjs
//         .send("service_ja7zjyr", "template_uoergdo", formData)
//         .then((response) => {
//             console.log("SUCCESS!", response.status, response.text);

//             // Display success alert using SweetAlert
//             Swal.fire({
//                 icon: "success",
//                 title: "Message Sent",
//                 text: "Your message has been sent successfully!",
//                 confirmButtonText: "OK",
//             });

//             form.reset(); // Reset form fields after successful submission
//         })
//         .catch((error) => {
//             console.error("FAILED...", error);

//             // Display error alert using SweetAlert
//             Swal.fire({
//                 icon: "error",
//                 title: "Error",
//                 text: "Failed to send your message. Please try again.",
//                 confirmButtonText: "OK",
//             });
//         });
// });








document.getElementById("sendMessageButton").addEventListener("click", function () {
    const form = document.getElementById("contactForm");

    // Collect form data
    const formData = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        address: form.address.value.trim(),
        phone: form.phone.value.trim(),
        message: form.message.value.trim(),
    };

    // Check if all fields are filled
    if (!formData.name || !formData.email || !formData.message) {
        Swal.fire({
            icon: "warning",
            title: "Missing Information",
            text: "Please fill in all required fields (Name, Email, and Message).",
            confirmButtonText: "OK",
        });
        return; // Stop execution if fields are empty
    }

    // Send email using EmailJS
    emailjs
        .send("service_ja7zjyr", "template_uoergdo", formData)
        .then((response) => {
            console.log("SUCCESS!", response.status, response.text);

            // Display success alert using SweetAlert
            Swal.fire({
                icon: "success",
                title: "Message Sent",
                text: "Your message has been sent successfully!",
                confirmButtonText: "OK",
            });

            form.reset(); // Reset form fields after successful submission
        })
        .catch((error) => {
            console.error("FAILED...", error);

            // Display error alert using SweetAlert
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to send your message. Please try again.",
                confirmButtonText: "OK",
            });
        });
});


