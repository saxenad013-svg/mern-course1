// ─── server.js ─────────────────────────────
// Load the Express package
const express = require('express');
 
// Create an Express application
const app = express();
 
// Define the port number our server will listen on
const PORT = 3000;
 
// ─── EXISTING ROUTES ────────────────────────
// Route 1: Home page
app.get('/', function(req, res) {
    res.send('<h1>Welcome to My MERN Server!</h1><p>The server is running on Day 3.</p>');
});
 
// Route 2: About page
app.get('/about', function(req, res) {
    res.send('<h1>About Page</h1><p>This server is built with Node.js and Express.js</p>');
});
 
// Route 3: Students page
app.get('/students', function(req, res) {
    res.send('<h1>Students</h1><p>This page will show student data later!</p>');
});


// ─── ASSIGNMENT ROUTES (UPDATED) ────────────

// Route 1: /contact
app.get('/contact', function(req, res) {
    res.send(`
        <h1>Contact Us</h1>
        <p><strong>Name:</strong> Devashish Saxena</p>
        <p><strong>Email:</strong> saxenad013@gmail.com</p>
        <p><strong>College:</strong> JD College of Engineering and Management</p>
    `);
});

// Route 2: /courses (UPDATED WITH YOUR SUBJECTS)
app.get('/courses', function(req, res) {
    res.send(`
        <h1>Current Semester Courses</h1>
        <ul>
            <li>Java</li>
            <li>Data Communication Network</li>
            <li>Microprocessing in C</li>
            <li>EES</li>
        </ul>
    `);
});

// Route 3: /welcome/:name (Dynamic Route)
app.get('/welcome/:name', function(req, res) {
    let name = req.params.name;
    // Capitalize the first letter for a clean presentation
    let formattedName = name.charAt(0).toUpperCase() + name.slice(1);
    res.send('<h1>Welcome, ' + formattedName + '!</h1>');
});


// ─── START SERVER ──────────────────────────
// Tell the server to start listening for requests
app.listen(PORT, function() {
    console.log('Server is running at http://localhost:' + PORT);
    console.log('Press Ctrl + C to stop the server');
});