import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <>
      <div className="error-container">
        <h1>404 This page doesn't exist</h1>
        <p>If you were looking for a contact form, try:</p>
        <Link to="/Contact-form/">Contact form</Link>
      </div>
    </>
  );
}
