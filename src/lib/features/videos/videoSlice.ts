import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  videos: [],
  status: 'idle',
  error: null,
};

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideos(state, action) {
      state.videos = action.payload;
    },
  },
});

export const { setVideos } = videoSlice.actions;

export default videoSlice.reducer;
