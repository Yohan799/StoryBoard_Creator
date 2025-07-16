document.addEventListener("DOMContentLoaded", () => {
    generatePromptInputs();

    document.getElementById("frameCount").addEventListener("change", generatePromptInputs);
});

function generatePromptInputs() {
    const count = parseInt(document.getElementById("frameCount").value);
    const container = document.getElementById("promptInputs");
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
        container.innerHTML += `
            <label>Prompt for Frame ${i + 1}:</label>
            <textarea class="prompt-input" rows="2" placeholder="Describe scene for frame ${i + 1}..."></textarea>
        `;
    }
}

function startGeneration() {
    const prompts = Array.from(document.querySelectorAll(".prompt-input"))
        .map(p => p.value.trim())
        .filter(p => p !== "");

    if (prompts.length === 0) {
        alert("Please enter at least one prompt.");
        return;
    }

    // Disable the button while loading
    document.getElementById("storyboardContainer").innerHTML = "<p>Generating images... please wait.</p>";
    document.getElementById("exportBtn").style.display = "none";

    fetch('/generate_storyboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompts })
    })
    .then(res => res.json())
    .then(data => {
        const container = document.getElementById("storyboardContainer");
        container.innerHTML = "";

        data.forEach((frame, i) => {
            const imageHtml = frame.image_url
                ? `<img src="${frame.image_url}" width="300" alt="Frame ${i + 1}">`
                : `<p style="color:red;">❌ Failed to generate image for Frame ${i + 1}</p>`;

            container.innerHTML += `
                <div class="frame">
                    <h3>Frame ${i + 1}</h3>
                    <p><strong>Prompt:</strong> ${frame.prompt}</p>
                    ${imageHtml}
                </div>
            `;
        });

        document.getElementById("exportBtn").style.display = "inline-block";
    })
    .catch(err => {
        console.error("Error during generation:", err);
        document.getElementById("storyboardContainer").innerHTML = "<p style='color:red;'>Something went wrong. Please try again later.</p>";
    });
}

function exportToPDF() {
    const element = document.getElementById("storyboardContainer");
    html2pdf().from(element).save("storyboard.pdf");
}
