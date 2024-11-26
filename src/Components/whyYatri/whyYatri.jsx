
import { Flag, Users, Smartphone, DollarSign } from 'lucide-react'
import './WhyYatri.css'

const WhyYatri = () => {
  const features = [
    {
      icon: <Flag className="feature-icon" />,
      title: "FAST RESPONSE TIME",
      description: "Experience The Best Car Rental Service With Driver For Local Or Outstation Trips. Enjoy Prompt Response Time And Seamless Car Hire Service, Ensuring You Get On The Road Quickly"
    },
    {
      icon: <Users className="feature-icon" />,
      title: "VAST FLEET",
      description: "We Offer A Wide Range Of Rental Cars Including Sedans, SUVs, MUVs, Premium Sedans, And Tempo Travellers To Meet All Your Needs."
    },
    {
      icon: <Smartphone className="feature-icon" />,
      title: "EASY TO ORDER",
      description: "Easily Book A Cab Online Through Our User-Friendly Website, Mobile Application, Or By Calling Our Customer Support Team."
    },
    {
      icon: <DollarSign className="feature-icon" />,
      title: "GREAT TARIFFS",
      description: "Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly Competitive Compared To Other Operators. Book Online Cabs At The Best Prices With Yatri Car Rental."
    }
  ]

  return (
    <section className="why-yatri">
      <h2>WHY <span className="highlight">YATRI</span> ?</h2>
      <div className="features-container">
        <div className="car-image">
          <img src="/src/assets/dzire.jpg" alt="Yatri Car with Customers" />
        </div>
        <div className="features-list">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyYatri

