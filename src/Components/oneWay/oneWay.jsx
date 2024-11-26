
import './oneWhay.css'

const OneWayJourney = () => {
  const benefits = [
    {
      title: "Instant Booking & Confirmation",
      items: [
        "Confirmed Booking Immediately",
        "No Return Fare For One-Way Trip",
        "Clean & Professional Cab Services",
        "Transparent Billing With GPS Based Billing System"
      ]
    },
    {
      title: "Customer Benefits",
      items: [
        "Pick-Up From Your House",
        "Dedicated Cab Just For You",
        "Drop To Your Desired Destination",
        "Completed More Than 20,000+ Oneway Trips",
        "Multiple Payment Option Including Credit Card"
      ]
    }
  ]

  return (
    <section className="one-way-journey">
      <div className="journey-header">
        <h2>WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span className="highlight">ONE-WAY JOURNEY</span>?</h2>
        <p>
          Our Oneway Cab Service Is Cheaper Than AC Bus And 2 Tier AC Train 
          Ticket Fares, It Reduces Your Travel Time And You Travel At Your Own 
          Private Space Also To Enjoy Your Journey. Our One Way Taxi Will Come At 
          Your Doorstep And Take You To Your Desired Destination. So Book You 
          Oneway Cab From Lucknow To Gorakhpur Or Varanasi To Bareilly.
        </p>
      </div>

      <div className="benefits-container">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit-card">
            <ul>
              {benefit.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="journey-footer">
        <h3>
          DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS <span className="highlight">INTERCITY CAR RENTALS</span> IN 
          INDIA — WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN 
          EVERY CITY. UNLEASH YOUR JOURNEY!
        </h3>
      </div>
    </section>
  )
}

export default OneWayJourney

