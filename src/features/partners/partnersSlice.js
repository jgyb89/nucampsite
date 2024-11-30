// Importing necessary functions and utilities for the Redux slice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { PARTNERS } from '../../app/shared/PARTNERS'; // Commented out since PARTNERS is no longer used
import { baseUrl } from '../../app/shared/baseUrl';
import { mapImageURL } from '../../utils/mapImageURL';

// Initialize the initial state with new properties for loading status and error message
const initialState = {
    partnersArray: [], // Array to store partner data
    isLoading: true, // Tracks whether the data is being loaded
    errMsg: '' // Stores error messages if fetching fails
};

// Declare fetchPartners using createAsyncThunk for asynchronous fetching of partner data
export const fetchPartners = createAsyncThunk(
    'partners/fetchPartners', // Action type string
    async () => {
        try {
            const response = await fetch(baseUrl + 'partners'); // Fetch data from the server
            if (!response.ok) {
                return Promise.reject('Unable to fetch, status: ' + response.status); // Handle fetch errors
            }
            const data = await response.json(); // Parse the JSON data
            return data; // Return fetched data
        } catch (error) {
            return Promise.reject(error.message || 'Fetch failed'); // Handle any unexpected errors
        }
    }
);

// Define the Redux slice for partners
const partnersSlice = createSlice({
    name: 'partners', // Slice name
    initialState, // Initial state object
    reducers: {}, // No synchronous reducers defined for this slice
    extraReducers: { // Handle asynchronous actions from fetchPartners
        [fetchPartners.pending]: (state) => {
            state.isLoading = true; // Set loading state to true while fetching data
        },
        [fetchPartners.fulfilled]: (state, action) => {
            state.isLoading = false; // Loading is complete
            state.errMsg = ''; // Clear any previous error messages
            state.partnersArray = mapImageURL(action.payload); // Update partnersArray with fetched data
        },
        [fetchPartners.rejected]: (state, action) => {
            state.isLoading = false; // Loading is complete
            state.errMsg = action.error ? action.error.message : 'Fetch failed'; // Set error message
        }
    }
});

// Export the reducer for use in the Redux store
export const partnersReducer = partnersSlice.reducer;

// Selector to get all partners from the state
export const selectAllPartners = (state) => {
    return state.partners.partnersArray;
};

// Selector to get the featured partner from the state
export const selectFeaturedPartner = (state) => {
    return state.partners.partnersArray.find((partner) => partner.featured);
};
