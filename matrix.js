document.addEventListener("DOMContentLoaded", function () {
    const matrixRain = document.createElement("div");
    matrixRain.className = "matrix-rain";
    document.body.appendChild(matrixRain);

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+{}[]|:;<>?,./";
    const columns = Math.floor(window.innerWidth / 30); // Reduced density (increased spacing between columns)

    for (let i = 0; i < columns; i++) {
        const span = document.createElement("span");
        span.style.left = `${(i * 30)}px`; // Increased spacing between columns
        span.style.animationDuration = `${Math.random() * 3 + 2}s`; // Slower speed (increased duration)
        span.style.animationDelay = `${Math.random()}s`; // Randomize delay
        span.textContent = characters[Math.floor(Math.random() * characters.length)];
        matrixRain.appendChild(span);

        // Continuously add new letters
        setInterval(() => {
            span.textContent = characters[Math.floor(Math.random() * characters.length)];
        }, 200); // Reduced frequency of character changes
    }

    // Add extra spans for denser columns (less frequent and fewer)
    for (let i = 0; i < columns; i++) {
        if (i % 10 === 0) { // Reduced frequency of dense columns (every 10th column)
            for (let j = 0; j < 2; j++) { // Reduced number of extra spans per dense column
                const extraSpan = document.createElement("span");
                extraSpan.style.left = `${(i * 30)}px`;
                extraSpan.style.animationDuration = `${Math.random() * 2 + 1.5}s`; // Slower speed
                extraSpan.style.animationDelay = `${Math.random()}s`;
                extraSpan.textContent = characters[Math.floor(Math.random() * characters.length)];
                extraSpan.style.fontSize = "1.8rem";
                extraSpan.style.opacity = "0.8";
                matrixRain.appendChild(extraSpan);

                setInterval(() => {
                    extraSpan.textContent = characters[Math.floor(Math.random() * characters.length)];
                }, 200); // Reduced frequency of character changes
            }
        }
    }
});