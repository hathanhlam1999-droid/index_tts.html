const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// API routes for Employee Management
app.get('/api/employees', (req, res) => {
    // Mock data - replace with database call
    res.json([{ id: 1, name: 'John Doe', position: 'Developer' }]);
});

// API routes for Projects Management
app.get('/api/projects', (req, res) => {
    // Mock data - replace with database call
    res.json([{ id: 1, name: 'Project Alpha' }]);
});

// API routes for Salary Management
app.get('/api/salaries', (req, res) => {
    // Mock data - replace with database call
    res.json([{ id: 1, employeeId: 1, amount: 5000 }]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});