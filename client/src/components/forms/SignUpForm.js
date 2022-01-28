export default function SignupForm({email, setEmail, password, setPassword, passwordConfirm, setPasswordConfirm, handleSubmit}) {

  return (
    <>
      <form onSubmit={handleSubmit}>

        <div className="inner-container">
          <label htmlFor="signup-Email"> Email:</label>
          <input
            type="email"
            id="signup-email"
            name="email"
            value={email}
            required
            autoComplete="off"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <label htmlFor="signup-password"> Password:</label>
          <input
            type="password"
            id="signup-password"
            name="[password]"
            value={password}
            required
            autoComplete="off"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="inner-container">
          <label htmlFor="signup-confirm-password"> Confirmation:</label>
          <input
            type="password"
            id="signup-confirm-password"
            name="passwordConfirm"
            value={passwordConfirm}
            required
            autoComplete="off"
            placeholder="Password Confirmation..."
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>

        <div className="button">
          <button variant="primary" type="Submit">
            Sign up
          </button>
        </div>
      </form>

    </>
  );
}
