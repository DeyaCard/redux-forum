import React from 'react'
import forumImage from "./../img/Forum_logo.png";

export default function Header() {
  return (
    <div>
      <h2>Welcome to Forum!</h2>
      <img src={forumImage} alt="An image of forum logo" class="center"/>
    </div>
  )
}
