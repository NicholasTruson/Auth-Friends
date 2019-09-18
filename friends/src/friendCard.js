// Import

import React from 'react';

// Friend Card

function FriendCard({friend}) {

 console.log('friends', friend)

    return (

      <div className="Friend">

        <div className="Friend__name">{friend.name}</div>
        <div className="Friend__email">{friend.email}</div>
        <div className="Friend__age">Age: {friend.age}</div>
        
          <button className="btn">Delete</button>
      </div>

    );
  }

export default FriendCard;