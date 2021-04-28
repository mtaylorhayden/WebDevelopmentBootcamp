import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'

import { PostLists } from './features/posts/PostsList'

import { AddPostForm } from './features/posts/AddPostForm'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <section>
                <React.Fragment >
                  <AddPostForm />
                  <PostLists />
                </React.Fragment>
              </section>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
