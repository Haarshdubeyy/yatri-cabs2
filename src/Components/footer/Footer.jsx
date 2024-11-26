
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/yatri-logo.png" alt="Yatri Cabs" />
        </div>
        <nav className="footer-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">News</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </nav>
        <div className="newsletter">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Email" />
            <button type="submit">→</button>
          </form>
        </div>
        <div className="copyright">
          All Copyrights are reserved by YATRI CABS
        </div>
      </div>
    </footer>
  )
}

export default Footer

