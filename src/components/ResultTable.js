// src/components/ResultTable.js

import React from 'react';

const ResultTable = ({ subjects }) => {
    return (
        <div className="result-table">
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>MSE Marks</th>
                        <th>ESE Marks</th>
                        <th>Total Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {subjects.map((subject) => (
                        <tr key={subject._id}>
                            <td>{subject.subject}</td>
                            <td>{subject.mseMarks}</td>
                            <td>{subject.eseMarks}</td>
                            <td>{subject.mseMarks + subject.eseMarks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResultTable;
