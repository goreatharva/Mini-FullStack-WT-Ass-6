// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/vit-result-db')
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define the Subject schema
const subjectSchema = new mongoose.Schema({
    subject: String,
    mseMarks: Number,
    eseMarks: Number,
});

const Subject = mongoose.model('Subject', subjectSchema);

// Define routes
app.post('/subjects', async (req, res) => {
    const { subject, mseMarks, eseMarks } = req.body;
    const newSubject = new Subject({ subject, mseMarks, eseMarks });
    await newSubject.save();
    res.status(201).json(newSubject);
});

app.get('/subjects', async (req, res) => {
    const subjects = await Subject.find();
    res.json(subjects);
});

app.delete('/subjects/:id', async (req, res) => {
    const { id } = req.params;
    const deletedSubject = await Subject.findByIdAndDelete(id);
    if (!deletedSubject) {
        return res.status(404).send('Subject not found');
    }
    res.json({ message: 'Subject deleted successfully' });
});

// Start the server
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
