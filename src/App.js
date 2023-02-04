import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <h3>Register User</h3>
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password.." />
        <button>Create User</button>
      </div>
      <div>
        <h3>Login</h3>
        <input type="email" placeholder="Email..." />
        <input type="password" placeholder="Password.." />
        <button>Login</button>
      </div>
      <h4>User logged in :</h4>
      <button>Sign Out</button>
    </div>
  );
}

export default App;
