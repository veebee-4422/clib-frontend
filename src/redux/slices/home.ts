import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface HomeState {
    sideBarMenuOpen: boolean;
    homepageLoading: boolean;
    homepageErrored: boolean;
    homepageData: any;
}

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        sideBarMenuOpen: true,
        homepageLoading: false,
        homepageErrored: false,
        homepageData: null,
    },
    reducers: {
        open: (state) => {
            state.sideBarMenuOpen = true;
        },
        close: (state) => {
            state.sideBarMenuOpen = false;
        },
        toggle: (state) => {
            state.sideBarMenuOpen = !state.sideBarMenuOpen;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomepageData.pending, (state, action) => {
            state.homepageLoading = true;
        })
        builder.addCase(fetchHomepageData.fulfilled, (state, action) => {
            state.homepageLoading = false;
            state.homepageData = action.payload;
        })
        builder.addCase(fetchHomepageData.rejected, (state, action) => {
            console.log("ERROR: ", action.payload);
            state.homepageLoading = false;
            state.homepageErrored = true;
        })
    }
})

export const fetchHomepageData = createAsyncThunk("fetchHomepageData", async (): Promise<any> => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const apiResponseData = axios({
                method: "GET",
                url: "https://jsonplaceholder.typicode.com/todos",
                // url: "http://127.0.0.1:4000/api/v1/homepage/get-data",
            }).then(res => res.data).catch(err => reject(err));

            resolve(apiResponseData);
        }, 5000)
    })
})

export const { open, close, toggle } = homeSlice.actions;
export default homeSlice.reducer;