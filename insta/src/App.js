import React, { useState,useEffect } from "react";
import "./App.css";
import Post from "./Post";
import { db } from './firebase';
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    db.collection('posts').onSnapshot(snapshot => {
      setPosts(snapshot.docs.map(doc => doc.data() ))
    })

  },[])
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__header__image"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        ></img>
      </div>
      {posts.map((post)=>(
              <Post
              username={post.username}
              imageUrl={post.imageUrl}
              caption={post.caption}
            />

      ))}



      <p>instagram clone</p>
    </div>
  );
}

export default App;
