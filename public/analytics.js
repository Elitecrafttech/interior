console.log("Analytics script loaded.");

// Example Google Analytics Setup
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-XXXXXXXXXX'); // Replace with your Google Analytics ID
