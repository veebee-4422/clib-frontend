import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { HomepageData } from "../apiInterfaces/homeApis"

export interface HomeState {
    homepageLoading: boolean;
    homepageErrored: boolean;
    homepageData: any[];
}

export const homeSlice = createSlice({
    name: "home",
    initialState: {
        homepageLoading: false,
        homepageErrored: false,
        homepageData: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHomepageData.pending, (state, action) => {
            state.homepageLoading = true;
        })
        builder.addCase(fetchHomepageData.fulfilled, (state, action) => {
            state.homepageData = action.payload;
            state.homepageLoading = false;
        })
        builder.addCase(fetchHomepageData.rejected, (state, action) => {
            console.log("ERROR: ", action.payload);
            state.homepageLoading = false;
            state.homepageErrored = true;
        })
    }
})

export const fetchHomepageData = createAsyncThunk("fetchHomepageData", async (): Promise<any> => {
    const apiResponse = await axios({
        method: "GET",
        url: "http://127.0.0.1:4000/api/v1/homepage/get-data",
    });

    return apiResponse.data.data;
})

export const {  } = homeSlice.actions;
export default homeSlice.reducer;