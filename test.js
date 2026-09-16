const http = require('http');
const server = require('./app');

setTimeout(() => {
  http.get('http://localhost:3000', (res) => {
    if (res.statusCode === 200) {
      console.log('✓ TEST PASSED');
      server.close();
      process.exit(0);
    } else {
      console.error('✗ TEST FAILED: status =', res.statusCode);
      process.exit(1);
    }
  }).on('error', (e) => {
    console.error('✗ TEST FAILED:', e.message);
    process.exit(1);
  });
}, 1000);
