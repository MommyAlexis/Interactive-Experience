import React, { useState } from 'react';
import './AgeVerification.css';

function AgeVerification({ onVerified }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleVerify = () => {
    if (isChecked) {
      onVerified();
    } else {
      alert("You must confirm that you are over 18 to proceed.");
    }
  };

  return (
    <div className="age-verification">
      <h1>Age Verification</h1>
      <p>Warning: This site contains mature content intended for adults only.</p>
      <p>You must be at least 18 years old to enter.</p>
      <div className="checkbox-container">
        <input 
          type="checkbox" 
          id="age-check" 
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label htmlFor="age-check">I confirm that I am at least 18 years old</label>
      </div>
      <button onClick={handleVerify}>Enter Site</button>
    </div>
  );
}

export default AgeVerification;