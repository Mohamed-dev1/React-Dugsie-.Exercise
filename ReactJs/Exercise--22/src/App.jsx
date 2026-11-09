import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = { username, email, password, country, isChecked };
    console.log(formData);
    setSubmittedData(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <select value={country} onChange={handleCountryChange}>
          <option value="">Select country</option>
          <option value="Somalia">Somalia</option>
          <option value="Uganda">Uganda</option>
          <option value="Kenya">Kenya</option>
        </select>
        <br />
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />{" "}
        I agree
        <br />
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div>
          <h3>Submitted Data</h3>
       <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
          <p>Country: {submittedData.country}</p>
          <p>Agreed: {submittedData.isChecked ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
}

export default App;
