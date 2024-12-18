import { displayData } from "./displayData.js";

// Make the HTTP API request
export async function makeRequest(api, options) {
    try {
        const response = await fetch(api, options);
        if (!response.ok) {
            const error = await response.json();
            handleError(error);
        } else {
            const data = await handleResponse(response);
            displayData(data);
        }
    } catch (error) {
        handleError(error);
    }
}

// Return response as JSON
const handleResponse = (response) => response.json();

// Log the error to console
function handleError(error) {
    const errorMessage = document.createElement("p");

    if (error.errors && error.errors.length > 0) {
        errorMessage.textContent = "Error: " + error.errors[0].message;
    } else {
        errorMessage.textContent = "An unknown error occurred";
    }

    errorMessage.setAttribute("class", "error-message");
    document.body.appendChild(errorMessage);
    console.error(error);
}