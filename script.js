// Sample data for features
const featuresData = [
    "Signing up online",
    "Facility of uploading documents online",
    "Responsive Design",
    "Online Assessments",
    "Future of e-learning",
    "Communication through LMS",
    "Admin Dashboards"
];

// Function to generate feature sections
function generateFeatures() {
    const featuresContainer = document.getElementById("features");

    featuresData.forEach((feature, index) => {
        const featureDiv = document.createElement("div");
        featureDiv.classList.add("feature");
        featureDiv.innerHTML = `
            <h2>Feature ${index + 1}: ${feature}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget nisi eu massa sodales varius.</p>
        `;
        featuresContainer.appendChild(featureDiv);
    });
}

// Call the function to generate features
generateFeatures();
