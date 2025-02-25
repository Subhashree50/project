document.getElementById("send-btn").addEventListener("click", function() 
{
    const userInput = document.getElementById("user-input").value;
    if (userInput) {
        addMessage(userInput, 'user');
        getResponse(userInput);
        document.getElementById("user-input").value = ''; // Clear input field
    }
});

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = message;
    messageDiv.classList.add(sender);
    document.getElementById("messages").appendChild(messageDiv);
}

function getResponse(input) {
    let response = '';

    // Basic logic for medical-related questions
    if (input.toLowerCase().includes("heart disease")) {
        response = "Heart disease refers to various types of conditions that affect the heart, including coronary artery disease, arrhythmias, and heart failure.";
    } else if (input.toLowerCase().includes("cancer")) {
        response = "Cancer is a disease in which abnormal cells divide without control and can invade nearby tissues. For more details, you can refer to a medical book.";
    } else {
        response = "I'm sorry, I don't have information about that. Please check a medical book for more details.";
    }

    // Add link to a medical book
response += '<a href="https://drive.google.com/file/d/1tMIprz2Rfq5wnDkT_qf22LgRggWIDOZy/view?usp=sharing" target="_blank">Click here</a>'

    addMessage(response, 'bot');
}
