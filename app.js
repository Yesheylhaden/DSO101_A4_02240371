const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from CI/CD Pipeline! Node.js app is running.');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', message: 'App is working fine' });
});

// Only start server if this file is run directly (not imported in tests)
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;