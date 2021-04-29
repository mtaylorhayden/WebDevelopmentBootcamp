import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

// update the call to configureStore so that the postsReducer
// is being passed as a reducer field named posts

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer
  }
})

// This tells Redux that we want our top-level state object to have a field named posts inside, and all the
// data for state.posts will be updated by the postsReducer function when actions are dispatched.
// where is the posts reducer?