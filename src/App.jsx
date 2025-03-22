import './App.css';

function App() {
  return (
    <div className="form-container">
      <form id="contact-form">
        <label htmlFor="contact-form">Contact us</label>
        <div className="section-horizontal">
          <div className="section">
            <label htmlFor="input-first-name">
              First name
            </label>
            <input
              id="input-first-name"
              type="text"
            />
          </div>
          <div className="section">
            <label htmlFor="input-last-name">
              Last name
            </label>
            <input
              id="input-last-name"
              type="text"
            />
          </div>
        </div>
        <div className="section">
          <label htmlFor="input-email">Email address</label>
          <input
            id="input-email"
            type="text"
          />
        </div>
        <div className="section">
          <label>Query type</label>
          <div className="section-horizontal">
            <div className="query-type">
              <input
                type="radio"
                name="query-type"
                id="general-query"
                placeholder="dfs"
              />
              <label htmlFor="general-query">
                General query
              </label>
            </div>
            <div className="query-type">
              <input
                type="radio"
                name="query-type"
                id="support-request"
              />
              <label htmlFor="support-request">
                Support request
              </label>
            </div>
          </div>
        </div>
        <div className="section">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            id="message"
          />
        </div>
        <div className="section-horizontal">
          <input
            type="checkbox"
            id="consent"
          />
          <label htmlFor="consent">
            I consent to being contacted by the team
          </label>
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
