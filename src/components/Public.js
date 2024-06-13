import { Link } from "react-router-dom"

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>
          Welcome to <span className="nowrap">Abel's Tech Triage!</span>
        </h1>
      </header>
      <main className="public__main">
        <p>
          Located in Toronto, Abel's Tech Triage provides a trained staff ready
          to meet your tech repair needs.
        </p>
        <address className="public__addr">
          Abel's Tech Triage
          <br />
          XX Yonge Street
          <br />
          Toronto, Ontario XXX XXX
          <br />
          <a href="tel:+15555555555">(XXX) XXX-XXX</a>
        </address>
        <br />
        <p>Owner: Abel</p>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  )
  return content
}
export default Public
