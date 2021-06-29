import React from 'react'
import './Post.css';
import Avatar from '@material-ui/core/Avatar'

function Post({username,imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
            <Avatar className="post__avatar"
            alt="nasty kev"
            src="/static/images/avatar/1.jpg" />
            <h3>{username}</h3>

            </div>
            <img className="post__image" src="https://frontendmasters.com/static-assets/learn/og-learning-path-react.jpg"/>
           <h4 className="post__text"> <strong>{username} </strong>all the nasty you can find</h4> 
        </div>
    )
}

export default Post
