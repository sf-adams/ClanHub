export default function LoginForm({email, setEmail, password, setPassword, handleSubmit, error }) {

  return (
    <div className="form-box">
    <h2 className="login-form-title">Login:</h2>
    <form className="login-form" onSubmit={handleSubmit}>

      {error && <p>{error}</p>}

      <div className="inner-container">
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          required
          autoComplete="off"
          placeholder="Email:"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="inner-container">
        <input
          type="password"
          id="login-password"
          name="[password]"
          value={password}
          required
          autoComplete="off"
          placeholder="Password:"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="button">
        <button variant="primary" type="Submit">
          Log In
        </button>
      </div>

      <div className="return-link-container">
              <p>No account? Request one
                <a href="mailto:info@codeclan.com?subject=Request%20Username%20and%20Password" className="cc-link">here</a>
              </p>
            </div>
    </form>
    </div>
  );
}
