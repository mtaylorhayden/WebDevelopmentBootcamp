import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { postAdded, postsAdded } from './postsSlice'

export const AddPostForm = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    // this is dispatching the data to the reducer
    const onSavePostClicked = () => {
        if (title && content){
            dispatch(
                postAdded({
                    id: nanoid(),
                    title,
                    content
                })
            )
        }
    }

    return (
        <section>
            <h2>Add a new post</h2>
            <form>
                <label htmlFor='postTitle'>Post Title:</label>
                <input 
                    type='text'
                    id='postTitle'
                    name='postTitle'
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor='postContent'>Content:</label>
                <textarea
                    id='postContent'
                    name='postContent'
                    value={content}
                    onChange={onContentChanged}
                />
                <button onClick={onSavePostClicked} type='button'>Save Post</button>
            </form>
        </section>
    )
}