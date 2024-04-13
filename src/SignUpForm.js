import { useState } from "react";

const SignUpForm = () => {
  // useState value to handle inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // useState value to handle validation error
  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [validConfirmPassword, setValidConfirmPassword] = useState("");

  // function to handle email input
  const handleEmailInput = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValidEmail(emailRegex.test(inputValue));
  };

  // function to handle password input
  const handlePasswordInput = (e) => {
    const inputValue = e.target.value.trim();
    setPassword(inputValue);
    setValidPassword(inputValue.length >= 8);
  };

  // function to handle confirm password input
  const handleConfirmPasswordInput = (e) => {
    const inputValue = e.target.value.trim();
    setConfirmPassword(inputValue);
    setValidConfirmPassword(password === inputValue);
  };

  // submit event function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if(validEmail && validConfirmPassword && validPassword) {
        alert("Form submitted sucessfully!");
    }else alert("Form cannot be submitted!");
  };

  return (
    <form onSubmit={handleSubmit} id="form">
      {/* Email input section */}
      <div>
        <label htmlFor="email">Email:</label>
        <input 
        type="email" 
        id="email" 
        name="email" 
        value={email} 
        onChange={handleEmailInput} 
        style={{ borderColor : validEmail ? "green" : "red"}} 
        />
        {!validEmail && <p className="error-msg">Invalid email format</p>}
      </div>

      {/* Password input section */}
      <div>
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        id="password" 
        name="password" 
        value={password} 
        onChange={handlePasswordInput} 
        style={{borderColor : validPassword ? "green" : "red"}}
        />
        {!validPassword && <p className="error-msg">Password must be atleast 8 charctors</p>}
      </div>

      {/* Confirm password input section */}
      <div>
        <label htmlFor="cpwd">Confirm Password</label>
        <input 
        type="password" 
        id="cpwd" 
        name="cpwd" 
        value={confirmPassword} 
        onChange={handleConfirmPasswordInput} 
        style={{borderColor : validConfirmPassword ? "green" : "red"}}
        />
        {!validConfirmPassword && <p className="error-msg">Passwords do not match</p>}
      </div>
      <button className="signup-btn">Sign Up</button>
    </form>
  );
};

export default SignUpForm;