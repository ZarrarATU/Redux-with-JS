import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchData = createAsyncThunk('data/news',
    async () => {
        const response = await fetch('http://localhost:30400/news');
        const data = await response.json()
        return data
    }
)




export const dataSlice = createSlice({
    name: 'data',
    initialState: { data: [ {
            id: 1,
            title: "Pakistan Launches New Digital Policy",
        }] },
    reducers: () => {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state, action) => {
            state.loading = true
            state.error = false
        })

        builder.addCase(fetchData.rejected, (state, action) => {
            state.news = 'SOMETHING WENT WRONG PLEASE TRY AGAIN SAARS'
            state.loading = false
            state.error = true
        })

        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.data = action.payload
            console.log('newssss',action.payload);
            
            state.loading = false
            state.error = false
        })
    }

})