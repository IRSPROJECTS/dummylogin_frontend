import React, { useState } from 'react';
import API from './api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/login', { email, password });
      alert(response.data.message);
      // Εδώ συνήθως αποθηκεύεις ένα Token (π.χ. JWT) αν το είχες υλοποιήσει
    } catch (error) {
      alert("Σφάλμα σύνδεσης: " + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  );
}