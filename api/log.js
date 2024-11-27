const fs = require("fs");
const path = require("path");

export default function handler(req, res) {
  const ipAddress =
    req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  const logFilePath = path.join(process.cwd(), "ip_log.txt");

  // Log the IP address
  fs.appendFileSync(logFilePath, `IP: ${ipAddress}\n`);

  // Redirect to the target URL
  const redirectUrl = "https://youtube.com"; // Replace with your target URL
  res.writeHead(302, { Location: redirectUrl });
  res.end();
}
