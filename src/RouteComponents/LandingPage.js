import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <section className="landing__page__main">
      <h2>Keep track of your goals using Good Habit Tracker!</h2>
      <Link to="/login">Log In</Link>
      <Link to="/register">Register</Link>
    </section>
  );
}

export default LandingPage;
