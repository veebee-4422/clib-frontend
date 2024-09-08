import { createSlice } from "@reduxjs/toolkit";

export const globalSlice = createSlice({
    name: "global",
    initialState: {
        darkMode: true,
    },
    reducers: {
        darkMode: (state) => {
            state.darkMode = true;
        },
        lightMode: (state) => {
            state.darkMode = false;
        },
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
})

export const { darkMode, lightMode, toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;