// We'll import createSlice, 
import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

// define our initial posts array, 
// this is the STATE
const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello', user: "1", 
      date: sub(new Date(), { minutes: 10 }).toISOString(), 
      reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
    },
    { id: '2', title: 'Second Post', content: 'More text', user: "0", 
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {thumbsUp: 0, hooray: 0, heart: 0, rocket: 0, eyes: 0}
  }
]

// pass that to createSlice, 
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      reactionAdded(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.find(post => post.id === postId)
        if (existingPost) {
          existingPost.reactions[reaction]++
        }
      },
      postAdded: {
        reducer(state, action) {
          state.push(action.payload)
        },
        prepare(title, content, userId, reactions) {
          return {
            payload: {
              id: nanoid(),
              date: new Date().toISOString(),
              title,
              content,
              user: userId,
              reactions
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
export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

// and export the posts reducer function that createSlice generated for us:
export default postsSlice.reducer