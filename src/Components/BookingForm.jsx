import { useDispatch, useSelector } from 'react-redux';
import { setTripType, setJourneyType, updateField } from '../Store/bookingSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toastify
import './BookingForm.css';

const BookingForm = () => {
  const dispatch = useDispatch();
  const booking = useSelector((state) => state.booking);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', booking);
    toast.success('Form submitted successfully in Console!', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="booking-form">
      <div className="trip-types">
        <button
          className={`trip-type ${booking.tripType === 'outstation' ? 'active' : ''}`}
          onClick={() => dispatch(setTripType('outstation'))}
        >
          Outstation
        </button>
        <button
          className={`trip-type ${booking.tripType === 'local' ? 'active' : ''}`}
          onClick={() => dispatch(setTripType('local'))}
        >
          Local
        </button>
        <button
          className={`trip-type ${booking.tripType === 'airport' ? 'active' : ''}`}
          onClick={() => dispatch(setTripType('airport'))}
        >
          Airport
        </button>
      </div>

      <div className="journey-types">
        <button
          className={`journey-type ${booking.journeyType === 'oneWay' ? 'active' : ''}`}
          onClick={() => dispatch(setJourneyType('oneWay'))}
        >
          One Way
        </button>
        <button
          className={`journey-type ${booking.journeyType === 'roundTrip' ? 'active' : ''}`}
          onClick={() => dispatch(setJourneyType('roundTrip'))}
        >
          Round Trip
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="From"
            value={booking.from}
            onChange={(e) => dispatch(updateField({ field: 'from', value: e.target.value }))}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="To"
            value={booking.to}
            onChange={(e) => dispatch(updateField({ field: 'to', value: e.target.value }))}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <input
              type="date"
              value={booking.pickupDate}
              onChange={(e) => dispatch(updateField({ field: 'pickupDate', value: e.target.value }))}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="time"
              value={booking.pickupTime}
              onChange={(e) => dispatch(updateField({ field: 'pickupTime', value: e.target.value }))}
              required
            />
          </div>
        </div>
        {booking.journeyType === 'roundTrip' && (
          <div className="form-group">
            <input
              type="date"
              placeholder="Return Date"
              value={booking.returnDate}
              onChange={(e) => dispatch(updateField({ field: 'returnDate', value: e.target.value }))}
              required
            />
          </div>
        )}
        <button type="submit" className="submit-btn">Explore Cabs</button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default BookingForm;
