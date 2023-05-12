"use client"
import React, { useState, useEffect } from 'react';
import "./dashboard.scss"


export default function Dashboard(){
    
  const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    const res = await fetch('/api/add_user', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };
  const addBlogpost = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      title: formData.get('title'),
      content: formData.get('content'),
      published: true,
      authorId: 3,
    };

    const res = await fetch('/api/add_blogposts', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };


    return (
      <div style={{ height: "100vh", width:"100vw", display: "flex", justifyContent: "center", alignItems:"center"}}>
   
      <h1>User Registration</h1>

      <form onSubmit={addUser} method="POST">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username"  required /><br /><br />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"  required /><br /><br />

        <button type="submit">Register</button>
      </form>

      <h1>Blogposts erstellen</h1>

      <form onSubmit={addBlogpost} method="POST">
        <label htmlFor="title">Titel:</label>
        <input type="text" id="title" name="title"  required /><br /><br />

        <label htmlFor="content">Content::</label>
        <input type="content" id="content" name="content" required /><br /><br />

        <button type="submit">Register</button>
      </form>

      </div>

    )
}