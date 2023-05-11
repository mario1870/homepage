"use client"
import React, { useState, useEffect } from 'react';
import "./dashboard.scss"


export default function Dashboard(){
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
  
    const handleSubmit = async (event) => {
      event.preventDefault()
  
      const response = await fetch('/api/blogposts', {
        method: 'POST',
        body: JSON.stringify({ title, content }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
  
      if (response.ok) {
        setTitle('')
        setContent('')
      } else {
        console.error('Failed to create blog post')
      }
    }
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            required
          />
        </div>
        <button type="submit">Create Blog Post</button>
      </form>
    )
}