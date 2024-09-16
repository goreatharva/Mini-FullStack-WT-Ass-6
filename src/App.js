// src/App.js

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SubjectForm from './components/SubjectForm';
import ResultTable from './components/ResultTable';
import './App.css'; // Import the CSS file

function App() {
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const fetchSubjects = async () => {
            const response = await fetch('/subjects');
            const data = await response.json();
            setSubjects(data);
        };
        fetchSubjects();
    }, []);

    const handleAddSubject = (newSubject) => {
        setSubjects((prevSubjects) => [...prevSubjects, newSubject]); // Update the subjects state
    };

    return (
        <div className="container">
            <Header />
            <SubjectForm onAdd={handleAddSubject} />
            <ResultTable subjects={subjects} />
        </div>
    );
}

export default App;
