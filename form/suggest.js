document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("discordForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
    });
});

function sendMessage() {
    const username = document.getElementById("username").value;
    const message = document.getElementById("message").value;

    const webhookUrl = getWebhookUrl();

    if (webhookUrl) {
        const data = {
            username: username,
            content: message
        };

        fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById("response").innerText = "Message sent successfully!";
        })
        .catch(error => {
            document.getElementById("response").innerText = "Error sending message. Please try again.";
        });
    } else {
        document.getElementById("response").innerText = "Webhook URL not found. Please check your configuration.";
    }
}

function getWebhookUrl() {
    // Retrieve webhook URL from environment variable
    return process.env.WEBHOOK_URL;
}
