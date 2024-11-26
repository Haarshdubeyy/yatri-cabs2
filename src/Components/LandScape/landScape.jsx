
import './landScape.css'

const Landscapes = () => {
  const features = [
    "Experience the thrill of road travel with our reliable car rental and taxi service as we explore the diverse landscapes of India together. We're passionate about making car hire accessible and enjoyable for everyone.",
    "Instead of worrying about the road, relax in our chauffeur-driven cabs on your next vacation. With a presence in over 2000 cities across India, we're here to take you wherever your heart desires with our car rental services.",
    "We cherish the freedom to stop, breathe in the fresh air, immerse in local cultures, and Savor regional cuisines along the way. These moments of discovery enrich your travels and create lasting memories through our rent a car service.",
    "No destination is too far or too close; we encourage you to explore the beauty around you with our car hire options. Pack your bags, set out on weekend adventures, and uncover the gems in your vicinity with our taxi service.",
    "Planning your trip is a breeze with our user-friendly website, or you can chat with our travel experts at 7860663399 for personalized guidance on car rental. Our cab booking app simplifies the process, ensuring a hassle-free experience when you rent a car.",
    "Our experienced drivers are your companions on the road, guiding you through India's best experiences with our car rental and taxi service. From booking to your safe return home, we're dedicated to ensuring you have an exceptional road trip."
  ]

  return (
    <section className="landscapes">
      <div className="landscapes-content">
        <h2>DISCOVERING INDIA'S DIVERSE LANDSCAPES,<br />ONE SCENIC ROAD TRIP AT A TIME</h2>
        <div className="features-list">
          {features.map((feature, index) => (
            <p key={index} className="feature-item">{feature}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Landscapes

