
import './App.css'
import BookingForm from './Components/BookingForm'
import { store } from './Store/store'
import { Provider } from 'react-redux'
import Header from './Components/Header/Header'
import WhyYatri from './Components/whyYatri/whyYatri'
import OneWayJourney from './Components/oneWay/oneWay'

import CarTypes from './Components/carTypes/CarTypes'
import Footer from './Components/footer/Footer'
import Landscapes from './Components/LandScape/landScape'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header />
        <main>
          <section className="hero">
            <div className="hero-content">
              <h1>
                INDIA'S <span className="highlight">LEADING</span><br />
                <span className="highlight">ONE-WAY INTER-CITY</span><br />
                CAB SERVICE PROVIDER
              </h1>
              <BookingForm />
            </div>
          </section>
          <WhyYatri />
          <OneWayJourney />
          <Landscapes />
          <CarTypes />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App

