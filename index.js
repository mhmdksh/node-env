const express = require('express');
const app = express();

// Log all environment variables at startup
console.log('Environment Variables:');
for (const [key, value] of Object.entries(process.env)) {
  console.log(`${key}: ${value}`);
}

// Define a route to display a message
app.get('/', (req, res) => {
  res.send('Environment variables listed in console.');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
