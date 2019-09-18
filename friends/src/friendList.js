// Import

import React, { useState, useEffect } from "react";
import axios from 'axios'
import AddFriend from "./AddFriend";
import FriendCard from "./friendCard";

// FriendList

const Friendlist = ({history}) => {

    const [ friends , setFriends ] = useState('')

   useEffect(() => {
        const token = localStorage.getItem("token")
        const url = "http://localhost:5000/api/friends";

        if (token) {
          axios
            .get(url, {
              headers: {
                Authorization: `${token}`
              }
            })
            .then(response => {
              setFriends(response.data);
            })
            .catch(e => {
              
              localStorage.removeItem("token");
              history.push("/");
            });
        }
      }, [history]);

  return (

    <div className='protected'>
      <AddFriend />
      {friends.length > 0
        ? friends.map(friend => <FriendCard key={friend.id} name = {friend.name} age = {friend.age} email = {friend.email} friend={friend} />)
        : null}

      <button

        className="btn"
            onClick={() => {
                localStorage.removeItem("token");
                    history.push('/login') 
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Friendlist;