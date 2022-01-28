export default function LoginForm({email, setEmail, password, setPassword, handleSubmit }) {

  return (
    <form className="form-component" onSubmit={handleSubmit}>

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
    </form>
  );
}
