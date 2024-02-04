const words = ["Plumbing", "Electrical", "Cleaning", "Appliances Repair", "Landscaping", "Gardening", "Carpentry", "Emergency service", "Suppliers"];

const text = document.querySelector("h1 span");

let wordIdx = 0;
let charIdx = 0;
let isDeleting = false;

function textEffect() {
    const currWord = words[wordIdx];
    const currChar = currWord.substring(0, charIdx);
    text.textContent = currChar;
    text.classList.add("stop-animation");

    if (!isDeleting && charIdx < currWord.length) {
        charIdx++;
        setTimeout(textEffect, 200);
    } else if (isDeleting && charIdx > 0) {
        charIdx--;
        setTimeout(textEffect, 150);
    } else {
        isDeleting = !isDeleting; // assign true value in isDeleting variable
        text.classList.remove("stop-animation");

        // Index increase when we do not want to delete
        if (!isDeleting) { // if block executed when isDeleting = false
            // pick next word
            wordIdx = (wordIdx + 1) % words.length;
        }

        setTimeout(textEffect, 1300);
    }

}

textEffect();