import { Phone, Download, User } from 'lucide-react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <img src="/yatri-logo.png" alt="Yatri Cabs" />
        </div>
        <div className="header-right">
          <div className="contact-info">
            <Phone className="icon" />
            <span>24 x 7 +917860663399</span>
          </div>
          <button className="download-btn">
            <Download className="icon" />
            Download App
          </button>
          <button className="user-btn">
            <User className="icon" />
            Hi, User
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

