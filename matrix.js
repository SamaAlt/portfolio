// matrix.js

document.addEventListener("DOMContentLoaded", function () {
    const matrixRain = document.createElement("div");
    matrixRain.className = "matrix-rain";
    document.body.appendChild(matrixRain);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|:;<>?,./";
    const columns = Math.floor(window.innerWidth / 20); // Adjust density of letters

    for (let i = 0; i < columns; i++) {
        const span = document.createElement("span");
        span.style.left = `${(i * 20)}px`; // Spacing between columns
        span.style.animationDuration = `${Math.random() * 2 + 1}s`; // Randomize speed
        span.style.animationDelay = `${Math.random()}s`; // Randomize delay
        span.textContent = characters[Math.floor(Math.random() * characters.length)];
        matrixRain.appendChild(span);

        // Continuously add new letters
        setInterval(() => {
            span.textContent = characters[Math.floor(Math.random() * characters.length)];
        }, 100);

        // Make certain columns denser (e.g., every 5th column)
        if (i % 5 === 0) {
            span.style.animationDuration = `${Math.random() * 1 + 0.5}s`; // Faster speed
            span.style.fontSize = "1.8rem"; // Larger letters
            span.style.opacity = "0.8"; // Brighter letters
        }
    }

    // Add extra spans for denser columns
    for (let i = 0; i < columns; i++) {
        if (i % 5 === 0) {
            for (let j = 0; j < 3; j++) { // Add 3 extra spans per dense column
                const extraSpan = document.createElement("span");
                extraSpan.style.left = `${(i * 20)}px`;
                extraSpan.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
                extraSpan.style.animationDelay = `${Math.random()}s`;
                extraSpan.textContent = characters[Math.floor(Math.random() * characters.length)];
                extraSpan.style.fontSize = "1.8rem";
                extraSpan.style.opacity = "0.8";
                matrixRain.appendChild(extraSpan);

                setInterval(() => {
                    extraSpan.textContent = characters[Math.floor(Math.random() * characters.length)];
                }, 100);
            }
        }
    }
});