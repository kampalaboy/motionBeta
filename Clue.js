const fs = require('fs');
const qr = require('qrcode');

const clueToGenerateQrCodeFor = 'Find Yourself Find Youth';
const outputPath = 'Clue.png';

// Generate QR code
qr.toFile(outputPath, clueToGenerateQrCodeFor, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
  } else {
    console.log(`QR code generated successfully and saved to ${outputPath}`);
    
    // Display a message using the alert function
    // console.alert('Scan this QR code to reveal the clue!');
  }
});
