// We'll import createSlice, 
import { createSlice } from '@reduxjs/toolkit'

// define our initial posts array, 
// this is the STATE
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello' },
    { id: '2', title: 'Second Post', content: 'More text' }
]

// pass that to createSlice, 
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // this is the logic behind setting the state
    // this automatically creates the action creater when exporting
    reducers: {
        postAdded(state, action) {
            // this is only okay because its inside a createSlice function (immutable)
            state.push(action.payload)
        }
    }
})

// this generates the action creator function with the same name
export const { postAdded } = postsSlice.actions

// and export the posts reducer function that createSlice generated for us:
export default postsSlice.reducer