import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  tripType: 'outstation',
  journeyType: 'oneWay',
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',
  returnDate: '',
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setTripType: (state, action) => {
      state.tripType = action.payload
    },
    setJourneyType: (state, action) => {
      state.journeyType = action.payload
    },
    updateField: (state, action) => {
      const { field, value } = action.payload
      state[field] = value
    },
    resetForm: () => initialState,
  },
})

export const { setTripType, setJourneyType, updateField, resetForm } = bookingSlice.actions
export default bookingSlice.reducer
