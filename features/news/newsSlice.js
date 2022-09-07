import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import newsApi from './newsApi'

const apikey = 'umsOzXNMyC3GANCt1GnGLAZVJPc2T2aV'

export const fetchNews = createAsyncThunk(
    'newsRTK/fetchNews',
    async (type) => {
        const response = await newsApi.get(`/${type}/7.json?api-key=${apikey}`)
        return response.data.results
    }
)
export const fetchNewsSpecific = createAsyncThunk(
    'newsRTK/fetchNewsSpecific',
    async (type) => {
        const response = await newsApi.get(`/${type}/7.json?api-key=${apikey}`)
        return response.data.results
    }
)

const newsSlice = createSlice({
    name : 'news',
    initialState : {
        news : [],
        specificNews: [],
        page : 1,
        loading : true
    },
    reducers : {
        loadPage(state) {
            state.page += 1
        },
    },
    extraReducers : (builder) => {
        builder
        .addCase(
            fetchNews.pending, (state) => {
                state.loading = true
            }
        )
        .addCase(
            fetchNews.fulfilled, (state, action) => {
                state.news = state.news.concat(action.payload) 
                state.loading = false
            }
        )
        .addCase(
            fetchNews.rejected, () => {
                console.log("Terjadi Error");
            }
        )
        .addCase(
            fetchNewsSpecific.pending, (state) => {
                state.loading = true
            }
        )
        .addCase(
            fetchNewsSpecific.fulfilled, (state, action) => {
                state.specificNews = action.payload
                state.loading = false
            }
        )
        .addCase(
            fetchNewsSpecific.rejected, () => {
                console.log("Terjadi Error");
            }
        )
    }
})

export const { loadPage, loadDetail } = newsSlice.actions
export const getAllNews = (state) => state.news.news
export const getSpecificNews = (state) => state.news.specificNews
export const getPage = (state) => state.news.page
export const getLoading = (state) => state.news.loading
export default newsSlice.reducer