import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        darkMode: true,
        loggedIn: false,
    },
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        toggleLoggedIn: (state) => {
            state.loggedIn = !state.loggedIn;
        },
    },
})

export const { toggleDarkMode, toggleLoggedIn } = globalSlice.actions;
export default globalSlice.reducer;