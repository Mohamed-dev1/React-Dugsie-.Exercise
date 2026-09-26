import { useState } from 'react';

const Isii = () => {
  const [usernme, setUsernme] = useState('');
  const [password, setPassword] = useState('');
  const [isLogedin, setIsLogedin] = useState(false);

  const handleLoging = (ev) => {
    ev.preventDefault();
    if (usernme && password) {
      setIsLogedin(true);
    }
  };

  const handleLogout = () => {
    setUsernme('');
    setPassword('');
    setIsLogedin(false);
  };

  if (isLogedin) {
    return (
      <div>
        <h1>So dhaww {usernme}</h1>
        <button onClick={handleLogout}>Logouth</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLoging}>
      <h2>Login</h2>
      <div>
        <label>
          Usrname
          <input
            type="text"
            value={usernme}
            onChange={(ev) => setUsernme(ev.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Isii;

