// src/redux/formSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    from: "",
    to: "",
    phone: "",
    time: "",
    service: "",
    message: "",
  },
  mapModal: {
    open: false,
    type: "from",
  },
  selectedLocation: [20.5937, 78.9629],
  selectedArea: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = { ...state.formData, ...action.payload };
    },
    openMapModal(state, action) {
      state.mapModal = { open: true, type: action.payload };
    },
    closeMapModal(state) {
      state.mapModal.open = false;
    },
    setSelectedLocation(state, action) {
      state.selectedLocation = action.payload;
    },
    setSelectedArea(state, action) {
      state.selectedArea = action.payload;
    },
  },
});

export const {
  setFormData,
  openMapModal,
  closeMapModal,
  setSelectedLocation,
  setSelectedArea,
} = formSlice.actions;

export default formSlice.reducer;
