import { Link } from 'react-router';

export default function ErrorPage() {
  return (
    <>
      <h1>404 This page doesn't exist</h1>
      <div>
        <p>If you were looking for a contact form, try:</p>
        <Link to="/Contact-form/">Contact form</Link>
      </div>
    </>
  );
}
