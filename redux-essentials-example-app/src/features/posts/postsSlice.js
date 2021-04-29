// We'll import createSlice, 
import { createSlice, nanoid } from '@reduxjs/toolkit'

// define our initial posts array, 
// this is the STATE
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello', user: "1" },
    { id: '2', title: 'Second Post', content: 'More text', user: "0" }
]

// pass that to createSlice, 
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded: {
          // do we need to add the userId into this reducer?
        reducer(state, action) {
          state.push(action.payload)
        },
        prepare(title, content, userId) {
          return {
            payload: {
              id: nanoid(),
              title,
              content,
              user: userId
            }
          }
        }
      },
        postUpdated(state, action){
            const { id, title, content } = action.payload
            const existingPost = state.find(post => post.id === id)
            if (existingPost) {
                existingPost.title = title
                existingPost.content = content
            }
        }
    }
})

// this generates the action creator function with the same name
export const { postAdded, postUpdated } = postsSlice.actions

// and export the posts reducer function that createSlice generated for us:
export default postsSlice.reducer