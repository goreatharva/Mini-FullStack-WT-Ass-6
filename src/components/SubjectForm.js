// src/components/SubjectForm.js

import React, { useState } from 'react';

const SubjectForm = ({ onAdd }) => {
    const [formData, setFormData] = useState({ subject: '', mseMarks: 0, eseMarks: 0 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', formData); // Debugging log
        const response = await fetch('/subjects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const newSubject = await response.json();
            console.log('Subject added successfully:', newSubject); // Debugging log
            onAdd(newSubject); // Call the onAdd function to update the table
            setFormData({ subject: '', mseMarks: 0, eseMarks: 0 }); // Reset form fields
        } else {
            console.error('Failed to add subject');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
            >
                <option value="">Select Subject</option>
                <option value="CN">CN</option>
                <option value="DAAOA">DAAOA</option>
                <option value="WT">WT</option>
                <option value="SDAM">SDAM</option>
                <option value="CGAVR">CGAVR</option>
            </select>
            <input
                type="number"
                placeholder="MSE Marks (out of 30)"
                value={formData.mseMarks}
                onChange={(e) => setFormData({ ...formData, mseMarks: parseInt(e.target.value) })}
                required
            />
            <input
                type="number"
                placeholder="ESE Marks (out of 70)"
                value={formData.eseMarks}
                onChange={(e) => setFormData({ ...formData, eseMarks: parseInt(e.target.value) })}
                required
            />
            <button type="submit">Add Subject</button>
        </form>
    );
};

export default SubjectForm;
