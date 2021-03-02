function Login() {
  function handleSubmitRegistration(evt) {
    evt.preventDefault();
  }
  return (
    <form className="login__form" onSubmit={handleSubmitRegistration}>
      <input
        type="text"
        name="user__name"
        id="user__name"
        className="input__field"
        required
      />
      <label htmlFor="user__name" className="input__label">
        User Name
      </label>
      <input
        type="text"
        name="user__name"
        id="user__name"
        className="input__field"
        required
      />
      <label htmlFor="password" className="input__label">
        Password
      </label>
      <input
        type="text"
        name="password"
        id="password"
        className="input__field"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
