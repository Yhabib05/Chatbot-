// script.js

document.getElementById("send-btn").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;

    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        document.getElementById("user-input").value = "";
        
        // Simuler une réponse du chatbot après 1 seconde
        setTimeout(function() {
            let botResponse = "Ceci est une réponse automatique.";
            addMessage(botResponse, "bot-message");
        }, 1000);
    }
});

function addMessage(text, className) {
    let messageElement = document.createElement("div");
    messageElement.className = "message " + className;
    messageElement.innerText = text;
    document.getElementById("chat-box").appendChild(messageElement);

    // Faire défiler la boîte de chat jusqu'en bas à chaque nouveau message
    document.getElementById("chat-box").scrollTop = document.getElementById("chat-box").scrollHeight;
}
