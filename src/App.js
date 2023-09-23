import React, { useState, createContext } from "react";
import Post from "../components/Post";
import Header from "../components/Header";
import { getPosts, idMaker, titleMaker } from "../helpers/titleGenerator";
import Button from "../components/Button";
import { ThemeProvider } from "../context/ThemeContext";
import styles from './index.modules.css'

function App() {
  const [posts, setPosts] = useState(getPosts())

  const handleRemove = (postId) => {
    setPosts(previousState => previousState.filter(post => post.id !== postId));
  }

  const handleAddPost = () => {
    const newPost = { id: idMaker(), title: `${titleMaker()}`, subtitle: 'No subtitle', likes: 0 }
    setPosts(previousState => [...previousState, newPost]);
  }

  const handleMarkAsRead = (postId) => {
    setPosts(previousState => previousState.map(post => {
      if( post.id !== postId ) return post

      return {...post, read: true}
    }));
  }

  return <>
    <ThemeProvider>
      <div className={styles.body}>
        <Header/>

        <h2>Posts</h2>
        <Button onClick={handleAddPost}>Add post</Button>
        <hr/>

        {posts.map((post, index) => (
          <Post key={post.title+index}
            post={post}
            onRemove={handleRemove}
            onMarkAsRead={handleMarkAsRead}
            
          />
        ))}
      </div>
    </ThemeProvider>
  </>
}

export default App;