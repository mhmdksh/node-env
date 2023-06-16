const express = require('express');
const app = express();

// Store and log all environment variables at startup
let envVars = 'Environment Variables:\n';
for (const [key, value] of Object.entries(process.env)) {
  envVars += `${key}: ${value}\n`;
  console.log(`${key}: ${value}`);
}

// Define a route to display the environment variables
app.get('/', (req, res) => {
  res.send(`<pre>${envVars}</pre>`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
