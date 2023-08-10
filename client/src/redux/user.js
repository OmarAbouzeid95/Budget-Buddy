import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    remove: (state) => {
      state.user = null
    },
    update: (state, action) => {
      state.user = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { remove, update } = userSlice.actions

export default userSlice.reducer