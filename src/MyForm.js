import React, { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEmailChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
      const response = await fetch('http://localhost:8000/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email,password }),
      });  
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" value={email} onChange={handleNameChange} />
        </label>
        <br />
        <label>
        password:
          <input type="text" value={password} onChange={handleEmailChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MyForm;
