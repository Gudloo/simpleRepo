import React, { useState } from "react";

function Input() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="First name">First name: </label>
          <input id="First name" type="text" onChange={handleUserInput} value={userInput} />
          <label for="Last name">Last name: </label>
          <input id="Last name" type="text" onChange={handleUserInput} value={userInput} />
          <label for="Age">Age: </label>
          <input id="Age" type="text" onChange={handleUserInput} value={userInput} />
           <label for="Address">Address: </label>
          <input id="Address" type="text" onChange={handleUserInput} value={userInput} />
   <label for="Homeroom class number">Homeroom class number: </label>
          <input id="Homeroom class number" type="text" onChange={handleUserInput} value={userInput} />
          <label for="Student ID">Student ID: </label>
          <input id="Student ID" type="text" onChange={handleUserInput} value={userInput} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}

export default Input;