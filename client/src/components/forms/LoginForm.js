export default function LoginForm({email, setEmail, password, setPassword, handleSubmit, error }) {

  return (
    <form className="form-component" onSubmit={handleSubmit}>

      {error && <p>{error}</p>}

      <div className="inner-container">
        <label htmlFor="login-Email"> Email:</label>
        <input
          type="email"
          id="login-email"
          name="email"
          value={email}
          required
          autoComplete="off"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="inner-container">
        <label htmlFor="login-password"> Password:</label>
        <input
          type="password"
          id="login-password"
          name="[password]"
          value={password}
          required
          autoComplete="off"
          placeholder="Password"
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
                <a href="mailto:info@codeclan.com?subject=Request%20Username%20and%20Password">here</a>
              </p>
            </div>
    </form>
  );
}
