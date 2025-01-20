// Frontend: React Application

// File: src/App.js
import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/greeting')
            .then(response => response.text())
            .then(data => setMessage(data));
    }, []);

    return (
        <div>
            <h1>React + Spring Boot Demo</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
