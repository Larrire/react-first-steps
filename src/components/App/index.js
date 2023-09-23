import React, { useState } from "react";
import Post from "../Post";
import Header from "../Header";
import Button from "../Button";
import { ThemeProvider } from "../../context/ThemeContext";
import { getPosts, idMaker, titleMaker } from "../../helpers";
import { AddButtonContainer } from "./styles";

function App() {
  const [posts, setPosts] = useState(getPosts())

  const handleRemove = (postId) => {
    setPosts(previousState => previousState.map(post => {
      if( post.id !== postId ) return post

      return {...post, removed: true}
    }));
  }

  const handleAddPost = () => {
    const newPost = { id: idMaker(), title: titleMaker(), subtitle: titleMaker(), likes: 0 }
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
      <Header/>

      <main className="container">
        <AddButtonContainer>
          <Button onClick={handleAddPost}>Add post</Button>
        </AddButtonContainer>

        {posts.map((post, index) => (
          <Post key={post.title+index}
            post={post}
            onRemove={handleRemove}
            onMarkAsRead={handleMarkAsRead}
            
          />
        ))}
      </main>
    </ThemeProvider>
  </>
}

export default App;