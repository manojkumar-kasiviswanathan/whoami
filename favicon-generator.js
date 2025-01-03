const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');
const { FaIdBadge } = require('react-icons/fa');

// Use React.createElement instead of JSX
const IconAsFavicon = React.createElement(FaIdBadge, { color: '#052D90FF', size: '64px' });

// Convert React component to SVG string
const svgString = ReactDOMServer.renderToStaticMarkup(IconAsFavicon);

// Wrap in SVG XML declaration
const svgMarkup = `<?xml version="1.0" encoding="UTF-8"?>${svgString}`;

// Save the SVG as a file
fs.writeFileSync('./public/favicon.svg', svgMarkup);
console.log('Favicon created successfully!');
