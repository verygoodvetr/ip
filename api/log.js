// A temporary in-memory storage for logged IPs
const loggedIPs = [];

export default function handler(req, res) {
  // Get the user's IP address
  const ipAddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

  // Log the IP address
  loggedIPs.push({ ip: ipAddress, timestamp: new Date() });

  console.log("Logged IPs:", loggedIPs); // Log to console for debugging

  // Redirect to another URL
  res.writeHead(302, { Location: "https://example.com" }); // Replace with your redirect URL
  res.end();
}
