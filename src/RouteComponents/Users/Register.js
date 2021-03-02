function Register() {
  function handleSubmitRegistration(evt) {
    evt.preventDefault();
  }
  return (
    <form className="registration__form" onSubmit={handleSubmitRegistration}>
      <label htmlFor="first__name" className="input__label">
        First Name
      </label>
      <input
        type="text"
        name="first__name"
        id="first__name"
        className="input__field"
        required
      />
      <label htmlFor="last__name" className="input__label">
        Last Name
      </label>
      <input
        type="text"
        name="last__name"
        id="last__name"
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
      <button type="submit">Register User</button>
    </form>
  );
}

export default Register;
