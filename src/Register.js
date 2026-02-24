import React, { useState } from 'react';
import API from './api'; // Το αρχείο που φτιάξαμε πριν με το baseURL

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/register', { email, password });
      setMessage("Επιτυχής εγγραφή! Τώρα μπορείς να συνδεθείς.");
    } catch (error) {
      setMessage("Σφάλμα: " + (error.response?.data?.error || "Κάτι πήγε στραβά"));
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Δημιουργία Λογαριασμού</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={e => setEmail(e.target.value)} 
          required 
        /><br/>
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)} 
          required 
        /><br/>
        <button type="submit">Εγγραφή</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Register;