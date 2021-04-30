import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from '../posts/PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from '../posts/ReactionButtons'

// this is just a component that reads our state.posts array

export const PostLists = () => {
    // the selector from redux (hook)
    const posts = useSelector(state => state.posts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    // keys help react know which items have changed
    const renderedPosts = orderedPosts.map(post => 
         (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className='post-content'>{post.content.substring(0,100)}</p>
            <Link to={`/posts/${post.id}`} className="button muted-button">
                View Post
            </Link>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date}/>
            <ReactionButtons post={post} />
        </article>
    )
    )

    return (
        <section className='post-list'>
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}