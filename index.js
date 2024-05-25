document.addEventListener("DOMContentLoaded", () => {
    const cal = document.getElementById("output");

    // Add event listeners to number buttons
    document.querySelectorAll(".input-btn").forEach(button => {
        button.addEventListener("click", () => {
            cal.value += button.getAttribute("data-value");
        });
    });

    // Add event listener to delete button
    document.getElementById("del").addEventListener("click", () => {
        cal.value = cal.value.slice(0, -1); // Remove the last character
    });

    // Add event listener to solution button
    document.getElementById("solution").addEventListener("click", () => {
        try {
            // Evaluate the expression and set the result to the input field
            cal.value = eval(cal.value);
        } catch (error) {
            cal.value = "Error";
        }
    });

    // Add event listener to reset button
    document.getElementById("remove").addEventListener("click", () => {
        cal.value = ""; // Clear the input field
    });

    // Add event listener to toggle switch for theme changes
    document.getElementById("custom-toggle").addEventListener("input", (event) => {
        const value = parseInt(event.target.value, 10);
        if (value === 1) {
            document.body.className = ""; // Default theme
        } else if (value === 2) {
            document.body.className = "theme2";
        } else if (value === 3) {
            document.body.className = "theme3";
        }
    });
});
